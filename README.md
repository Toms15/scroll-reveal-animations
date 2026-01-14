# Scroll Reveal Animations

A lightweight, CSS-only scroll reveal animation system using modern scroll-driven animations API. Perfect for WordPress, Sage, and any modern web project.

## Features

- ✨ Pure CSS animations (no JavaScript required for basic usage)
- 🎯 Highly customizable with CSS custom properties
- 🚀 Performance optimized with `will-change`
- ♿ Accessible (respects `prefers-reduced-motion`)
- 📦 Lightweight (~3KB minified)
- 🎨 Multiple preset variants
- 🔄 Stagger animations support
- 🌐 Modern browser support

## Installation

### NPM

\`\`\`bash
npm install @toms15/scroll-reveal-animations
\`\`\`

### Yarn

\`\`\`bash
yarn add @toms15/scroll-reveal-animations
\`\`\`

## Usage

### Basic Setup

#### Import CSS

\`\`\`javascript
// In your main JS file
import '@toms15/scroll-reveal-animations/dist/scroll-reveal.css';
\`\`\`

Or in your CSS/SCSS:

\`\`\`css
@import '@toms15/scroll-reveal-animations/dist/scroll-reveal.css';
\`\`\`

#### HTML

\`\`\`html
<div class="scroll-reveal">
  <h2>This will fade in on scroll</h2>
</div>
\`\`\`

### Preset Variants

\`\`\`html
<!-- Fade from left -->
<div class="scroll-reveal reveal-from-left">Content</div>

<!-- Fade from right -->
<div class="scroll-reveal reveal-from-right">Content</div>

<!-- Scale effect -->
<div class="scroll-reveal reveal-scale">Content</div>

<!-- Blur effect -->
<div class="scroll-reveal reveal-blur">Content</div>

<!-- Slow animation -->
<div class="scroll-reveal reveal-slow">Content</div>
\`\`\`

### Custom Properties

\`\`\`html
<div class="scroll-reveal" style="
  --reveal-translate-y: 50px;
  --reveal-scale: 0.9;
  --reveal-blur: 5px;
">
  Custom animation
</div>
\`\`\`

### Stagger Animations

#### With JavaScript (Recommended)

\`\`\`javascript
import ScrollReveal from '@toms15/scroll-reveal-animations';

// Auto-initialize
new ScrollReveal();
\`\`\`

\`\`\`html
<div data-stagger-group>
  <div class="scroll-reveal" data-stagger>Item 1</div>
  <div class="scroll-reveal" data-stagger>Item 2</div>
  <div class="scroll-reveal" data-stagger>Item 3</div>
</div>
\`\`\`

#### Without JavaScript

\`\`\`html
<div class="scroll-reveal" data-stagger style="--stagger-index: 0">Item 1</div>
<div class="scroll-reveal" data-stagger style="--stagger-index: 1">Item 2</div>
<div class="scroll-reveal" data-stagger style="--stagger-index: 2">Item 3</div>
\`\`\`

### WordPress/Sage Integration

**resources/scripts/app.js:**

\`\`\`javascript
import ScrollReveal from '@toms15/scroll-reveal-animations';
import '@toms15/scroll-reveal-animations/dist/scroll-reveal.css';

domReady(() => {
  new ScrollReveal({ debug: true });
});
\`\`\`

**In your Blade template:**

\`\`\`html
<div data-stagger-group>
  @foreach($items as $item)
    <div class="scroll-reveal" data-stagger>
      {{ $item->title }}
    </div>
  @endforeach
</div>
\`\`\`

## Customization

### Available CSS Custom Properties

\`\`\`css
.scroll-reveal {
  --reveal-opacity-from: 0;
  --reveal-opacity-to: 1;
  --reveal-translate-y: 100px;
  --reveal-translate-x: 0px;
  --reveal-scale: 1;
  --reveal-rotate: 0deg;
  --reveal-blur: 0px;
  --reveal-delay: 0ms;
  --reveal-range-start: entry 10%;
  --reveal-range-end: cover 30%;
  --reveal-easing: cubic-bezier(0, 0.69, 0.57, 0.56);
}
\`\`\`

### JavaScript API

\`\`\`javascript
const scrollReveal = new ScrollReveal({
  staggerGroupSelector: '[data-stagger-group]',
  staggerItemSelector: '[data-stagger]',
  autoInit: true,
  debug: false
});

// Refresh after dynamic content
scrollReveal.refresh();

// Check browser support
const support = scrollReveal.getSupport();
console.log(support);

// Manually set stagger index
scrollReveal.setStaggerIndex(element, 5);
\`\`\`

## Browser Support

Requires browsers that support [CSS Scroll-driven Animations](https://caniuse.com/css-scroll-driven-animations):

- Chrome/Edge 115+
- Safari 17.5+ (partial)
- Firefox: Behind flag

Graceful fallback for unsupported browsers (elements remain visible).

## License

MIT © Toms

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
\`\`\`

## Step 6: LICENSE
```
MIT License

Copyright (c) 2024 Toms

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
