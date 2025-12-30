// app/blog/[id]/page.tsx
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post | null> {
  const filePath = path.join(process.cwd(), 'data.json');
  const data: Post[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const post = data.find((p) => p.id.toString() === id);
  return post || null;
}

async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return data;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Link href="/blog" style={styles.backLink}>← Back to Blog</Link>
        
        <article style={styles.article}>
          <div style={styles.badge}>Post #{post.id}</div>
          <h1 style={styles.title}>{post.title}</h1>
          <div style={styles.meta}>
            <span>📅 December 31, 2025</span>
            <span>•</span>
            <span>👤 Admin</span>
            <span>•</span>
            <span>⏱️ 2 min read</span>
          </div>
          <div style={styles.body}>
            <p>{post.content}</p>
            <p style={styles.lorem}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={styles.lorem}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>

        <div style={styles.navigation}>
          <Link href="/blog" style={styles.navButton}>
            ← All Posts
          </Link>
          <Link href="/" style={styles.navButton}>
            🏠 Home
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '40px 20px',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  backLink: {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    display: 'inline-block',
    marginBottom: '24px',
  },
  article: {
    background: 'white',
    borderRadius: '20px',
    padding: '48px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  badge: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    display: 'inline-block',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 600,
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: 700,
    color: '#1e293b',
    marginBottom: '16px',
    lineHeight: 1.3,
  },
  meta: {
    display: 'flex',
    gap: '12px',
    color: '#64748b',
    fontSize: '0.95rem',
    marginBottom: '32px',
    paddingBottom: '24px',
    borderBottom: '1px solid #e2e8f0',
  },
  body: {
    color: '#334155',
    fontSize: '1.1rem',
    lineHeight: 1.8,
  },
  lorem: {
    marginTop: '20px',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '32px',
  },
  navButton: {
    background: 'rgba(255,255,255,0.2)',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 500,
    backdropFilter: 'blur(10px)',
  },
};
