import fjord from "@/fjord.config";
import Link from "next/link";
import Section from "@/components/global/layout/section";

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
    <Section className="w-full flex justify-between items-center">
      <p className="text-sm">
        Showing <span>{(page - 1) * fjord.posts_per_page + 1}</span> to{" "}
        <span>{Math.min(page * fjord.posts_per_page, totalPosts)}</span> of{" "}
        <span>{totalPosts}</span> posts
      </p>
      <div className="space-x-2">
        {page === 1 ? (
          <button className="hover:opacity-75 border-secondary-300 text-secondary-900 dark:text-secondary-100 pointer-events-none inline-flex items-center justify-center text-sm opacity-50">
            {"<"} Previous
          </button>
        ) : (
          <Link
            href={page > 2 ? `/posts/?page=${page - 1}#posts` : "/posts#posts"}
            className="hover:opacity-75 border-secondary-300 text-secondary-900 dark:text-secondary-100 inline-flex items-center justify-center text-sm"
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
            className="hover:opacity-75 border-secondary-300 text-secondary-900 dark:text-secondary-100 inline-flex items-center justify-center text-sm"
          >
            Next {">"}
          </Link>
        ) : (
          <button className="hover:opacity-75 border-secondary-300 text-secondary-900 dark:text-secondary-100 pointer-events-none inline-flex items-center justify-center text-sm opacity-50">
            Next {">"}
          </button>
        )}
      </div>
    </Section>
  );
};

export default Pagination;
