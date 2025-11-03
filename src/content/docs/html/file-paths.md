---
title: "File Paths"
description: "Learn how to correctly link images, stylesheets, and other files using relative and absolute paths in HTML."
sidebar:
  label: "File Paths"
  order: 6
tags: ["html", "paths", "links", "directories"]
prev: Attributes
next: HTML Boilerplate
---

# File Paths

When working on a website, HTML often needs to reference **external files**—like images, CSS stylesheets, or JavaScript scripts.  
To do this, you use **file paths** to tell the browser *where* to find those files.

---

## Types of File Paths

There are two main kinds of file paths in HTML:

1. **Relative paths** — point to files *within* your project folder.  
2. **Absolute paths** — point to files *on the web* or at a fixed location on your computer.

---

## Relative Paths

A **relative path** describes how to reach a file *from the current HTML file’s location*.  
It’s the most common way to link files in a website project, since all files live in the same folder structure.

Example project:

```text
/project-folder
│
├── index.html
├── /images
│   └── photo.jpg
└── /css
    └── style.css
```

Here’s how you’d reference those files in your HTML:

```html
<!-- Image path -->
<img src="images/photo.jpg" alt="Mountain view" />

<!-- CSS path -->
<link rel="stylesheet" href="css/style.css" />
```
**💡 Tip:**
No leading slash `(/)` means “start from the current folder.”
If you need to go up one level, use `../` before the folder name.
```html
<img src="../shared/logo.png" alt="Logo" />
```
---

## Absolute Paths

An **absolute path** gives the *full* location of a file, starting from the root of the site or an external URL.

```html
<!-- External absolute path -->
<img src="https://example.com/images/photo.jpg" alt="Photo from external site" />

<!-- Root-relative path -->
<img src="/assets/images/logo.png" alt="Site logo" />
```
**⚠️ Use absolute paths sparingly.**
They’re great for linking to external resources (like CDNs or third-party images),
but they can break if your domain or folder structure changes.

**💡 Pro Tip:**
When building multi-page sites, stick with relative paths whenever possible.
They’re portable, predictable, and make local development much easier.

## Summary
|Path Type | Example | Description |
|----------|---------|-------------|
|Relative | `images/photo.jpg`| Points to a file within the current project folder |
|Parent-Relative | `../shared/logo.png` | Goes up one folder level, then down into another |
|Absolute | `https://example.com/images/photo.jpg` | Points to a full web address or fixed location |

## Next Steps
Now that you can link files and organize your project structure,
you’re ready to put everything together into a complete web page.

👉 Continue to [HTML Boilerplate](/html/boilerplate)
 to learn the standard setup for every new HTML document.

<!-- TODO: Add cross-link to css/index when ready -->