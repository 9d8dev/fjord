type ArticleProps = {
  post: {
    title: {
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
