import 'server-only';

const posts = [
  {
    id: "1",
    title: "My First Blog Post",
    slug: "my-first-blog-post",
    excerpt: "This is my first blog post.",
  },
  {
    id: "2",
    title: "My Second Blog Post",
    slug: "my-second-blog-post",
    excerpt: "This is my second blog post.",
  },
];

export async function getAllPosts() {
  return posts;
}
