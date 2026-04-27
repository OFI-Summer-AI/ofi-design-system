<p align="center">
  <img src="./public/ofi-design-system.svg" alt="OfiUI" width="180" />
</p>

# OfiUI

OfiUI is a React-based design system and docs application for OFI product surfaces. It combines reusable UI primitives, higher-level product patterns, and written guidance in a single repository.

This project is not just a component folder. It is a working docs experience with:

- a landing page
- a navigable docs app
- component demos with preview/code tabs
- product-oriented UI patterns
- written guidance for design and implementation decisions

## Table of contents

- [Overview](#overview)
- [What the repository contains](#what-the-repository-contains)
- [Tech stack](#tech-stack)
- [Application flow](#application-flow)
- [Project structure](#project-structure)
- [Docs structure](#docs-structure)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Design system conventions](#design-system-conventions)
- [How to add things](#how-to-add-things)
- [Brand assets](#brand-assets)
- [Current known issue](#current-known-issue)
- [Roadmap ideas](#roadmap-ideas)

## Overview

OfiUI is built to document and showcase a system of UI primitives and reusable patterns for internal or product-facing interfaces. The repository includes both the implementation and the documentation layer that explains how to use it.

The docs are organized around:

- base components such as button, input, select, table, and switch
- fragments and composite building blocks
- product patterns such as charts, forms, layout, tables, and empty states
- guidance pages for accessibility, color usage, copywriting, icons, typography, theming, and Tailwind usage

## What the repository contains

At a high level, this repo includes:

- `src/components/ui`
  Reusable UI primitives built with React, Tailwind CSS, and Radix UI.

- `src/components/ui-patterns`
  Higher-level patterns and feature-oriented building blocks such as charts, admonitions, multi-select, metric cards, and form array helpers.

- `src/components/icons`
  Custom icon utilities and icon definitions.

- `src/docs`
  The docs application, including layout, routing, page components, previews, code blocks, and section helpers.

- `src/LandingPage.tsx`
  The landing experience shown before entering the docs.

- `src/App.tsx`
  The top-level application flow that starts on the landing page and then transitions into the docs app.

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI primitives
- `class-variance-authority`
- `tailwind-merge`
- Recharts
- React Hook Form
- Zod

## Application flow

The app currently works in two stages:

1. The user lands on the landing page.
2. From there, the user enters the docs application.

This is wired through:

- [src/main.tsx](/Users/daivymorales/Documents/GitHub/ofi-design-system/src/main.tsx:1)
  Bootstraps the React app and wraps it in dark mode.

- [src/App.tsx](/Users/daivymorales/Documents/GitHub/ofi-design-system/src/App.tsx:1)
  Controls the landing-page-first flow and renders `DocsApp` after the user enters.

- [src/docs/DocsApp.tsx](/Users/daivymorales/Documents/GitHub/ofi-design-system/src/docs/DocsApp.tsx:1)
  Loads the docs layout.

- [src/docs/components/DocsLayout.tsx](/Users/daivymorales/Documents/GitHub/ofi-design-system/src/docs/components/DocsLayout.tsx:1)
  Provides the docs shell with header, sidebar, content area, and table of contents.

## Project structure

```text
.
├── public/
│   ├── ofi-design-system.svg
│   └── ofi-design-system.png
├── src/
│   ├── components/
│   │   ├── BrandLogo.tsx
│   │   ├── icons/
│   │   ├── ui/
│   │   └── ui-patterns/
│   ├── docs/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── atoms/
│   │   │   ├── fragments/
│   │   │   ├── getting-started/
│   │   │   └── patterns/
│   │   ├── DocsApp.tsx
│   │   ├── router.tsx
│   │   └── routes.ts
│   ├── App.tsx
│   ├── LandingPage.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── README.md
```

## Docs structure

The docs are registered in [src/docs/routes.ts](/Users/daivymorales/Documents/GitHub/ofi-design-system/src/docs/routes.ts:1).

They are grouped into four sections:

### Getting started

These pages explain system-level rules and guidance:

- Introduction
- Accessibility
- Color usage
- Copywriting
- Icons
- Tailwind classes
- Theming
- Typography

### UI patterns

These pages cover product-level guidance and reusable patterns:

- Introduction
- Charts
- Empty states
- Forms
- Layout
- Modality
- Navigation
- Tables

### Fragments

These are more focused composite pieces:

- Admonition
- Multi select
- Form item layout
- Key/Value field array
- Single value field array
- Logs bar chart
- Metric card

### Atoms

These are the base components:

- Avatar
- Badge
- Button
- Calendar
- Card
- Checkbox
- Input
- Label
- Popover
- Progress
- Radio group
- Select
- Separator
- Sheet
- Switch
- Table
- Textarea

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL, typically:

```text
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Scripts

Defined in [package.json](/Users/daivymorales/Documents/GitHub/ofi-design-system/package.json:1):

- `npm run dev`
  Starts the Vite dev server.

- `npm run build`
  Runs TypeScript project builds and then Vite production build.

- `npm run preview`
  Serves the production build locally.

## Design system conventions

### Styling

- Global theme tokens live in [src/index.css](/Users/daivymorales/Documents/GitHub/ofi-design-system/src/index.css:1).
- Tailwind utilities are the primary styling layer.
- Shared class merging goes through `cn()` in [src/lib/utils.ts](/Users/daivymorales/Documents/GitHub/ofi-design-system/src/lib/utils.ts:1).
- Component variants are generally handled with `class-variance-authority`.

### Theme direction

- The app is currently rendered in dark mode by default.
- Scrollbars, overlays, and docs chrome have been styled to match the dark theme.
- The docs and landing page both assume the same visual language.

### Documentation components

The docs pages reuse a small set of helper components:

- `PageHeader`
- `ComponentPreview`
- `CodeBlock`
- `Section`
- `PropTable`

These live under [src/docs/components](/Users/daivymorales/Documents/GitHub/ofi-design-system/src/docs/components).

## How to add things

### Add a new primitive component

1. Create the component in `src/components/ui/`
2. Follow the patterns used by existing primitives
3. Add a docs page under `src/docs/pages/atoms/`
4. Register the docs route in `src/docs/routes.ts`

### Add a new pattern or fragment

1. Create the implementation in `src/components/ui-patterns/`
2. Add a docs page under either:
   `src/docs/pages/patterns/` or `src/docs/pages/fragments/`
3. Register the route in `src/docs/routes.ts`

### Add or update docs content

1. Edit the relevant page in `src/docs/pages/...`
2. Reuse docs helpers instead of writing page-level layout from scratch
3. Keep examples realistic and aligned with the design system voice

## Brand assets

The shared logo component is [src/components/BrandLogo.tsx](/Users/daivymorales/Documents/GitHub/ofi-design-system/src/components/BrandLogo.tsx:1).

Current branding setup:

- `public/ofi-design-system.svg`
  Primary logo used across the app.

- `public/ofi-design-system.png`
  Secondary asset kept in the repo.

The SVG mark is now used in:

- the landing page
- the docs header
- the app shell
- the favicon
- the README

## Current known issue

`npm run build` currently fails because of an existing TypeScript issue in:

[src/components/ui-patterns/page-layout.tsx](/Users/daivymorales/Documents/GitHub/ofi-design-system/src/components/ui-patterns/page-layout.tsx:42)

The specific problem is that `PageSectionProps.title` conflicts with the native `title` attribute from `HTMLAttributes<HTMLDivElement>`.

This does not prevent local development, but it does block a clean production build until fixed.

## Roadmap ideas

- Fix the `page-layout` TypeScript conflict so production builds pass
- Add linting and formatting scripts
- Add test coverage for shared primitives and patterns
- Turn the docs into a more package-oriented documentation site if external distribution is planned
- Split the repo into a publishable library package and a docs app if the system is going to be consumed outside this repository
