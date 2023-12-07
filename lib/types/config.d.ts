// fjord type definition
type fjordTypes = {
  site_name: string;
  site_domain: string;
  site_title: string;
  site_description: string;
  posts_per_page: number;
  wordpress_url: string;
  google_analytics_id: string;
  revalidate: number;
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
  content: {
    main_cta: string;
    cta_summary: string;
  };
};
