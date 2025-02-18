export const getBlogPosts = () => {
  // Simulating API fetch
  return Promise.resolve([
    {
      id: 1,
      title: "First Blog Post",
      content: "This is the first blog post using SSR!",
    },
    {
      id: 2,
      title: "Second Blog Post",
      content: "This is the second blog post using SSR!",
    },
    {
      id: 3,
      title: "Third Blog Post",
      content: "This is the third blog post using SSR!",
    },
  ]);
};
