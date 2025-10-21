# AI Usage

## CSS
### Variables
> What are css variables? Guide me how to define them

### Color Palette
> Based on the color palette i sent, re-define these css variables. Make sure that they are good contrast
```
/* ============================================
   DESIGN TOKENS & VARIABLES
   ============================================ */
:root {
  /* Colors */
  --color-primary: #1a1a2e;
  --color-secondary: #16213e;
  --color-accent: #0f3460;
  --color-highlight: #e94560;
  --color-light: #f5f5f5;
  --color-dark: #0a0e27;
  --color-text: #333333;
  --color-text-light: #666666;
  --color-border: #e0e0e0;
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;

  /* Typography */
  --font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-family-mono: "Courier New", monospace;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  --font-size-3xl: 2.5rem;
  --font-size-4xl: 3rem;

  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #f5f5f5;
    --color-text-light: #b0b0b0;
    --color-border: #333333;
    --color-light: #1a1a1a;
  }
}

body.dark-mode {
  --color-primary: #0a0e27;
  --color-secondary: #1a1a2e;
  --color-accent: #16213e;
  --color-text: #f5f5f5;
  --color-text-light: #b0b0b0;
  --color-border: #333333;
  --color-light: #1a1a1a;
}
```