---
title: "HTML Boilerplate"
description: "Learn the standard structure of an HTML document and what each part does."
sidebar:
  label: "HTML Boilerplate"
  order: 7
tags: ["html", "boilerplate", "structure", "doctype"]
prev: File Paths
next: Media Elements
---

# HTML Boilerplate

Every HTML page starts with the same basic structure—called the **HTML boilerplate**.  
It provides the foundation that browsers use to understand and render your content.

---

## The Standard HTML Boilerplate

Here’s what a minimal, valid HTML5 document looks like:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>Welcome to my first website.</p>
  </body>
</html>
```
---

## Boilerplate Breakdown

Let’s look at what each part of the HTML boilerplate does:

| Line | Code | Purpose |
|------|------|----------|
| 1 | `<!DOCTYPE html>` | Declares that this is an HTML5 document so browsers interpret it correctly. |
| 2 | `<html lang="en">` | Opens the root element of the page and defines the language for accessibility and search engines. |
| 3–8 | `<head>...</head>` | Contains metadata—information *about* the document rather than what’s shown on screen. |
| 4 | `<meta charset="UTF-8" />` | Sets the character encoding so the browser can display text correctly (supports most languages and symbols). |
| 5 | `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` | Ensures the page scales properly on mobile devices. |
| 6 | `<title>My First Page</title>` | Defines the page title shown on browser tabs and search results. |
| 9–12 | `<body>...</body>` | Contains everything visible to the user—text, images, links, etc. |

---

💡 **Pro Tip:**  
You can expand this basic template with links to CSS and JavaScript files as your site grows.

```html
<head>
  <link rel="stylesheet" href="css/styles.css" />
  <script src="js/script.js" defer></script>
</head>
```
✅ The `defer` attribute ensures your JavaScript runs after the HTML finishes loading, preventing errors.
---

## Comments in HTML

You can add notes to your code using HTML comments.  
Comments are ignored by the browser but help you or teammates understand the structure of your page.

```html
<!-- This is a comment -->
<p>Hello, world!</p>
```
**💡 Pro Tip:**
Use comments to label closing tags in long sections or to explain tricky code.
```html
<div class="card">
  <h2>Article Title</h2>
  <p>Short description...</p>
</div> <!-- end .card -->
```
## Indentation & Readability

Proper indentation makes your HTML easier to read and debug.
Most developers use two spaces per level of nesting (never tabs in shared projects).

Example:
```html
<section>
  <h2>Contact</h2>
  <form>
    <label for="email">Email:</label>
    <input id="email" type="email" />
  </form>
</section>
```
✅ Keep indentation consistent across your files.
⚠️ Misaligned tags can make closing elements hard to find later.

## Summary
| Concept | Description |
|----------|--------------|
| **Boilerplate** | The base structure of every HTML page |
| **Head** | Contains metadata, page title, and resource links |
| **Body** | Contains all visible content |
| **Comments** | Add notes without affecting the page |
| **Indentation** | Keeps code clean, readable, and easy to maintain |

## Next Steps

You’ve now mastered the essentials of HTML structure — everything from tags and attributes to the standard document layout.
Next, we’ll move into CSS, where you’ll learn how to style and visually organize everything you’ve built.

👉 Continue to [Media Elements](/html/media-elements)

<!-- TODO: Add cross-link to javascript/dom once created -->