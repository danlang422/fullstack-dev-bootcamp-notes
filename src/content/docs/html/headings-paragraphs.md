---
title: "Headings and Paragraphs"
description: "Learn how to structure text in HTML using headings, paragraphs, and line breaks to create accessible, well-organized content."
sidebar:
  label: "Headings & Paragraphs"
  order: 2
tags: ["html", "headings", "paragraphs", "text-structure"]
prev: Introduction to HTML
next: Lists
---

# Headings and Paragraphs

Text is the heart of most web pages — and HTML gives us clear, semantic ways to organize it. Headings create structure, and paragraphs create readable blocks of content.

---

## Headings

HTML provides six levels of headings, from `<h1>` to `<h6>`. These tags represent **levels of importance**, not just size differences.

```html
<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
```

🧭 Hierarchy Tip:
Imagine your headings like a book outline:
- `<h1>` is the book title.
- `<h2>` is a chapter title.
- `<h3>`-`<h6>` are subheadings within those chapters. 

⚠️ Best Practices
- Only one `<h1>` per page--it represents the page's main topic. 
- Do **not** skip heading levels (e.g., jumping from `<h1>` to `<h3>`). Screen readers and search engines rely on heading order to understand your content. 
- Use headings to describe sections, not just to make text big or bold. (Use CSS for styling instead.)

**💡Pro Tip:**
If you ever find yourself using `<h4>` or deeper, it might be time to simplify or reorganize your content. 

## Paragraphs
Paragraphs (`<p>`) are the building blocks of text content in HTML. They group related sentences together, making content easier to read.
    ```html
    <p>This is a paragraph of text. It will automatically add some spacing before and after in most browsers.</p>
    ```
** ✅ Use `<p>` for blocks of text.**
Each paragraph is separate, and browsers automatically handle spacing. 
** ⚠️ Don't wrap multiple ideas in one `<p>`.**
Instead, use one paragraph per distinct thought. 

## Line Breaks
The `<br>` tag creates a **line break** inside a paragraph—great for poems, addresses, or short pieces of formatted text. 
```html
<p>
    1600 Pennsylvania Avenue NW<br />
    Washington, DC 20500<br />
    United States
  </p>
```
**⚠️ Avoid using `<br>` for layout or spacing.**
Use CSS margin or padding instead. 
**💡 Example:**
```html
<p>To see a World in a Grain of Sand<br />
    And a Heaven in a Wild Flower,<br />
    Hold Infinity in the palm of your hand<br />
    And Eternity in an hour.</p>
```
## Summary
| Element | Purpose |
|-----|----------|
|`<h1>` to `<h6>` | Define headings in descending order of importance. |
|`<p>` | Defines a paragraph or block of text. |
|`<br />` | Insert line breaks within text. |

## Next Steps
Now that you can structure text content, let’s look at how to organize information into lists — one of HTML’s most useful and versatile tools.

👉 Continue to [Lists](/html/lists)