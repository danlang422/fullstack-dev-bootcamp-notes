// scripts/generateDocs.js
import fs from "fs";
import path from "path";

const structure = {
  html: ["intro","elements","attributes","structure","links-and-media","forms","semantics"],
  css: ["intro","selectors","box-model","positioning","flexbox","grid","responsive-design","design-fundamentals"],
  javascript: ["intro","variables-and-data-types","functions","control-flow","arrays-and-objects","dom-manipulation","events","debugging","higher-order-functions"],
  jquery: ["intro","selectors-and-syntax","manipulation","animations"],
  bootstrap: ["intro","layout-and-grid","components","theming"],
  "command-line": ["basics","filesystem-navigation","nodejs-intro","version-control"],
  projects: ["dicee","drum-kit","simon-game","tindog"]
};

const base = "src/content/docs";

for (const [folder, files] of Object.entries(structure)) {
  fs.mkdirSync(path.join(base, folder), { recursive: true });
  files.forEach((file, index) => {
    const filePath = path.join(base, folder, `${file}.md`);
    if (!fs.existsSync(filePath)) {
      const title = file.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
      const frontmatter = `---\ntitle: "${title}"\ndescription: ""\ntags: ["${folder}"]\nsidebar:\n  label: "${title}"\n  order: ${index + 1}\n---\n`;
      fs.writeFileSync(filePath, frontmatter);
      console.log(`✅ Created ${filePath}`);
    } else {
      console.log(`⏭️  Skipped existing file: ${filePath}`);
    }
  });
}

console.log("✨ Done! Check src/content/docs/");
