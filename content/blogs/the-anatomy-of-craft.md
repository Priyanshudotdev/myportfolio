---
title: "The Anatomy of Craft"
excerpt: "Engineering is more than just code; it's a medium for expression. Let's dissect what makes a digital product feel alive."
date: "June 18, 2026"
coverImage: "/banner.png"
authorName: "Priyanshu Kayarkar"
authorAvatar: "/profile.jpg"
---

## Beyond the First Pixel

The difference between a *good* tool and a *great* one isn't just functionality—it's **intentionality**. When you use Linear or Vercel, you don't just feel the speed; you feel the **craft**. 

> "Quality is not an act, it is a habit." — Aristotle

### Why Details Matter

In the digital world, every detail is a signal. A button that responds to a hover with a subtle spring animation isn't just decoration; it's a confirmation of existence. It tells the user: *I see you.*

#### The Implementation Loop

Here is how we typically think about the feedback loop in modern UI:

1. **Input**: User intent via mouse or keyboard.
2. **Reaction**: Visual feedback within 16ms (60fps).
3. **Outcome**: The system state updates.

```typescript:index.ts
// A simple hook for intentional feedback
function useIntention() {
  const [active, setActive] = useState(false);
  
  const trigger = () => {
    setActive(true);
    setTimeout(() => setActive(false), 300);
  };

  return { active, trigger };
}
```
---
```typescript:/index.html
// A simple hook for intentional feedback
function useIntention() {
  const [active, setActive] = useState(false);
  
  const trigger = () => {
    setActive(true);
    setTimeout(() => setActive(false), 300);
  };

  return { active, trigger };
}
```
---
```typescript
// A simple hook for intentional feedback
function useIntention() {
  const [active, setActive] = useState(false);
  
  const trigger = () => {
    setActive(true);
    setTimeout(() => setActive(false), 300);
  };

  return { active, trigger };
}
```

### Visualizing the Stack

Designing a modern application requires a multi-layered approach. It's not just a flat plane; it's a hierarchy of concerns:

| Layer | Responsibility | Aesthetic Risk |
| :--- | :--- | :--- |
| **Foundation** | Data & Logic | Minimal |
| **Structure** | Layout & Grid | Medium |
| **Surface** | Colors & Type | **High** |

---

### The Final 10%

Most of the work goes into the first 90%. But the *soul* of the product lives in the final 10%. This is where you add the small, "unnecessary" things:

- [x] Custom selection colors (`#0BC5B3`)
- [x] Scroll progress indicators
- [x] Dynamic ToC (Table of Contents)
- [ ] Motion-adaptive layouts

[Learn more about my design process →](/projects)

*Priyanshu is a developer focused on the intersection of design and engineering.*
