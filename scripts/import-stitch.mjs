import fs from 'fs';
import path from 'path';

// Define the absolute path to the system-generated output JSON
const SCREENS_JSON_PATH = '/home/akubrecah/.gemini/antigravity/brain/64982316-ffa6-4bf5-b25f-7de737f05a55/.system_generated/steps/12/output.txt';

const OUT_DIR = path.join(process.cwd(), 'app', '(stitch)');

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

function htmlToJsx(html) {
  let jsx = html
    .replace(/class=/g, "className=")
    .replace(/for=/g, "htmlFor=")
    // SVG and common attributes
    .replace(/stroke-width=/g, "strokeWidth=")
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=")
    .replace(/fill-rule=/g, "fillRule=")
    .replace(/clip-rule=/g, "clipRule=")
    .replace(/stroke-miterlimit=/g, "strokeMiterlimit=")
    .replace(/aria-hidden=/g, "aria-hidden=") // React allows aria- attributes
    .replace(/aria-label=/g, "aria-label=")
    .replace(/tabindex=/g, "tabIndex=")
    // Handle specific svg attrs
    .replace(/xmlns:xlink=/g, "xmlnsXlink=")
    // Self close elements (basic heuristic)
    .replace(/<img([^>]*[^\/])>/g, "<img$1 />")
    .replace(/<input([^>]*[^\/])>/g, "<input$1 />")
    .replace(/<br>/g, "<br />")
    .replace(/<hr>/g, "<hr />");

  // Extract body innerHTML if present
  const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    jsx = bodyMatch[1];
  }

  // Ensure no script tags
  jsx = jsx.replace(/<script[\s\S]*?<\/script>/gi, "");
  
  // Format to valid TSX
  return jsx.trim();
}

async function run() {
  const content = fs.readFileSync(SCREENS_JSON_PATH, 'utf-8');
  const data = JSON.parse(content);
  
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  for (const screen of data.screens) {
    if (!screen.htmlCode || !screen.htmlCode.downloadUrl) continue;

    console.log(`Fetching HTML for: ${screen.title}`);
    try {
      const res = await fetch(screen.htmlCode.downloadUrl);
      const htmlText = await res.text();
      
      const jsxContent = htmlToJsx(htmlText);
      const slug = slugify(screen.title) || screen.name.split('/').pop();
      const folderPath = path.join(OUT_DIR, slug);
      
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }

      const componentName = slug.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
      
      // We will define it as a generic layout/page component
      const fileContent = `import React from 'react';\n\nexport default function ${componentName}Page() {\n  return (\n    <div className="stitch-screen">\n      ${jsxContent}\n    </div>\n  );\n}\n`;

      fs.writeFileSync(path.join(folderPath, 'page.tsx'), fileContent, 'utf-8');
      console.log(`Saved -> ${folderPath}/page.tsx`);
    } catch (e) {
      console.error(`Failed to process screen ${screen.title}`, e);
    }
  }
}

run();
