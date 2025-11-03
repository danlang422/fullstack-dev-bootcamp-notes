---
title: "CSS Colors & Fonts"
description: "Learn how to style text and backgrounds using color, font, and typography properties."
sidebar:
    label: "Colors & Fonts"
    order: 3
tags: ["css", "colors", "fonts", "typography"]
prev: Selectors
next: Box Model
---

# CSS Colors & Fonts

CSS gives you precise control over the **look and feel** of text and backgrounds.  
You can use named colors, hexadecimal values, RGB values, or even add transparency to create visual depth.

---

## Colors

### Named Colors

CSS supports a wide range of **named colors** like `red`, `blue`, `gold`, and `darkslategray`.  

```css
h1 {
  color: darkslategray;
}

p {
  background-color: lightgoldenrodyellow;
}
```
Named colors are easy to remember and quick to use, but for precise control, designers often prefer **hex codes** or **RGB values**.

---

### Hexadecimal (Hex) Colors

Hex codes represent colors using combinations of red, green, and blue (RGB) values in hexadecimal format.  
Each pair of digits represents the intensity of a color channel (from `00` to `FF`).

```css
h1 {
  color: #5D3891; /* purple */
}

p {
  background-color: #F5E8C7; /* soft cream */
}
```
You can also include a **transparency (alpha)** value by adding two extra digits to the end of the hex code.
```css
div {
  background-color: #5D389180; /* 50% transparent purple */
}
```
## RGB and RGBA Values

RGB and RGBA functions express colors using numbers instead of hex codes.
```css
body {
  background-color: rgb(240, 240, 240);
}

h2 {
  color: rgba(93, 56, 145, 0.5); /* purple at 50% opacity */
}
```
- **RGB** = Red, Green, Blue (0–255 for each)
- **RGBA** = RGB + Alpha channel (0–1 for transparency)

---

## Fonts

Typography in CSS is controlled through a set of font-related properties that define **size**, **weight**, **family**, and **alignment**.

---

### Font Size

Font size can be defined in several different **units**:

| Unit | Description | Example | Notes |
|------|--------------|----------|--------|
| `px` | Pixels (fixed size) | `font-size: 16px;` | Most common; not scalable |
| `pt` | Points (print-based) | `font-size: 12pt;` | Rarely used for screens |
| `em` | Relative to parent element | `font-size: 1.5em;` | Inherits size from parent |
| `rem` | Relative to root element | `font-size: 1.5rem;` | Consistent across page |

Example:

```html
<body style="font-size: 20px;">
  <h1 style="font-size: 2em;">This is 40px</h1>
</body>
```
---

### Font Weight

You can control how bold or light text appears using the `font-weight` property.

```css
h1 {
  font-weight: bold;
}

p {
  font-weight: 300; /* numeric weight */
}
```
Common values include:
- `normal`
- `bold`
- `lighter` / `bolder`
- Numeric range: `100` (thin) → `900` (extra bold)

## Font Family

Specify which typeface to use with `font-family`.
Always include a fallback font (generic family) in case the first isn’t available.
```css
h1 {
  font-family: Helvetica, sans-serif;
}

p {
  font-family: "Times New Roman", serif;
}
```
Font families with spaces must be wrapped in quotes.
---

### Using Google Fonts

You can add free fonts from [Google Fonts](https://fonts.google.com).

1. Choose a font and click **“Get Embed Code”**.  
2. Copy the `<link>` tag and paste it inside your HTML `<head>` section.  
3. Apply the font in your CSS using its `font-family` rule.

```html
<head>
  <link
    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
    rel="stylesheet"
  />
</head>
```
```css
body {
  font-family: "Quicksand", sans-serif;
}
```
This ensures the font is downloaded and displayed even if users don’t have it installed locally.

## Text Alignment

Use the text-align property to control horizontal text positioning.
```css
h1 {
  text-align: center;
}

p {
  text-align: justify;
}
```
Common values include `left`, `right`, `center`, and `justify`.

## Summary
|Property | Example | Description |
|---------|---------|-------------|
|`color` |`color:blue;`|Text color|
|`background-color`|`background-color: #F0F0F0;`|Element background color|
|`font-size`|`font-size: 1.2rem;`| Text size|
|`font-family`|`font-family: Arial, sans-serif;`| Typeface choice |
|`font-weight`|`font-weight: 700;` | Thickness of text |
|`text-align` | `text-align: center;` | Text alignment within the element |

Next: [Box Model](/css/box-model)
