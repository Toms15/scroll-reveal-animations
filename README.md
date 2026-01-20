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

```bash
npm install @toms15/scroll-reveal-animations
```

### Yarn

```bash
yarn add @toms15/scroll-reveal-animations
```

## Usage

### Basic Setup

#### Import CSS

```javascript
// In your main JS file
import '@toms15/scroll-reveal-animations/dist/scroll-reveal.css';
```

Or in your CSS/SCSS:

```css
@import '@toms15/scroll-reveal-animations/dist/scroll-reveal.css';
```

#### HTML

```html
<div class="scroll-reveal">
  <h2>This will fade in on scroll</h2>
</div>
```

### Preset Variants

```html
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
```

### Custom Properties

```html
<div class="scroll-reveal" style="
  --reveal-translate-y: 50px;
  --reveal-scale: 0.9;
  --reveal-blur: 5px;
">
  Custom animation
</div>
```

### Stagger Animations

#### CSS-Only

Perfect for static content. Use numbered classes:

```html
<div class="scroll-reveal stagger-1">Item 1</div>
<div class="scroll-reveal stagger-2">Item 2</div>
<div class="scroll-reveal stagger-3">Item 3</div>

<!-- Fast stagger (5% step) -->
<div class="scroll-reveal stagger-fast-1">Item 1</div>
<div class="scroll-reveal stagger-fast-2">Item 2</div>

<!-- Slow stagger (15% step) -->
<div class="scroll-reveal stagger-slow-1">Item 1</div>
<div class="scroll-reveal stagger-slow-2">Item 2</div>

<!-- Very slow stagger (20% step) -->
<div class="scroll-reveal stagger-very-slow-1">Item 1</div>
<div class="scroll-reveal stagger-very-slow-2">Item 2</div>
```

Available classes: `.stagger-1` through `.stagger-50` (and all variants)

#### JS-Enhanced (Dynamic - Optional)

```javascript
import ScrollReveal from '@toms15/scroll-reveal-animations';

// Auto-initialize
new ScrollReveal();
```

```html
<div data-stagger-group data-stagger-step="10">
    <div class="scroll-reveal" data-stagger>Item 1</div>
    <div class="scroll-reveal" data-stagger>Item 2</div>
    <div class="scroll-reveal" data-stagger>Item 3</div>
</div>
```

### WordPress/Sage Integration

**resources/scripts/app.js:**

```javascript
import ScrollReveal from '@toms15/scroll-reveal-animations';
import '@toms15/scroll-reveal-animations/dist/scroll-reveal.css';

domReady(() => {
  new ScrollReveal({ debug: true });
});
```

**In your Blade template:**

```html
<div data-stagger-group>
  @foreach($items as $item)
    <div class="scroll-reveal" data-stagger>
      {{ $item->title }}
    </div>
  @endforeach
</div>
```

## Customization

### Available CSS Custom Properties

```css
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
```

### JavaScript API

```javascript
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
```

## Browser Support

Requires browsers that support [CSS Scroll-driven Animations](https://caniuse.com/css-scroll-driven-animations):

- ✅ Chrome/Edge 115+
- ⚠️ Safari 17.5+ (partial support)
- ⚠️ Firefox: Behind flag (experimental)

**Graceful Degradation**: Unsupported browsers will display all elements without animation.

## Troubleshooting

### Animations not working?

1. Check browser support
2. Verify CSS is imported
3. Check if `prefers-reduced-motion` is enabled
4. Inspect element styles in DevTools

### Stagger not working?

1. Ensure JavaScript is imported and initialized
2. Check `data-stagger-group` wrapper exists
3. Verify items have `data-stagger` attribute
4. Check console for errors with `debug: true`

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT © Toms15

## Links

- [GitHub Repository](https://github.com/toms15/scroll-reveal-animations)
- [NPM Package](https://www.npmjs.com/package/@toms15/scroll-reveal-animations)
- [Report Issues](https://github.com/toms15/scroll-reveal-animations/issues)
- [MDN: Scroll-driven Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)

## Changelog

### 1.1.0

#### Added
- CSS-only stagger classes (`.stagger-1` through `.stagger-50`)
- Stagger speed variants: `fast`, `slow`, `very-slow`
- SCSS generation for dynamic class creation
- Support for both CSS-only and JS-enhanced workflows
- Enhanced WordPress/Blade integration examples

#### Changed
- Build system switched from PostCSS to SASS
- Improved documentation with dual-mode stagger examples

#### Fixed
- Stagger animation timing for horizontal layouts
- Range-based stagger calculation for elements appearing together

### 1.0.3

#### Fixed
- Animation delay calculation for stagger groups
- Data attribute support for custom stagger delays

### 1.0.2

#### Fixed
- Stagger animation timing improvements
- Added support for `data-stagger-delay` attribute

### 1.0.1

#### Fixed
- PostCSS build warnings
- Package repository URL normalization

### 1.0.0

#### Added
- Initial release
- Core scroll reveal system with CSS scroll-driven animations
- Multiple preset variants (from-left, from-right, scale, blur, etc.)
- Stagger animations with JS-enhanced support
- WordPress/Sage integration
- Accessibility support (respects `prefers-reduced-motion`)
- Performance optimizations with `will-change`
- Comprehensive documentation

Made with ❤️ by [Toms15](https://github.com/toms15)
