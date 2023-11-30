const fjord: fjordTypes = {
  site_name: "fjord.dev", // site name: used in the header and footer
  site_domain: "https://fjord.dev", // site domain: used in the sitemap
  site_title:
    "fjord | Opinionated Next JS and Wordpress Starter by Alpine Codex",
  site_description:
    "fjord is an opinionated Next JS and Wordpress starter. It's built to be a solid foundation for your next project.",
  posts_per_page: 6,
  wordpress_url: "https://windpress.wpenginepowered.com",
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

  content: {
    main_cta: "Get Started with Fjord Today!",
    cta_summary:
      "See why the future of WordPress is headless using Next JS and Tailwind.",
  },
};

export default fjord;
