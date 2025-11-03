---
title: "CSS Selectors"
description: "Learn how CSS selectors target specific HTML elements to apply styles."
sidebar:
  label: "Selectors"
  order: 2
tags: ["css", "selectors", "syntax"]
prev: Intro to CSS
next: Colors & Fonts
---

# CSS Selectors

A **selector** tells the browser *which* HTML elements to style.  
Every CSS rule starts with a selector, followed by curly braces `{ }` that contain the style declarations.

```css
selector {
  property: value;
}
```
Example: 
```css
p {
  color: darkslategray;
  font-size: 16px;
}
```
This targets every `<p>` element and applies those styles.

## Element Selectors
Element selectors target all instances of a specific HTML tag.
```html
<h1>Main Title</h1>
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```
And in your CSS:

```css
h1 {
  color: navy;
}

p {
  color: gray;
  line-height: 1.5;
}
```
This applies the rules to all `<h1>` and `<p>` elements on the page.

## Class Selectors
Classes allow you to style multiple elements that share a common identifier.
In HTML, add a `class` attribute; in CSS, prefix the class name with a dot (`.`).
```html
<h2 class="highlight">Special Heading</h2>
<p class="highlight">This paragraph is highlighted too.</p>
```
And in your CSS:

```css
.highlight {
  background-color: lightyellow;
  color: darkred;
}
```
This applies the same styling to every element with `class="highlight"`.

## ID Selectors
IDs target **one unique element.**
In HTML, add an `id` attribute; in CSS, prefix the ID name with a hash symbol (`#`).
```html
<h1 id="main-title">Welcome to My Page</h1>
<p>This text uses the site’s main heading above.</p>
```
And in your CSS:

```css
#main-title {
  color: darkblue;
  text-transform: uppercase;
  letter-spacing: 2px;
}
```
Each HTML document should only use a given ID once — IDs are meant for unique elements such as a navigation bar, footer, or hero section.

## Attribute Selectors

Attribute selectors apply styles to elements that include a specific attribute (and optionally, a specific value).
```html
<p draggable="true">You can drag this text.</p>
<p>This one stays put.</p>
```
And in your CSS: 
```css
p[draggable] {
  color: crimson;
}
```
This example selects only the `<p>` elements that have a `draggable` attribute, regardless of its value.

To target a specific value:
```css
input[type="text"] {
  border: 2px solid teal;
}
```
---

## Universal Selector

The universal selector (`*`) targets **all elements** on a page.  
It’s often used for resetting margins or applying global styles.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
This ensures that all elements follow a consistent sizing model.

## Combining Selectors

Selectors can be combined to create more precise rules.

### Grouping Selector

Use commas to apply the same styles to multiple selectors:
```css
h1, h2, h3 {
  color: darkslategray;
}
```
### Descendant Selector
A space between selectors means “any descendant of.”
This rule targets `<p>` elements inside `<div>` elements:
```css
div p {
  color: navy;
}
```
### Child Selector
The greater-than symbol (`>`) means "direct child of":
```css
div > p {
  color: teal;
}
```
### Chaining Selectors
Combine multiple selectors **without spaces** to target elements that meet *all* criteria:
```css
h1.title.large {
  font-size: 3rem;
  color: purple;
}
```
---

## Specificity and Inheritance

When multiple rules target the same element, the browser uses **specificity** to decide which rule wins.

Order of specificity (lowest → highest):

1. **Universal selector** (`*`)
2. **Element selectors** (e.g., `p`, `h1`)
3. **Class / pseudo-class / attribute selectors** (e.g., `.highlight`, `:hover`, `[type="text"]`)
4. **ID selectors** (e.g., `#main-title`)
5. **Inline styles** (`style="..."` in HTML)

If two selectors have the same specificity, the **later one in the stylesheet** takes precedence.

Some properties (like `color` and `font-family`) also **inherit** from their parent elements automatically.

---

## Summary

| Selector Type | Symbol | Example | Purpose |
|----------------|---------|----------|----------|
| Element | none | `p { }` | Targets all instances of an element |
| Class | `.` | `.note { }` | Targets all elements with a class |
| ID | `#` | `#header { }` | Targets one unique element |
| Attribute | `[ ]` | `input[type="text"] { }` | Targets elements with a specific attribute |
| Universal | `*` | `* { }` | Targets all elements |
| Grouping | `,` | `h1, h2 { }` | Applies the same rule to multiple selectors |

---

Next: [Colors & Fonts →](/css/colors-fonts)
