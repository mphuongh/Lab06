// pages/blog/[id].js
import fs from 'fs';
import path from 'path';

export default function BlogPost({ post }) {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  const paths = data.map(post => ({
    params: { id: post.id.toString() },
  }));
  
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  const post = data.find(post => post.id.toString() === params.id);
  
  return { props: { post } };
}
