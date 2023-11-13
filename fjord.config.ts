// fjord type definition
type fjordTypes = {
  site_name: string;
  site_title: string;
  site_description: string;
  per_page: number;
  wp_url: string;
  google_analytics_id: string;
  link: {
    main_cta: string;
    privacy_policy: string;
    terms_of_service: string;
    cookie_policy: string;
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
  // site name: used in the header and footer
  site_name: "fjord.dev",

  // site title: used in the <title> tag
  site_title:
    "fjord | Opinionated Next JS and Wordpress Starter by Alpine Codex",

  // site description: used in the <meta name="description"> tag
  site_description:
    "fjord is an opinionated Next JS and Wordpress starter. It's built to be a solid foundation for your next project.",

  // number of posts to show per page from the Wordpress API
  per_page: 6,

  // the URL of your Wordpress site
  // make sure to enable the Rest API
  wp_url: "https://windpress.wpenginepowered.com",

  // Google Analytics ID
  google_analytics_id: "G-7VM8KZENP7",

  // Links
  link: {
    main_cta: "#",
    privacy_policy: "#",
    terms_of_service: "#",
    cookie_policy: "#",
  },

  // theme colors and logo
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
