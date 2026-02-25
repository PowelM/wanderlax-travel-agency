import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (!dirPath.includes('node_modules') && !dirPath.includes('.next')) {
        walkDir(dirPath, callback);
      }
    } else {
      callback(dirPath);
    }
  });
}

function fixUrlQuotes(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // The Exact string we are looking to replace:
  // style={{"backgroundImage":"url("https"}}></div>
  // Wait, let's make it slightly more generic just in case:
  const brokenPattern1 = /style=\{\{"backgroundImage":"url\("https"\}\}></g;
  const brokenPattern2 = /style=\{\{"backgroundImage":"url\("https"\}\}>\s*<\/div>/g;
  
  // Actually, we know exactly what it says from the terminal error:
  // style={{"backgroundImage":"url("https"}}></div>
  const searchStr = 'style={{"backgroundImage":"url("https"}}></div>';
  const replaceStr = 'style={{backgroundImage: "url(\'https://images.unsplash.com/photo-1542204165-65bf26472b9b\')"}}></div>';

  if (content.includes(searchStr)) {
      content = content.split(searchStr).join(replaceStr);
  }
  
  // Let's also check for generic `style={{"backgroundImage":"url("https"}}`
  const fallbackSearchStr = 'style={{"backgroundImage":"url("https"}}';
  const fallbackReplaceStr = 'style={{backgroundImage: "url(\'https://images.unsplash.com/photo-1542204165-65bf26472b9b\')"}}';
  
  if (content.includes(fallbackSearchStr)) {
      content = content.split(fallbackSearchStr).join(fallbackReplaceStr);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed:', filePath);
  }
}

walkDir(path.join(process.cwd(), 'app'), fixUrlQuotes);
console.log('Done fixing broken URLs');
