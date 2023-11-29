type Post = {
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
  excerpt: {
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
