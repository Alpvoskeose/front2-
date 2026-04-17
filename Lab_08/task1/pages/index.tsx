import { GetStaticProps } from "next";
import Link from "next/link";
import { Post } from "@/types";
import { getAllPosts } from "@/lib/api";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="border p-4 rounded shadow">
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h2>
            </Link>
            <p className="text-gray-600">By Author ID: {post.author} | {post.readTime} min read</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
    revalidate: 60,
  };
};