type Author = {
  id?: number;
  name?: string;
  url?: string;
  description?: string;
  link?: string;
  slug?: string;
  avatar_urls: {
    "24"?: string;
    "48"?: string;
    "96"?: string;
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
