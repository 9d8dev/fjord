// Fjord Config
import fjord from "@/fjord.config";

// Component Imports
import * as Craft from "@/components/craft/layout";
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
    <Craft.Main>
      <SecondaryHero
        title={`${fjord.site_name} Authors`}
        subtitle="Our Writers and Authors"
      >
        Select an Author below to see a list of their posts.
      </SecondaryHero>

      <Craft.Section>
        <Craft.Container>
          <ContentGrid className="not-prose md:!grid-cols-2">
            {data.map((author: AuthorProps) => (
              <div key={author.id}>
                <Link
                  className="flex items-center h-full gap-4 rounded-lg md:rounded-xl border bg-background hover:bg-secondary transition-all p-6"
                  href={`./authors/${author.slug}`}
                >
                  {/* eslint-disable-next-line */}
                  <img
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
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}
