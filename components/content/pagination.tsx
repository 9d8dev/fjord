import fjord from "@/fjord.config";
import Link from "next/link";
import * as Craft from "@/components/craft/layout";

type PaginationProps = {
  page: number;
  totalPosts: number;
  lastPage: number;
};

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPosts,
  lastPage,
}) => {
  return (
    <Craft.Section className="flex w-full max-w-5xl items-center justify-between">
      <p className="text-sm">
        Showing <span>{(page - 1) * fjord.posts_per_page + 1}</span> to{" "}
        <span>{Math.min(page * fjord.posts_per_page, totalPosts)}</span> of{" "}
        <span>{totalPosts}</span> posts
      </p>
      <div className="space-x-2">
        {page === 1 ? (
          <button className="border-secondary-300 text-secondary-900 dark:text-secondary-100 pointer-events-none inline-flex items-center justify-center text-sm opacity-50 hover:opacity-75">
            {"<"} Previous
          </button>
        ) : (
          <Link
            href={page > 2 ? `/posts/?page=${page - 1}#posts` : "/posts#posts"}
            className="border-secondary-300 text-secondary-900 dark:text-secondary-100 inline-flex items-center justify-center text-sm hover:opacity-75"
          >
            {"<"} Previous
          </Link>
        )}
        {page < lastPage ? (
          <Link
            href={
              page < lastPage
                ? `/posts/?page=${page + 1}#posts`
                : `/posts/?page=${page}#posts`
            }
            className="border-secondary-300 text-secondary-900 dark:text-secondary-100 inline-flex items-center justify-center text-sm hover:opacity-75"
          >
            Next {">"}
          </Link>
        ) : (
          <button className="border-secondary-300 text-secondary-900 dark:text-secondary-100 pointer-events-none inline-flex items-center justify-center text-sm opacity-50 hover:opacity-75">
            Next {">"}
          </button>
        )}
      </div>
    </Craft.Section>
  );
};

export default Pagination;
