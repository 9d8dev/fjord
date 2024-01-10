import Link from "next/link";

const AboutAuthor = ({ author }: ArticleProps) => {
  return (
    <div className="flex gap-6 md:max-w-lg items-center border px-6 py-2 rounded-lg mt-6 md:mt-12">
      {/* eslint-disable-next-line */}
      <img
        className="w-24 h-24 rounded-full"
        src={author.avatar_urls?.[96]}
        alt={`profile icon of ${author.name}`}
      />
      <div className="grid gap-2 py-4">
        <p className="text-xs opacity-70">About the Author</p>
        <Link
          className="block text-2xl hover:opacity-70 transition-all"
          href={`/posts/authors/${author.slug}`}
        >
          {author.name}
        </Link>
        <p>{author.description}</p>
      </div>
    </div>
  );
};

export default AboutAuthor;
