// app/blog/page.tsx
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

interface Post {
  id: number;
  title: string;
  content: string;
}

async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return data;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Link href="/" style={styles.backLink}>← Back to Home</Link>
        <h1 style={styles.title}>📝 Blog Posts</h1>
        <p style={styles.subtitle}>Explore our latest articles and updates</p>
      </div>

      <div style={styles.grid}>
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} style={styles.card}>
            <div style={styles.cardNumber}>#{post.id}</div>
            <h2 style={styles.cardTitle}>{post.title}</h2>
            <p style={styles.cardContent}>{post.content}</p>
            <span style={styles.readMore}>Read more →</span>
          </Link>
        ))}
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
  header: {
    textAlign: 'center' as const,
    marginBottom: '50px',
    color: 'white',
  },
  backLink: {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    display: 'inline-block',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.1rem',
    opacity: 0.9,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    padding: '28px',
    textDecoration: 'none',
    color: '#1e293b',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  cardNumber: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: 600,
    marginBottom: '16px',
  },
  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: 600,
    marginBottom: '12px',
    color: '#1e293b',
  },
  cardContent: {
    color: '#64748b',
    lineHeight: 1.6,
    marginBottom: '16px',
  },
  readMore: {
    color: '#667eea',
    fontWeight: 600,
    fontSize: '0.95rem',
  },
};
