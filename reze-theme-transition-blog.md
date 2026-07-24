# How to Create a Dynamic "Reze Dance" Theme Transition in Next.js

If you're looking to spice up your dark/light mode toggle with a stunning visual effect, the View Transitions API is your best friend. In this blog post, we'll walk through the step-by-step process of creating a dynamic theme transition using a GIF mask—specifically, the "Reze Dance" transition!

![Reze Dance Theme Transition](/reze-dance.gif)

## The Core Concept

To achieve this effect, we combine two powerful browser features:
1. **The View Transitions API**: This allows us to animate between two DOM states (light mode vs. dark mode).
2. **CSS `mask-image`**: We'll use a GIF as a mask to reveal the new theme, scaling it up from 0 to full screen.

Let's break down the implementation step by step.

---

## Step 1: The JavaScript Toggle Logic

First, we need to intercept the theme toggle click. Instead of immediately switching the theme, we use `document.startViewTransition()` to capture the old and new states.

We also dynamically inject the GIF as a CSS variable (`--transition-gif`). Because GIFs loop automatically and don't reset, we append a timestamp to the URL (`?v=${timestamp}`) to force the browser to reload the GIF from the beginning on every click.

Here is the React component code (using `next-themes`):

```tsx
"use client";

import { useTheme } from "next-themes";

const MASK_PRESETS = [
  "/reze-dance.gif", // Path to your GIF
];

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Fallback for browsers that don't support View Transitions
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    const randomPreset = MASK_PRESETS[Math.floor(Math.random() * MASK_PRESETS.length)];
    const timestamp = Date.now();

    // Inject the GIF as a CSS variable to force reload
    document.documentElement.style.setProperty(
      "--transition-gif",
      `url("${randomPreset}?v=${timestamp}")`
    );

    // Optional: Add a class to body for extra control during transition
    document.body.classList.add("theme-transitioning");

    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    transition.finished.finally(() => {
      document.body.classList.remove("theme-transitioning");
    });
  };

  return (
    <button onClick={handleThemeToggle}>
      Toggle Theme
    </button>
  );
}
```

## Step 2: The CSS Animation

Now for the magic. We use the `::view-transition` pseudo-elements to animate the transition.

We target `::view-transition-new(root)`—which represents the new theme state—and apply our GIF mask. We then animate the `mask-size` from `0` to a massive `4000vmax` to ensure it covers the entire screen.

Add this to your global CSS:

```css
/* Ensure the transition sits on top */
::view-transition {
  z-index: 99999;
}

/* Control the duration of the entire transition */
::view-transition-group(root) {
  animation-duration: 2s;
  z-index: 10;
}

/* The Old State: We just keep it stationary behind the new state */
::view-transition-old(root) {
  animation: none;
  z-index: -1;
}

/* The New State: Apply the mask and scale it up! */
::view-transition-new(root) {
  /* Use the dynamically injected GIF from JS */
  mask: var(--transition-gif, url("/reze-dance.gif")) center / 0 no-repeat;
  -webkit-mask: var(--transition-gif, url("/reze-dance.gif")) center / 0 no-repeat;
  
  /* Animate the mask-size */
  animation: scale-mask 2s cubic-bezier(0.87, 0, 0.13, 1) forwards;
}

/* The Keyframes for scaling the mask */
@keyframes scale-mask {
  0% {
    mask-size: 0;
    -webkit-mask-size: 0;
  }
  10% {
    /* Keep it small briefly to show the start of the dance */
    mask-size: min(300px, 50vw);
    -webkit-mask-size: min(300px, 50vw);
  }
  75% {
    /* Hold the size to emphasize the character */
    mask-size: min(300px, 50vw);
    -webkit-mask-size: min(300px, 50vw);
  }
  100% {
    /* Explode to fill the screen */
    mask-size: 4000vmax;
    -webkit-mask-size: 4000vmax;
  }
}
```

## Wrapping Up

And that's it! By combining the native View Transitions API with CSS masking, you can create a highly engaging, custom theme toggle. The trick with appending the timestamp to the GIF URL ensures the animation plays perfectly every time a user clicks the button.

Have fun adding your own custom GIFs!
