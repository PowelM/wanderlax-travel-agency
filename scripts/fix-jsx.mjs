import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

function fixJsx(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Replace <!-- comment --> with {/* comment */}
  content = content.replace(/<!--([\s\S]*?)-->/g, "{/*$1*/}");

  // Fix svg props
  content = content.replace(/viewbox=/gi, "viewBox=");
  content = content.replace(/clip-path=/gi, "clipPath=");
  content = content.replace(/preserveaspectratio=/gi, "preserveAspectRatio=");
  content = content.replace(/<lineargradient/gi, "<linearGradient");
  content = content.replace(/<\/lineargradient>/gi, "</linearGradient>");
  content = content.replace(/stop-color=/gi, "stopColor=");
  content = content.replace(/stop-opacity=/gi, "stopOpacity=");
  content = content.replace(/stroke-dasharray=/gi, "strokeDasharray=");
  content = content.replace(/stroke-dashoffset=/gi, "strokeDashoffset=");
  content = content.replace(/maxlength="(\d+)"/gi, "maxLength={$1}");
  content = content.replace(/tabindex=/gi, "tabIndex=");
  content = content.replace(/datetime=/gi, "dateTime=");
  content = content.replace(/autocomplete=/gi, "autoComplete=");
  content = content.replace(/autofocus=/gi, "autoFocus=");
  content = content.replace(/readonly=/gi, "readOnly=");
  content = content.replace(/enctype=/gi, "encType=");
  content = content.replace(/novalidate=/gi, "noValidate=");
  
  // Fix boolean attributes with empty string values
  const booleanAttrs = ['autoFocus', 'readOnly', 'disabled', 'checked', 'required', 'selected'];
  booleanAttrs.forEach(attr => {
    content = content.replace(new RegExp(`${attr}=""`, 'g'), attr);
  });
  
  // Add missing 'use client' directive
  if (!content.includes('"use client";') && !content.includes("'use client';")) {
    content = '"use client";\n' + content;
  }
  
  // Replace unescaped apostrophes outside of tags... actually escaping them automatically is hard with regex.
  // We can just disable the eslint rule for these files.
  if (!content.includes('eslint-disable react/no-unescaped-entities')) {
      content = '/* eslint-disable react/no-unescaped-entities */\n/* eslint-disable @next/next/no-img-element */\n' + content;
  }
  
  // also fix some style string like style="background-image: url('...')" or style='...'
  content = content.replace(/style=(["'])(.*?)\1/g, (match, quote, p1) => {
    // very basic converter for style string to React style object
    const rules = p1.split(';').filter(Boolean);
    const styleObj = {};
    for (const rule of rules) {
      if (!rule.includes(':')) continue;
      let [key, ...vals] = rule.split(':');
      let val = vals.join(':'); // Re-join in case there are :'s in the URL
      key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      val = val.trim();
      styleObj[key] = val;
    }
    
    // Construct JS object literal properly
    const props = Object.entries(styleObj)
      .map(([k, v]) => {
        const safeV = v.replace(/"/g, "'"); // Convert any inner double quotes to single quotes
        return `${k}: "${safeV}"`;
      })
      .join(', ');
      
    return `style={{ ${props} }}`;
  });

  // Escape <style> contents to safely evaluate JSX
  content = content.replace(/<style>([\s\S]*?)<\/style>/g, (match, p1) => {
    return `<style dangerouslySetInnerHTML={{ __html: \`${p1.replace(/`/g, '\\`')}\` }} />`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed', filePath);
  }
}

walkDir(path.join(process.cwd(), 'app'), fixJsx);
console.log('Done fixing JSX');
