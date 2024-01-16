import fjord from "@/fjord.config";

// Fetch Posts
export async function fetchPosts(perPage: number, offset: number) {
  const res = await fetch(
    `${fjord.wordpress_url}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&offset=${offset}&orderby=date`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: PostProps[] = await res.json();
  const totalPosts = Number(res.headers.get("X-WP-Total"));

  // Sort posts by date
  data.sort(
    (a: PostProps, b: PostProps) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return { data, totalPosts };
}

// Fetch Tags
export async function fetchTags() {
  const res = await fetch(`${fjord.wordpress_url}/wp-json/wp/v2/tags`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tags");
  }

  const tags: TagProps[] = await res.json();
  return tags;
}

// Fetch post by Slug
export async function fetchPostBySlug(slug: string) {
  const res = await fetch(
    `${fjord.wordpress_url}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data?.[0];
}

// Fetch posts by Author
export async function fetchPostsByAuthor(slug: string, page: number = 1) {
  // Fetch the author's ID using the slug
  const authorRes = await fetch(
    `${fjord.wordpress_url}/wp-json/wp/v2/users?slug=${slug}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!authorRes.ok) {
    throw new Error("Failed to fetch author");
  }

  const authorData: AuthorProps[] = await authorRes.json();
  const authorId = authorData[0]?.id;

  // Fetch the posts using the author's ID
  const offset = (page - 1) * fjord.posts_per_page;
  const res = await fetch(
    `${fjord.wordpress_url}/wp-json/wp/v2/posts?author=${authorId}&_embed&per_page=${fjord.posts_per_page}&offset=${offset}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: PostProps[] = await res.json();
  const totalPosts = Number(res.headers.get("X-WP-Total"));
  const author = data[0]._embedded?.author?.[0];
  return { data, totalPosts, author };
}

// Fetch Authors
export async function fetchAuthors() {
  const res = await fetch(`${fjord.wordpress_url}/wp-json/wp/v2/users?_embed`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch authors");
  }

  const authors: AuthorProps[] = await res.json();
  return authors;
}

// Fetch a single page by its slug
export async function fetchPageBySlug(slug: string) {
  const res = await fetch(
    `${fjord.wordpress_url}/wp-json/wp/v2/pages?slug=${slug}&_embed`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch page");
  }

  const data = await res.json();
  return data?.[0];
}

// Fetch All Pages
export async function fetchPages() {
  const res = await fetch(
    `${fjord.wordpress_url}/wp-json/wp/v2/pages?_embed&per_page=${fjord.posts_per_page}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
