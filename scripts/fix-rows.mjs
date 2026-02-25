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

let count = 0;
walkDir(path.join(process.cwd(), 'app'), (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Fix rows="3"
  content = content.replace(/rows="(\d+)"/g, 'rows={$1}');
  
  // Fix colSpan="3" and colspan="3"
  content = content.replace(/colSpan="(\d+)"/g, 'colSpan={$1}');
  content = content.replace(/colspan="(\d+)"/g, 'colSpan={$1}');
  
  // Fix cellPadding="0" and cellSpacing="0"
  content = content.replace(/cellPadding="(\d+)"/g, 'cellPadding={$1}');
  content = content.replace(/cellpadding="(\d+)"/g, 'cellPadding={$1}');
  content = content.replace(/cellSpacing="(\d+)"/g, 'cellSpacing={$1}');
  content = content.replace(/cellspacing="(\d+)"/g, 'cellSpacing={$1}');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    count++;
    console.log('Fixed:', filePath);
  }
});
console.log('Fixed files:', count);
