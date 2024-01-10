# **Fjord**

## **Next.js App Router Template for Headless Wordpress using the REST API**

## How to use

1. Clone this repository
2. Run `npm install` within the directory
3. Configure the Wordpress REST API in your Wordpress instance
4. Edit `fjord.config.ts` to customize the configuration:

    ```ts
    const fjord: fjordTypes = {
      site_name: "All Veteran", // site name: used in the header and footer
      site_domain: "https://allveteran.com", // site domain: used in the sitemap
      site_title: "All Veteran | The Premier Resource for Veterans",
      site_description:
        "All Veteran is the premier resource for veterans. We provide information on benefits, jobs, education, and more.",
      posts_per_page: 6,
      wordpress_url: "http://allveteran.wpenginepowered.com",
      google_analytics_id: "G-7VM8KZENP7",

      links: {
        main_cta: "#",
        main_cta_text: "Get Started",
        // You can edit the Markdown for these pages in hte `@/content/...` directory.
        privacy_policy: "/privacy-policy",
        privacy_policy_text: "Privacy Policy",
        terms_of_service: "/terms-of-service",
        terms_of_service_text: "Terms of Service",
        cookie_policy: "/cookie-policy",
        cookie_policy_text: "Cookie Policy",
      },

      theme: {
        primary: "blue",
        secondary: "neutral",
        logo: "./logo.svg",
        primary_logo: "./dark_logo.svg",
        dark_mode_logo: "./light_logo.svg",
        // change the font using `next/font` in `layout.tsx` in the app directory.
        // check out the docs here: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts
      },
    };
    ```

   - `site_name`: The meta name for your site
   - `site_title`: The meta title for your site
   - `site_description`: The meta description for your site
   - `posts_per_page`: The number of posts you want to show per page for pagination
   - `wordpress_url`: The URL of your Wordpress API endpoint
   - `google_analytics_id`: Your Google Analytics ID
   - `theme`: Object with theme customization options
       - `primary`: Primary theme color (headings, buttons, sections, etc.) -- Select a color from the [Tailwind CSS Color Schemes](https://tailwindcss.com/docs/customizing-colors)
       - `secondary`: Secondary theme color (fonts, backgrounds, etc.) -- Select a color from the [Tailwind CSS Color Schemes](https://tailwindcss.com/docs/customizing-colors)
       - `logo`: Path to your logo
       - `font`: Use `next/font` at `layout.tsx` in the app directory to update the font to any Google Font

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
