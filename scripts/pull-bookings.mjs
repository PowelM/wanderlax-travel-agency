import fs from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'app', '(stitch)');

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

function htmlToJsx(html) {
  let jsx = html
    .replace(/class=/g, "className=")
    .replace(/for=/g, "htmlFor=")
    .replace(/stroke-width=/g, "strokeWidth=")
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=")
    .replace(/fill-rule=/g, "fillRule=")
    .replace(/clip-rule=/g, "clipRule=")
    .replace(/stroke-miterlimit=/g, "strokeMiterlimit=")
    .replace(/aria-hidden=/g, "aria-hidden=")
    .replace(/aria-label=/g, "aria-label=")
    .replace(/tabindex=/g, "tabIndex=")
    .replace(/xmlns:xlink=/g, "xmlnsXlink=")
    .replace(/<img([^>]*[^\/])>/g, "<img$1 />")
    .replace(/<input([^>]*[^\/])>/g, "<input$1 />")
    .replace(/<br>/g, "<br />")
    .replace(/<hr>/g, "<hr />");

  const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    jsx = bodyMatch[1];
  }

  jsx = jsx.replace(/<script[\s\S]*?<\/script>/gi, "");
  return jsx.trim();
}

async function run() {
  const downloadUrl = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sX2U5YWExNTM3NmFmNDRlMTViYWQ3ODQ1MGFlMWYzYWZmEgsSBxDiv4e_oxYYAZIBIgoKcHJvamVjdF9pZBIUQhI1Njk0MTAzMzg5NTExNDU2MDQ&filename=&opi=89354086";
  const title = "Wanderlux Admin - Bookings Management";

  console.log(`Fetching HTML for: ${title}`);
  try {
    const res = await fetch(downloadUrl);
    const htmlText = await res.text();
    
    const jsxContent = htmlToJsx(htmlText);
    const slug = slugify(title);
    const folderPath = path.join(OUT_DIR, slug);
    
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const componentName = slug.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
    
    const fileContent = `import React from 'react';\n\nexport default function ${componentName}Page() {\n  return (\n    <div className="stitch-screen">\n      ${jsxContent}\n    </div>\n  );\n}\n`;

    fs.writeFileSync(path.join(folderPath, 'page.tsx'), fileContent, 'utf-8');
    console.log(`Saved -> ${folderPath}/page.tsx`);
  } catch (e) {
    console.error(`Failed to process screen ${title}`, e);
  }
}

run();
