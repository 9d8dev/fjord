type Post = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  slug: string;
  excerpt: {
    rendered: string;
  };
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
      name: string;
    }>;
  };
  tags: Array<number>;
};

type Tag = {
  id: number;
  name: string;
};
