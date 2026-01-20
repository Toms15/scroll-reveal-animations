/**
 * Scroll Reveal Animations - JavaScript Helper
 * Automatically initializes stagger animations
 * @version 1.0.2
 */

class ScrollReveal {
    constructor(options = {}) {
        this.options = {
            staggerGroupSelector: '[data-stagger-group]',
            staggerItemSelector: '[data-stagger]',
            autoInit: true,
            debug: false,
            ...options
        };

        if (this.options.autoInit) {
            this.init();
        }
    }

    /**
     * Initialize all stagger groups
     */
    init() {
        if (this.options.debug) {
            console.log('ScrollReveal: Initializing...');
        }

        // Check browser support
        if (!this.checkSupport()) {
            if (this.options.debug) {
                console.warn('ScrollReveal: Browser does not support scroll-driven animations');
            }
            return;
        }

        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initStagger());
        } else {
            this.initStagger();
        }
    }

    /**
     * Check if browser supports scroll-driven animations
     */
    checkSupport() {
        return CSS.supports('animation-timeline', 'view()');
    }

    /**
     * Initialize stagger animations
     */
    initStagger() {
        const groups = document.querySelectorAll(this.options.staggerGroupSelector);

        if (this.options.debug) {
            console.log(`ScrollReveal: Found ${groups.length} stagger groups`);
        }

        groups.forEach((group, groupIndex) => {
            const items = group.querySelectorAll(this.options.staggerItemSelector);
            const delayBase = group.dataset.staggerDelay || null;

            if (this.options.debug) {
                console.log(`ScrollReveal: Group ${groupIndex + 1} has ${items.length} items`);
            }

            items.forEach((item, index) => {
                item.style.setProperty('--stagger-index', index);

                // Set custom delay if specified on group
                if (delayBase) {
                    item.style.setProperty('--stagger-delay-base', `${delayBase}ms`);
                }
            });
        });

        if (this.options.debug) {
            console.log('ScrollReveal: Initialization complete');
        }
    }

    /**
     * Refresh/reinitialize (useful for dynamic content)
     */
    refresh() {
        this.initStagger();
    }

    /**
     * Manually set stagger index for an element
     */
    setStaggerIndex(element, index) {
        if (element instanceof Element) {
            element.style.setProperty('--stagger-index', index);
        }
    }

    /**
     * Get info about browser support
     */
    getSupport() {
        return {
            scrollDrivenAnimations: this.checkSupport(),
            customProperties: CSS.supports('--custom', 'property'),
            animationTimeline: CSS.supports('animation-timeline', 'scroll()'),
        };
    }
}

// Auto-initialize if not using modules
if (typeof module === 'undefined') {
    window.ScrollReveal = ScrollReveal;

    // Auto-init with default options
    if (document.currentScript && document.currentScript.hasAttribute('data-auto-init')) {
        new ScrollReveal();
    }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScrollReveal;
}

export default ScrollReveal;
