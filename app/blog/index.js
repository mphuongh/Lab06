// pages/blog/index.js
import fs from 'fs';
import path from 'path';

export default function Blog({ posts }) {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <Link href={`/blog/${post.id}`}>
              <a className="text-2xl font-semibold text-blue-600 hover:underline">{post.title}</a>
            </Link>
            <p>{post.content.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  return {
    props: {
      posts: data,
    },
  };
}
