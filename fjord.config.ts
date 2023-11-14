// fjord type definition
type fjordTypes = {
  site_name: string;
  site_title: string;
  site_description: string;
  posts_per_page: number;
  wordpress_url: string;
  google_analytics_id: string;
  links: {
    main_cta: string;
    main_cta_text: string;
    privacy_policy: string;
    privacy_policy_text: string;
    terms_of_service: string;
    terms_of_service_text: string;
    cookie_policy: string;
    cookie_policy_text: string;
  };
  theme: {
    primary: string;
    secondary: string;
    logo: string;
    primary_logo: string;
    dark_mode_logo: string;
  };
};

const fjord: fjordTypes = {
  site_name: "fjord.dev", // site name: used in the header and footer
  site_title:
    "fjord | Opinionated Next JS and Wordpress Starter by Alpine Codex",
  site_description:
    "fjord is an opinionated Next JS and Wordpress starter. It's built to be a solid foundation for your next project.",
  posts_per_page: 6,
  wordpress_url: "https://windpress.wpenginepowered.com",
  google_analytics_id: "G-7VM8KZENP7",

  links: {
    main_cta: "#",
    main_cta_text: "use fjord",
    privacy_policy: "#",
    privacy_policy_text: "privacy policy",
    terms_of_service: "#",
    terms_of_service_text: "terms of service",
    cookie_policy: "#",
    cookie_policy_text: "cookie policy",
  },

  theme: {
    primary: "neutral",
    secondary: "zinc",
    logo: "./logo.svg",
    primary_logo: "./dark_logo.svg",
    dark_mode_logo: "./light_logo.svg",
    // change the font using `next/font` in `layout.tsx` in the app directory.
    // check out the docs here: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts
  },
};

export default fjord;
