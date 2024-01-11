// Fjord Config
import fjord from "@/fjord.config";

// Component Imports
import SecondaryHero from "@/components/sections/secondary-hero";
import ContentGrid from "@/components/content/content-grid";

// Next Imports
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// Data Imports
import { fetchAuthors } from "@/lib/data";

export const metadata: Metadata = {
  title: `Authors | ${fjord.site_name}`,
  description: `Meet the authors of ${fjord.site_name}. ${fjord.site_description}`,
};

export default async function AuthorPosts() {
  let data = await fetchAuthors();

  return (
    <main className="p-12">
      <SecondaryHero
        title={`${fjord.site_name} Authors`}
        subtitle="Our Writers and Authors"
      >
        Select an Author below to see a list of their posts.
      </SecondaryHero>

      <ContentGrid className="md:!grid-cols-2">
        {data.map((author: AuthorProps) => (
          <div key={author.id}>
            <Link
              className="flex items-center gap-4 rounded-lg md:rounded-xl border bg-secondary-100 dark:bg-secondary-900 transition-all hover:bg-secondary-200 dark:hover:bg-secondary-800 p-6"
              href={`./authors/${author.slug}`}
            >
              <Image
                src={author.avatar_urls["96"]}
                alt={author.name}
                width={96}
                height={96}
                className="rounded-full"
              />
              <div className="grid gap-2">
                <p className="text-2xl text-primary-500">{author.name}</p>
                <p className="opacity-70">{author.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </ContentGrid>
    </main>
  );
}
