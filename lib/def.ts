type TagProps = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  meta: any[];
  _links: any;
};

type StaticUrlProps = {
  url: string;
  lastModified?: string | Date | undefined;
  changeFrequency?:
    | "yearly"
    | "monthly"
    | "weekly"
    | "always"
    | "hourly"
    | "daily"
    | "never"
    | undefined;
  priority?: number | undefined;
};

type PaginationProps = {
  page: number;
  lastPage: number;
};

type PostProps = {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    protected: boolean;
    rendered: string;
  };
  excerpt?: {
    protected: boolean;
    rendered: string;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  _embedded: {
    "wp:featuredmedia"?: [
      {
        media_details: {
          sizes: {
            full: {
              source_url: string;
            };
          };
        };
      }
    ];
    author: Array<{
      id: number;
      name: string;
      url: string;
      description: string;
      link: string;
      slug: string;
    }>;
  };
};

type PostCardProps = {
  post: PostProps;
  tags?: TagProps[];
};

type PageProps = {
  id: number;
  title: {
    rendered: string;
  };
  date: string;
  slug: string;
  excerpt: {
    rendered: string;
  };
  _embedded: {
    "wp:featuredmedia": Array<{
      media_details: {
        sizes: {
          medium: {
            source_url: string;
          };
        };
      };
    }>;
  };
};

type ContentGridProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

type FjordProps = {
  site_name: string;
  site_domain: string;
  site_title: string;
  site_description: string;
  posts_per_page: number;
  wordpress_url: string;
  google_analytics_id: string;
  logo: string;
  primary_logo?: string;
  dark_mode_logo?: string;
  menu: {
    main: {
      home: string;
      blog: string;
      about?: string;
      contact?: string;
    };
    content: {
      authors: string;
      categories?: string;
      tags?: string;
      pages: string;
    };
    legal: {
      privacy_policy?: string;
      privacy_policy_text?: string;
      terms_of_service?: string;
      terms_of_service_text?: string;
    };
    cta: string;
  };
};

type AuthorProps = {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    "24": string;
    "48": string;
    "96": string;
  };
  meta?: any[];
  _links?: {
    self?: { href: string }[];
    collection?: { href: string }[];
    about?: { href: string }[];
    author?: { embeddable: boolean; href: string }[];
    replies?: { embeddable: boolean; href: string }[];
  };
};

type ArticleProps = {
  post: {
    title: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
    _embedded?: {
      "wp:featuredmedia"?: [
        {
          media_details: {
            sizes: {
              full: {
                source_url: string;
              };
            };
          };
        }
      ];
    };
    content: {
      rendered: string;
    };
  };
  date: Date;
  author: {
    name: string;
    slug: string;
    description?: string;
    avatar_urls?: {
      "24": string;
      "48": string;
      "96": string;
    };
    link: string;
    social_links?: {
      linkedin?: string;
      facebook?: string;
      twitter?: string;
      instagram?: string;
    };
  };
};

type NavProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
};
