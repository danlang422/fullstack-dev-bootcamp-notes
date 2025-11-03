---
title: "Links & Navigation"
description: "Learn how to create links in HTML using the anchor tag (<a>) and understand absolute, relative, and in-page links."
sidebar:
  label: "Links & Navigation"
  order: 4
tags: ["html", "anchor", "href", "links", "navigation"]
prev: Lists
next: Attributes
---

# Links & Navigation

Links are one of the core features of the web — they let users navigate between pages, sites, and even parts of the same document.

---

## The `<a>` Tag

The **anchor tag** `<a>` defines a hyperlink.  
It uses the `href` attribute (short for *hypertext reference*) to tell the browser where the link should go.

```html
<a href="https://www.google.com">Visit Google</a>
```
|Part |Example |Description |
|-----|--------|------------|
|Opening tag | `<a>` | Starts the anchor element |
|Attribute | `href=https://www.google.com` | Specifies the destination URL |
|Content | `Visit Google` | The clickable text |
|Closing tag | `</a>`| Ends the link |

## Relative Links
A **relative link** points to another page or file within your website. 
```html
<a href="about.html">About Us</a>
<a href="contact/index.html">Contact</a>
```
These examples assume the target files are in the same project folder.

**💡 Tip:**
Use relative links when connecting pages within your own site — it keeps your site portable.

## Absolute Links

An absolute link includes the full URL, starting with `http://` or `https://`.
```html
<a href="https://developer.mozilla.org/">Learn on MDN</a>
```
Absolute links are great for external websites, but they’ll break if the destination URL changes.

## Opening Links in a New Tab
You can use the `target` attribute to control how links open. 
```html
<a href="https://www.google.com" target="_blank">Open Google in new tab</a>
```
**⚠️ Note:**
When using `target="_blank"`, add `rel="noopener noreferrer"` for security and performance. 
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Secure External Link
</a>
```
## Linking Within the Same Page
You can create in-page navigation by linking to an element’s `id` attribute.
```html
<a href="#section2">Jump to Section 2</a>

<h2 id="section2">Section 2</h2>
<p>This is where the link jumps to.</p>
```
These are especially useful for long documents, tables of contents, and “Back to Top” buttons.

## Email and Phone Links

You can also link to email addresses or phone numbers using special URL schemes:
```html
<a href="mailto:info@example.com">Email Us</a>
<a href="tel:+15551234567">Call Us</a>
```

## Summary
|Link Type | Example | Description |
|----------|---------|-------------|
|Relative |`<a href="about.html">About</a>` |	Points to another page within your project|
|Absolute |	`<a href="https://example.com">Visit Site</a>`|	Points to an external website|
|In-Page |	`<a href="#contact">Contact</a>` |	Jumps to an element with that id|
|New Tab |	`<a href="..." target="_blank">Link</a>` |	Opens in a new browser tab|
|Email/Phone |	`<a href="mailto:..." or <a href="tel:...">` |	Opens the user’s email or phone app|

## Next Steps
Now that you understand how to connect pages and resources,
move on to [HTML Attributes](/html/attributes)
 to learn how tags carry additional information and control behavior.

<!-- TODO: Add cross-link to css/selectors once created -->