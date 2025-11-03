---
title: "Introduction to CSS"
description: "Learn what CSS is, why it exists, and how to add styling to your web pages."
sidebar:
  label: "Intro to CSS"
  order: 1
tags: ["css", "styling", "intro"]
prev: Media Elements
next: Selectors
---

# Introduction to CSS

CSS stands for **Cascading Style Sheets** — the language that describes **how** HTML elements should be displayed.  
While HTML defines the **structure and content** of a webpage, CSS defines its **appearance**: colors, fonts, spacing, and layout.

---

## What Does “Cascading” Mean?

The term *cascading* refers to how CSS rules are applied and resolved. When multiple styles target the same element, the browser decides which rule “wins” based on:

1. **Specificity** – more specific selectors override more general ones.  
2. **Source order** – when specificity is equal, later rules override earlier ones.  
3. **Inheritance** – some properties naturally pass from parent to child elements.

---

## A Brief History of CSS

Before CSS, web pages relied solely on HTML for both structure and design. Developers had to use tags like `<font>`, `<center>`, and `<color>` (now deprecated), resulting in bulky, hard-to-maintain code.

To solve this, the **World Wide Web Consortium (W3C)** introduced CSS in 1996, separating **content** (HTML) from **presentation** (CSS).

This *separation of concerns* made websites easier to design, maintain, and scale.

---

## Ways to Add CSS

There are **three main ways** to apply CSS to your HTML documents.

### 1. Inline CSS
Add style directly to an element’s `style` attribute.

```html
<p style="color: blue; background-color: yellow;">Inline styling example</p>
```
### 2. Internal CSS

Add styles inside a `<style>` element within your HTML’s `<head>` section.  
These rules apply only to that single page.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      body {
        background-color: lightblue;
      }

      h1 {
        color: navy;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
  </body>
</html>
```
### 3. External CSS

Link to a separate `.css` file from your HTML’s `<head>` section.  
This is the **most common and recommended** way to apply styles — it keeps HTML clean and allows you to reuse one stylesheet across multiple pages.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="styles.css" />
    <title>External CSS Example</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```
And in your `styles.css` file: 
```css
body {
  background-color: #f0f0f0;
}

h1 {
  color: darkslateblue;
  font-family: Helvetica, sans-serif;
  text-align: center;
}
``` 
---

## When to Use Each Type

| CSS Type | Location | Best For | Drawbacks |
|-----------|-----------|-----------|------------|
| **Inline** | Inside HTML element | Small, one-off style changes | Clutters HTML; hard to maintain |
| **Internal** | Inside `<style>` tag (in `<head>`) | Single-page websites or testing | Not reusable across pages |
| **External** | Separate `.css` file | Multi-page or professional sites | Requires separate file link |

---

## Why Separation Matters

Keeping **structure (HTML)** and **style (CSS)** separate makes your code cleaner, easier to read, and faster to update.  
If you ever want to redesign your site, you can simply swap the stylesheet — no need to rewrite the HTML.

---

Next: [CSS Selectors →](/css/selectors)

