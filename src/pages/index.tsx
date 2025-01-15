import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import { getBlogPosts } from "@/app/mock/posts";

type Post = {
  id: number;
  title: string;
  content: string;
};

const Blog = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main>
      <h2>Posts</h2>
      {posts.map((post: Post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </main>
  );
};

export const getServerSideProps = (async () => {
  const posts: Post[] = await getBlogPosts();

  return {
    props: {
      posts,
    },
  };
}) satisfies GetServerSideProps<{ posts: Post[] }>;

export default Blog;
