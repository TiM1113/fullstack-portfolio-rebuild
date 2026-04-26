import type { Metadata } from "next";
import { Search } from "lucide-react";

export const metadata: Metadata = { title: "Blog" };

const posts = [
  {
    title: "Lorem Ipsum",
    slug: "post2",
    date: "February 18, 2023",
    tag: "Development",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Lorem Ipsum",
    slug: "post1",
    date: "January 18, 2023",
    tag: "Development",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function BlogPage() {
  return (
    <div className="relative mb-16 sm:mb-32">
      <main>
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl leading-tight">
              Writing about interface design, programming, and hobbies.
            </h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              When I&apos;m not coding, you can find me writing about interface
              design, programming, and hobbies. If you want to know more about
              me, visit my LinkedIn profile.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="sm:px-8 mt-8">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search articles by title or topic"
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              />
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="sm:px-8 mt-10">
          <div className="mx-auto max-w-2xl">
            <div className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-700">
              {posts.map((post) => (
                <article key={post.slug} className="py-6">
                  <time className="text-sm text-zinc-500">{post.date}</time>
                  <h2 className="mt-1 text-base font-semibold text-zinc-900 dark:text-white">
                    <a
                      href={`/blog/${post.slug}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </a>
                  </h2>
                  <span className="text-sm text-zinc-500">#{post.tag}</span>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
