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

const svgCaseMap = {
  'preserveaspectratio': 'preserveAspectRatio',
  'lineargradient': 'linearGradient',
  'radialgradient': 'radialGradient',
  'stopcolor': 'stopColor',
  'stopopacity': 'stopOpacity',
  'strokewidth': 'strokeWidth',
  'strokelinecap': 'strokeLinecap',
  'strokelinejoin': 'strokeLinejoin',
  'strokedasharray': 'strokeDasharray',
  'strokedashoffset': 'strokeDashoffset',
  'strokemiterlimit': 'strokeMiterlimit',
  'fillrule': 'fillRule',
  'cliprule': 'clipRule',
  'clippath': 'clipPath',
  '<lineargradient': '<linearGradient',
  '</lineargradient>': '</linearGradient>',
  '<radialgradient': '<radialGradient',
  '</radialgradient>': '</radialGradient>',
  '<clipPath': '<clipPath',
  '</clipPath>': '</clipPath>'
};

walkDir(path.join(process.cwd(), 'app'), (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Replacment wrapper
  for (const [lower, camel] of Object.entries(svgCaseMap)) {
    // Note: if doing string matching, we might need a regex
    // For '<' elements we just string replace
    if (lower.startsWith('<')) {
        content = content.replace(new RegExp(lower, 'gi'), camel);
    } else {
        // match word bounds for props
        content = content.replace(new RegExp('\\\\b' + lower + '\\\\s*=', 'gi'), camel + '=');
    }
  }

  // Double check some specific tags
  content = content.replace(/<lineargradient/gi, '<linearGradient');
  content = content.replace(/<\/lineargradient>/gi, '</linearGradient>');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed:', filePath);
  }
});
