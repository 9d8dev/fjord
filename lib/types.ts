type RenderedContentProps = {
  rendered: string;
};

type MediaDetailsProps = {
  sizes: {
    [size: string]: {
      source_url: string;
    };
  };
};

type AuthorDetailsProps = {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
};

type EmbeddedMediaProps = {
  "wp:featuredmedia"?: {
    media_details: MediaDetailsProps;
  }[];
  "wp:term"?: any[];
  _embedded: {
    "wp:term": [[TagProps]];
  };
  author?: AuthorDetailsProps[];
};

type PostProps = {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: RenderedContentProps;
  content: {
    protected: boolean;
    rendered: string;
  };
  excerpt?: RenderedContentProps;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Record<string, unknown>[];
  categories: number[];
  tags: number[];
  _embedded: EmbeddedMediaProps;
};

type TagProps = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  meta: Record<string, unknown>[];
  _links: Record<string, unknown>;
};

type StaticUrlProps = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "yearly"
    | "monthly"
    | "weekly"
    | "always"
    | "hourly"
    | "daily"
    | "never";
  priority?: number;
};

type PaginationProps = {
  page: number;
  lastPage: number;
};

type PostCardProps = {
  post: PostProps;
  tags?: any;
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
  keywords: string[];
  authors: {
    name: string;
    url: string;
  }[];
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
  nav_menu: {
    title: string;
    items: {
      title: string;
      href: string;
      description: string;
    }[];
  };
  directory_menu: {
    title: string;
    items: {
      title: string;
      href: string;
      description: string;
    }[];
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
  meta?: Record<string, unknown>[];
  _links?: Record<string, { href: string }[]>;
};

type ArticleProps = {
  post: {
    title: RenderedContentProps;
    excerpt: RenderedContentProps;
    _embedded?: EmbeddedMediaProps;
    content: RenderedContentProps;
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

type PageProps = {
  id: number;
  title: RenderedContentProps;
  date: string;
  slug: string;
  content: RenderedContentProps;
  excerpt: RenderedContentProps;
  _embedded: EmbeddedMediaProps;
  page: {
    title: RenderedContentProps;
    content: RenderedContentProps;
    _embedded?: EmbeddedMediaProps;
  };
};

type faqProps = {
  question: string;
  answer: string;
  link?: string;
};
