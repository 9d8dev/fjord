import fjord from "@/fjord.config";

// Fetch the Wordpress Posts
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

  const data: Post[] = await res.json();
  const totalPosts = Number(res.headers.get("X-WP-Total"));

  // Sort posts by date
  data.sort(
    (a: Post, b: Post) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return { data, totalPosts };
}

// Fetch the Wordpress Tags
export async function fetchTags() {
  const res = await fetch(`${fjord.wordpress_url}/wp-json/wp/v2/tags`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tags");
  }

  const tags: Tag[] = await res.json();
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
  const offset = (page - 1) * fjord.posts_per_page;
  const res = await fetch(
    `${fjord.wordpress_url}/wp-json/wp/v2/posts?author_name=${slug}&_embed&per_page=${fjord.posts_per_page}&offset=${offset}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Post[] = await res.json();
  const totalPosts = Number(res.headers.get("X-WP-Total"));
  const author = data[0]._embedded?.author[0];
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

  const authors: Author[] = await res.json();
  return authors;
}
