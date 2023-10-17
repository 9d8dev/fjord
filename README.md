# **FJORD**

## **Next.js App Router Template for Headless Wordpress**

## How to use

1. Clone this repository
2. Run `npm install` within the directory
3. Configure the Wordpress REST API in your Wordpress instance
4. Edit `fjord.json` to customize the configuration:

   > ```
   > {
   >   "site_name": "fjord.dev",
   >   "site_title": "fjord | Opinionated Next JS and Wordpress Starter by Alpine Codex",
   >   "site_description": "fjord is an opinionated Next JS and Wordpress starter. It's built to be a solid foundation for your next project.",
   >   "per_page": 6,
   >   "url": "https://windpress.wpenginepowered.com"
   > }
   > ```
   >
   > - `site_name`: The meta name for your site
   > - `site_title`: The meta title for your site
   > - `site_description`: The meta description for your site
   > - `per_page`: The number of posts you want to show per page for pagination
   > - `url`: The URL of your Wordpress API endpoint

5. Replace `logo.svg` in the `/public` folder with your logo
6. Replace `favicon.ico` in the `/app` folder with your favicon.ico

## Site Structure

- `/`: Homepage
- `/contact`: Contact page
- `/about`: About page
- `/posts`: Blog index
- `/posts/[slug]`: Blog post
- `/all`: Wordpress pages index
- `/[slug]`: Wordpress page
- `/categories`: Wordpress category index
- `/categories/[slug]`: Wordpress category
- `/tags`: Wordpress tag index
- `/tags/[slug]`: Wordpress tag
- `/authors`: Wordpress author index
- `/authors/[slug]`: Wordpress author

Built by [Bridger Tower](https://bridger.to) and [Cameron Youngblood](https://cameronyoungblood.com)
