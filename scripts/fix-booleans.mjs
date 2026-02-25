import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      if (!dirPath.includes('node_modules') && !dirPath.includes('.next')) {
        walkDir(dirPath, callback);
      }
    } else {
      callback(dirPath);
    }
  });
}

let count = 0;
walkDir(path.join(process.cwd(), 'app'), (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Fix boolean attributes
  const boolAttrs = ['checked', 'required', 'disabled', 'readOnly', 'multiple', 'autoFocus', 'defaultChecked'];
  boolAttrs.forEach(attr => {
    // replace attr="" with attr
    const regex1 = new RegExp('\\s' + attr + '=""', 'g');
    content = content.replace(regex1, ' ' + attr);
    
    // Some might be attr=''
    const regex2 = new RegExp('\\s' + attr + "=''", 'g');
    content = content.replace(regex2, ' ' + attr);
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    count++;
    console.log('Fixed:', filePath);
  }
});
console.log('Fixed boolean attributes in files:', count);
