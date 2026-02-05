# Tech Blog Website – Frontend Technical Assessment

## Live Demo

https://tech-blog-alpha-kohl.vercel.app

## GitHub Repository

https://github.com/sumanpatra2022/tech-blog

---

## Overview

A fast, SEO-optimized tech blog built with Next.js App Router, TypeScript and Tailwind CSS.  
The application fetches blog posts from an external API and provides search, category filtering, and modal article view.

---

## Implemented Features

### Core Features

- Fetch exactly 10 blog posts from provided API
- Search across title, description and content_text
- Category filter with combined search + filter logic
- Article modal with ESC / outside click / close button
- Fully responsive layout

### SEO Implementation

- Meta tags, OpenGraph & Twitter cards
- JSON-LD schema
- robots.txt
- sitemap.xml
- Semantic HTML
- Next Image optimization

### Performance

- Static generation with revalidation
- Server components for data fetching
- Optimized images

---

## Search & Filter Logic

```ts
const matchSearch =
  title.includes(query) ||
  description.includes(query) ||
  content_text.includes(query);

const matchCategory = category === "all" || blog.category === category;

return matchSearch && matchCategory;
```

---

## Running Locally

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm run start
```

---

## Author

**Suman Patra**  
GitHub: https://github.com/sumanpatra2022
