---
title: "Attributes"
description: "Learn how HTML attributes add extra information to elements, control behavior, and connect tags with styles or scripts."
sidebar:
  label: "Attributes"
  order: 5
tags: ["html", "attributes", "syntax", "global"]
prev: Links
next: File Paths
---

# HTML Attributes

HTML **attributes** provide additional information about elements.  
They modify how an element behaves, looks, or interacts with the page.

Attributes are always included **inside the opening tag** and use a **name-value pair** format:

```html
<tagname attribute="value">Content</tagname>
```
---

## Common Attributes

Here are some of the most frequently used HTML attributes:

| Attribute | Example | Description |
|------------|----------|-------------|
| `href` | `<a href="https://example.com">Visit site</a>` | Specifies the link destination |
| `src` | `<img src="image.jpg" />` | Points to the source file for an image or media element |
| `alt` | `<img src="photo.jpg" alt="Sunset over the ocean" />` | Provides alternative text for images (important for accessibility) |
| `title` | `<p title="Hover text">Text</p>` | Adds tooltip text that appears on hover |
| `id` | `<div id="header"></div>` | Gives an element a unique identifier |
| `class` | `<p class="highlight">Content</p>` | Groups elements for styling with CSS |
| `style` | `<p style="color: blue;">Inline style</p>` | Adds CSS directly to an element (not best practice for large projects) |

✅ **Tip:** Attribute names are always lowercase, and values are enclosed in quotes.  
💡 **Pro Tip:** Use `class` for styling and `id` for unique element targeting.

---
---

## Global Attributes

Most HTML elements share a common set of attributes called **global attributes**.  
These can be used on almost any tag to improve accessibility, provide unique identifiers, or attach extra data.

| Attribute | Description | Example |
|------------|--------------|----------|
| `id` | Unique identifier for a specific element | `<section id="about">...</section>` |
| `class` | Groups similar elements for styling or scripting | `<div class="container">...</div>` |
| `style` | Adds inline CSS directly to the element | `<p style="color: teal;">Hello!</p>` |
| `title` | Adds tooltip text that appears on hover | `<img src="cat.jpg" title="My cat" />` |
| `lang` | Declares the language of the content | `<html lang="en">...</html>` |
| `data-*` | Stores custom data used by scripts | `<button data-user="daniel">Click</button>` |

💡 **Pro Tip:**  
Use `data-*` attributes when you want to attach small bits of information to an element for use in JavaScript later.  
For example:

```html
<button data-theme="dark" data-user-id="42">Change Theme</button>
```
---

## The `<img>` Element

Images are added to webpages with the `<img>` tag.  
Unlike most elements, `<img>` is **self-closing** — it doesn’t wrap content, and it requires specific attributes to work correctly.

```html
<img src="mountain.jpg" alt="Snowy mountain range at sunrise" width="600" height="400" />
```
| Attribute | Description |
|------------|--------------|
| `src` | Specifies the path or URL of the image file |
| `alt` | Provides alternate text if the image fails to load (and for screen readers) |
| `width` / `height` | Set the display size (in pixels) |
| `title` | Optional tooltip text that appears when hovered |

✅ **Accessibility Tip:** Always include an `alt` attribute. It helps users who rely on screen readers and improves SEO.

💡 **Pro Tip:**  
When possible, use relative file paths (e.g., `images/photo.jpg`) instead of full URLs — they’re easier to maintain as your site grows.

---

## Next Steps

Attributes unlock customization and interactivity — but they also rely on file structure and linking.

👉 Continue to [File Paths](/html/file-paths) to learn how to properly link images, stylesheets, and other assets in your project.

<!-- TODO: Add cross-link to css/colors-fonts when ready -->
