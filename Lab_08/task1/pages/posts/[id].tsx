import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "@/types";
import { getAllPosts, getPostById, getAuthorById } from "@/lib/api";

interface PostProps {
  post: Post;
  author: { name: string; bio: string };
}

export default function PostPage({ post, author }: PostProps) {
  return (
    <article className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">By {author.name}</p>
      <p className="text-lg leading-relaxed mb-6">{post.content}</p>
      <div className="flex gap-2">
        {post.tags.map(tag => (
          <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-sm">#{tag}</span>
        ))}
      </div>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map(post => ({ params: { id: post.id } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(params?.id as string);
  if (!post) return { notFound: true };
  const author = await getAuthorById(post.author);
  
  return {
    props: { post, author },
    revalidate: 60,
  };
};