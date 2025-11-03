---
title: "Introduction to HTML"
description: "Learn what HTML is, how it structures web pages, and the basic building blocks of an HTML document."
sidebar:
  label: "Introduction to HTML"
  order: 1
tags: ["html", "basics", "elements", "structure"]
next: Headings & Paragraphs
---

# Introduction to HTML

HTML — short for **HyperText Markup Language** — is the backbone of every web page. It defines the **structure** and **content** of a site, describing what appears on the screen rather than how it looks (that’s CSS’s job).

💡 **Think of HTML as the skeleton of a website.** It provides the bones on which CSS (style) and JavaScript (behavior) build.

---

## What HTML Does

Every web page is really just a text file written in HTML. Your browser reads this file and interprets the tags to decide what to display: text, images, links, buttons, or embedded media.

You’ll often see HTML described as a *markup language* rather than a *programming language* — because HTML doesn’t “run” code or perform logic. It simply **marks up** text with meaning and structure.

---

## Tags vs. Elements

An HTML **element** is everything between an opening and closing tag — including the tags themselves and the content they wrap.

```html
<h1>Hello, world!</h1>
```
| Part | Example | Description |
|------|----------|-------------|
| Opening tag | `<h1>` | Tells the browser to start a heading. |
| Content | `Hello, world!` | The text inside the element. |
| Closing tag | `</h1>` | Marks where the heading ends. |

Together, these make up an **HTML element**.

## Common HTML Elements
HTML includes hundreds of elements, but most pages use a core set of tags: 
| Tag | Purpose |
|-----|----------|
| `<h1>`–`<h6>` | Headings, from largest to smallest importance |
| `<p>` | Paragraphs of text |
| `<a>` | Links to other pages or websites |
| `<img>` | Displays an image |
| `<ul>`, `<ol>`, `<li>` | Lists of items (unordered or ordered) |
| `<div>` | Generic container for grouping content |
| `<span>` | Inline container for styling small text sections |

## Anatomy of an HTML Document
A complete HTML file follows a consistent structure. Here's the basic "boilerplate": 
```<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my very first website.</p>
  </body>
</html>
```

🧱 **Explanation:**

- ``<!DOCTYPE html>`` — declares the file type so browsers know it’s HTML5.  
- The ``<html>`` tag wraps all content.  
- The ``<head>`` contains **metadata** — information *about* the page (title, character set, links to CSS, etc.).  
- The ``<body>`` contains everything you actually see in the browser.

---

## Accessibility & Structure Tips

⚠️ **Don’t skip heading levels.**  
If you use `<h1>`, the next level should be `<h2>`, not `<h3>`. This helps screen readers and search engines understand your content hierarchy.

⚠️ **Use only one `<h1>` per page.**  
This represents the main topic or title of the page and supports accessibility tools in identifying what the page is about.

✅ **Keep paragraphs and line breaks clean.**  
Use `<p>` for paragraphs and `<br />` for line breaks *within* paragraphs, such as in poems, addresses, or lyrics.

💡 **Test your page structure.**  
Use your browser’s **Elements Inspector** or keyboard navigation (`Tab`, `Shift + Tab`) to ensure that content flows in a logical reading order.

---

## Where to Go Next

Now that you know what HTML is and how it’s structured, you’re ready to dive into the elements that define your content.

👉 Continue to [Headings and Paragraphs](/html/headings-paragraphs) to explore the basic text elements of a webpage.

<!-- TODO: Cross-link to css/syntax-selectors once that page exists -->
