---
title: "Lists"
description: "Learn how to organize information in HTML using unordered, ordered, and nested lists."
sidebar:
  label: "Lists"
  order: 3
tags: ["html", "lists", "unordered", "ordered"]
prev: Headings & Paragraphs
next: Links
---

# Lists

Lists are one of HTML’s most useful tools for organizing content.  
They make information easier to read, scan, and structure—whether it’s steps in a process, ingredients in a recipe, or a simple set of bullet points.

HTML supports two main types of lists:
- **Unordered lists (`<ul>`)** — display items with bullet points.  
- **Ordered lists (`<ol>`)** — display items in numbered order.

Both types contain list items (`<li>`) for each entry.
---

## Unordered Lists

Unordered lists use the `<ul>` tag and show each item with a bullet by default.

```html
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Cherries</li>
</ul>
```
✅ Use **unordered lists** when the order of items doesn’t matter—like ingredients, features, or collections.
**⚠️ Avoid using them for steps or sequences.** Use an ordered list instead.

## Ordered Lists

Ordered lists use the `<ol>` tag and display items with numbers by default.
```html
<ol>
  <li>Wake up</li>
  <li>Make coffee</li>
  <li>Start your day</li>
</ol>
```
💡 You can start numbering at a specific value using the start attribute:
```html
<ol start="5">
  <li>Fifth step</li>
  <li>Sixth step</li>
</ol>
```
This list will begin at number 5 instead of 1.
---

## Nested Lists

Lists can also contain other lists.  
This is called **nesting**, and it’s useful for outlining sub-items under a broader topic.

```html
<ul>
  <li>Morning routine</li>
  <ul>
    <li>Brush teeth</li>
    <li>Make coffee</li>
    <li>Read news</li>
  </ul>
  <li>Start work</li>
</ul>
```
**✅ Tip:** Always indent nested lists for readability.
**⚠️ Note:** Start by writing the outer list first, then add inner lists—it’s much easier to keep track of your tags that way.

💡 Nested lists can mix types, too.
You can place an `<ol>` inside a `<ul>` or vice versa, depending on what makes the most sense for your content.
```html
<ol>
  <li>Gather materials</li>
  <li>Follow instructions:</li>
  <ul>
    <li>Read the manual</li>
    <li>Assemble parts</li>
    <li>Test the result</li>
  </ul>
  <li>Finish project</li>
</ol>
```
## Summary
|Element|Purpose|
|-------|-------|
|`<ul>` | Creates an unordered (bulleted) list |
|`<ol>` | Creates an ordered (numbered) list |
|`<li>` | Defines an individual list item |
|`start`| Attribute that sets the starting number for an ordered list |

## Next Steps
Now that you can organize content with lists, it’s time to make your pages more interactive and connected.
Up next: [Links & Navigation](/html/links)
 — where you’ll about the HyperLink part of HTML.

<!-- TODO: Add cross-link to css/syntax-selectors when ready -->