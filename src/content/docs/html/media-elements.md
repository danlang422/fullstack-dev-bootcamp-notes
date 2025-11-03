---
title: "Media Elements"
description: "Learn how to embed and control media in HTML, including video, audio, and iframes."
sidebar:
  label: "Media Elements"
  order: 8
tags: ["html", "media", "video", "audio", "iframe"]
prev: HTML Boilerplate
next: Intro to CSS
---

# Media Elements

HTML includes several elements for embedding **multimedia**—such as images, videos, and audio—directly into web pages.

These elements make it easy to display content without requiring extra software or plugins.

---

## The `<video>` Element

You can use the `<video>` tag to embed video clips.  
It requires a `src` attribute to point to the video file, and most browsers support formats like `.mp4`, `.webm`, or `.ogg`.

```html
<video src="videos/demo.mp4" width="640" height="360" controls>
  Your browser does not support the video tag.
  <!-- Fallback message if the browser doesn't support `<video>`>
</video>
```
---

## Common `<video>` Attributes

The `<video>` element supports several attributes that control how playback behaves.

| Attribute | Description |
|------------|--------------|
| `controls` | Displays built-in play, pause, and volume controls |
| `autoplay` | Starts playback automatically when the page loads |
| `loop` | Repeats the video after it finishes |
| `muted` | Starts playback with the sound off |
| `poster` | Displays an image before the video starts playing |

Example:

```html
<video src="media/intro.mp4" width="640" height="360" controls autoplay loop muted poster="images/preview.jpg">
  <!-- Fallback text for older browsers -->
  Your browser does not support the video tag.
</video>
```
**💡 Tip:**
Avoid using `autoplay` with sound enabled — many browsers block it by default for accessibility reasons.
---

## The `<audio>` Element

The `<audio>` tag works much like `<video>`, but for sound files.  
It supports formats like `.mp3`, `.ogg`, and `.wav`.

```html
<audio src="audio/theme.mp3" controls>
  <!-- Fallback text -->
  Your browser does not support the audio element.
</audio>
```
|Attribute | Description |
|----------|-------------|
|`controls`| Displays play, pause, and volume controls |
|`autoplay`| Starts playback automatically (often muted by default) |
|`loop` | Repeats playback automatically |
|`muted`| Starts with sound off |

**💡 Tip:**
You can also include multiple `<source>` elements inside `<audio>` or `<video>` to provide different formats for browser compatibility.
```html
<audio controls>
  <source src="audio/theme.mp3" type="audio/mpeg" />
  <source src="audio/theme.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>
```
---

## The `<iframe>` Element

An **inline frame** (`<iframe>`) allows you to embed another webpage or interactive content inside your page.  
It’s commonly used for things like YouTube videos, maps, or forms.

```html
<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  width="560"
  height="315"
  title="Example YouTube Video"
  allowfullscreen>
</iframe>
```
**⚠️ Security Note:**
When embedding third-party content, only use trusted sources.
Some websites restrict embedding to prevent misuse.

**💡 Pro Tip:**
You can also use allow attributes (e.g., allow="autoplay; fullscreen") to control what embedded content is permitted to do.

## Summary
|Element | Purpose | Key Attributes |
|--------|---------|----------------|
|`<video>`|Embeds a video file | `src`, `controls`, `autoplay`, `loop`, `muted`, `poster` |
|`<audio>`|Embeds an audio file | `src`, `controls`, `autoplay`, `loop`, `muted` |
|`<iframe>`|Embeds another webpage or interactive content |`src`, `width`, `height`, `title`, `allowfullscreen` |

## Next Steps

You’ve now explored how to add interactive and multimedia content to your pages.
Next, we’ll dive into CSS, where you’ll learn how to style and position all the elements you’ve created.

👉 Continue to [CSS Introduction](../css/intro)

<!-- TODO: Add cross-link to javascript/dom when that page is created -->