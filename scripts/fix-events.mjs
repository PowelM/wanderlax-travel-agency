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

walkDir(path.join(process.cwd(), 'app'), (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // React events need camelCase, e.g. onClick, onChange
  content = content.replace(/\s+onclick=\"([^\"]+)\"/g, ' onClick={() => $1}');
  
  // Also any onclick without parameters might be hardcoded like window.print()
  content = content.replace(/\s+onclick=\{([^\}]+)\}/g, ' onClick={$1}');
  
  // Generic fallback if there's any lowercase events not caught
  content = content.replace(/\s+onchange=/g, ' onChange=');
  content = content.replace(/\s+onsubmit=/g, ' onSubmit=');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed:', filePath);
  }
});
