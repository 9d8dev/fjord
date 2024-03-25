![logo](https://github.com/9d8dev/fjord/assets/57158102/77e69558-5bb6-44c4-92b4-4ce0a5db8a2d)

# Fjord :: Headless WordPress using Next JS 14

> Also check out
> - [Fjord Directory](https://github.com/9d8dev/fjord-directory)
> - [Fjord Minimal](https://github.com/9d8dev/fjord-minimal)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F9d8dev%2Ffjord&project-name=fjord&repository-name=fjord)

See a demo here: [fjord.dev](https://fjord.dev)

## **Next.js 14 App Directory Template for Headless CMS using the WordPress REST API**

> [See the Wiki For Detailed Documentation](https://github.com/9d8dev/fjord/wiki)

## Quick Start

1. Clone this repository
2. Run `npm install` within the directory to install dependencies
3. Configure the **Wordpress REST API** in your Wordpress instance
4. Edit `fjord.config.ts` to map to your WordPress instance and customize the website

## Directory 

```bash
fjord
├── README.md
├── app
│   ├── (legal)
│   ├── (pages)
│   │   ├── [slug]
│   │   └── all
│   ├── about
│   ├── contact
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── opengraph-image.jpg
│   ├── page.tsx
│   ├── posts
│   │   ├── [slug]
│   │   ├── authors
│   │   │   ├── [slug]
│   │   └── page.tsx
│   ├── robots.txt
│   ├── sitemap.ts
│   └── twitter-image.jpg
├── components
│   ├── content
│   │   ├── about-author.tsx
│   │   ├── article-wrapper.tsx
│   │   ├── content-grid.tsx
│   │   ├── page-body.tsx
│   │   ├── pagination-wrapper.tsx
│   │   └── post-card.tsx
│   ├── craft
│   │   ├── layout.tsx
│   │   ├── section
│   │   │   ├── footer.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   ├── nav-menu.tsx
│   │   │   └── nav.tsx
│   │   └── theme
│   │       ├── theme-provider.tsx
│   │       └── theme-toggle.tsx
│   ├── forms
│   │   └── contact-form.tsx
│   ├── global
│   │   └── elements
│   │       └── back-button.tsx
│   ├── sections
│   │   ├── about.tsx
│   │   ├── cta-form.tsx
│   │   ├── cta.tsx
│   │   ├── faq.tsx
│   │   ├── feature.tsx
│   │   ├── hero.tsx
│   │   ├── recent-posts.tsx
│   │   ├── secondary-hero.tsx
│   │   └── testimonials.tsx
│   └── ui
├── components.json
├── content
│   ├── cookie-policy.mdx
│   ├── privacy-policy.mdx
│   └── terms-of-service.mdx
├── fjord.config.ts
├── lib
│   ├── data.ts
│   ├── types.ts
│   └── utils.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── logo.svg
│   ├── placeholder-2.jpg
│   ├── placeholder.jpg
│   └── robots.txt
├── tailwind.config.ts
└── tsconfig.json
```

## Technologies 

- Next JS App Directory
- WordPress Rest API
- [Shadcn/ui](https://ui.shadcn.com/)
- Tailwind CSS
- [Craft UI](https://github.com/9d8dev/craft)
- Typescript

## Site Structure

- `/`: Homepage
- `/contact`: Contact page
- `/about`: About page
- `/posts`: Blog index
- `/posts/[slug]`: Blog post
- `/all`: Wordpress pages index
- `/[slug]`: Wordpress page
- `/posts/authors`: Wordpress author index
- `/posts/authors/[slug]`: Wordpress author

Built by [Bridger Tower](https://bridger.to) and [Cameron Youngblood](https://cameronyoungblood.com)
