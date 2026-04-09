# Agent Guidelines for Iron & Oil - Motorcycle Repair Shop

This document provides guidelines for AI agents working on this Next.js codebase.

## Project Overview

"Iron & Oil" is a vintage, custom, and classic motorcycle repair shop website. The site features service listings, appointment booking, and a vintage aesthetic design.

---

## Build / Lint / Test Commands

```bash
# Development
npm run dev                    # Start dev server on port 3000
npm run dev -- -p <port>       # Start on specific port

# Production Build
npm run build                  # Production build
npm run start                  # Start production server

# Linting
npm run lint                   # Run ESLint (Next.js default)

# TypeScript
npx tsc --noEmit               # Type check without emitting files
```

**Note**: No test framework is configured. To add tests:

```bash
# Vitest (recommended for Next.js)
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
# Add to package.json: "test": "vitest"

# Jest
npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom @types/jest
```

---

## Project Structure

```
src/
├── app/                       # Next.js App Router
│   ├── book/page.tsx          # Appointment booking page
│   ├── services/page.tsx      # Services listing
│   ├── globals.css            # Global styles + Tailwind
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/                # Reusable React components
│   ├── BookingForm.tsx        # Multi-step booking wizard
│   ├── Header.tsx             # Site header with navigation
│   └── Footer.tsx             # Site footer
└── data/
    └── bikes.ts               # Motorcycle brands, models, services

public/
└── images/                    # Static images (logos, heroes, etc.)
```

---

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** (`tsconfig.json`)
- Use explicit types for function parameters and return values
- Use `interface` for object shapes, `type` for unions/aliases
- Avoid `any` - use `unknown` when type is truly unknown

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `BookingForm.tsx`, `Header.tsx` |
| Files/Variables | camelCase | `bikeBrands`, `selectedBrand` |
| Constants | camelCase | `timeSlots`, `initialData` |
| Interfaces/Types | PascalCase | `BikeBrand`, `Service` |

### Imports Order

1. React/Next.js built-ins (`react`, `next/link`, `next/image`)
2. Third-party libraries (`lucide-react`)
3. Internal aliases (`@/components`, `@/data`)
4. Relative imports (`./components`)
5. Type imports (`import type { ... }`)

```typescript
// ✅ Correct
import { useState } from "react";
import Link from "next/link";
import { ShipWheel, Wrench } from "lucide-react";
import { services } from "@/data/bikes";
import Header from "@/components/Header";
import type { Service } from "@/data/bikes";

// ❌ Incorrect
import Header from "@/components/Header";
import { useState } from "react";
```

### Component Patterns

- Use `"use client"` directive only for components with hooks
- Prefer functional components with hooks over class components
- Extract reusable logic into custom hooks
- Keep components focused (single responsibility)

### Tailwind CSS v3

Custom colors defined in `globals.css`:

```css
/* Available classes */
bg-vintage-cream    /* #F5F0E6 - Background */
bg-vintage-tan      /* #D4A574 - Secondary accent */
bg-vintage-brown    /* #5C4033 - Primary accent */
bg-vintage-darkBrown /* #3D2914 - Dark backgrounds */
bg-vintage-gold     /* #C9A227 - Highlights */
bg-vintage-amber    /* #FFBF00 - Special highlights */
bg-vintage-charcoal /* #2C2C2C - Text on light */
bg-vintage-sage     /* #8B9A7D - Success states */

/* Fonts */
font-serif  /* Playfair Display - Headings */
font-sans   /* Inter - Body text */
```

### Vintage Design Patterns

Maintain these consistent patterns:

- **Ornamental dividers**: `.ornament-divider` with CSS gradient
- **Cards**: `.vintage-card` with border and offset shadow
- **Buttons**: `.vintage-button` (primary) and `.vintage-button-secondary`
- **Inputs**: `.vintage-input` and `.vintage-select`

### File Organization

```
1. Imports (external → internal → types)
2. Interfaces/Types (if module-level)
3. Component definition
4. Helper functions (component-specific)
5. Export default
```

### Props Documentation

Use JSDoc for complex props:

```typescript
interface BookingFormProps {
  /** Callback when booking is successfully submitted */
  onSuccess?: () => void;
  /** Initial data to pre-fill the form */
  initialData?: Partial<BookingData>;
}
```

### Error Handling

- Use `try/catch` for async operations
- Display user-friendly error messages in UI
- Log errors with descriptive context
- Never expose sensitive information in error messages

### API Routes

Create API routes in `src/app/api/[route]/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Message" }, { status: 500 });
  }
}
```

### Email Integration

Uses **Resend** for transactional emails. Environment variables required:

```bash
# .env file
RESEND_API_KEY=re_your_api_key_here
```

API route: `src/app/api/send-email/route.ts`

### Accessibility

- Use semantic HTML (`<header>`, `<main>`, `<footer>`, `<nav>`)
- Include `alt` text for images
- Associate `<label>` elements with form inputs
- Maintain proper heading hierarchy (h1 → h2 → h3)

---

## Adding New Features

### New Service

Edit `src/data/bikes.ts` - add to `services` array:

```typescript
{
  id: "service-id",
  name: "Service Name",
  description: "Description text",
  price: "$100",
  duration: "1-2 hours",
}
```

### New Motorcycle Brand

Edit `src/data/bikes.ts` - add to `bikeBrands` array:

```typescript
{
  name: "Brand Name",
  models: ["Model 1", "Model 2", "Model 3"],
}
```

### New Page

1. Create `src/app/[page]/page.tsx`
2. Add page component with Header/Footer wrapper
3. Update navigation in `Header.tsx` if needed

### New Component

1. Create in `src/components/` with PascalCase name
2. Add `"use client"` if using hooks
3. Export as default
4. Import in pages as needed

---

## Version Information

| Technology | Version |
|------------|---------|
| Next.js | 16.2.1 |
| React | 19.2.4 |
| TypeScript | 6.0.2 |
| Tailwind CSS | 3.4.19 |
| Node | 20.x+ |

---

## Testing Single Components

When testing is added, run a single test file:

```bash
# Vitest
npx vitest run src/components/BookingForm.test.tsx

# Jest
npx jest src/components/BookingForm.test.tsx
```
