import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <div style={styles.logoContainer}>
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        
        <h1 style={styles.title}>🚀 Next.js Lab Project</h1>
        <p style={styles.subtitle}>Explore Next.js features and optimizations</p>

        <div style={styles.grid}>
          <Link href="/optimize" style={styles.card}>
            <h2>📷 Optimization Demo →</h2>
            <p>See image and font optimization in action</p>
          </Link>

          <Link href="/dashboard" style={styles.card}>
            <h2>📊 Dashboard →</h2>
            <p>View the dashboard with nested layouts</p>
          </Link>

          <Link href="/blog" style={styles.card}>
            <h2>📝 Blog →</h2>
            <p>Dynamic routing example with blog posts</p>
          </Link>

          <Link href="/api/secret" style={styles.card}>
            <h2>🔐 API Route →</h2>
            <p>Protected API endpoint example</p>
          </Link>
        </div>

        <footer style={styles.footer}>
          <p>Built with Next.js 16 | Lab 06 Project</p>
        </footer>
      </main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    color: 'white',
  },
  main: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '60px 20px',
    textAlign: 'center' as const,
  },
  logoContainer: {
    background: 'white',
    borderRadius: '16px',
    padding: '30px 50px',
    display: 'inline-block',
    marginBottom: '40px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '10px',
    fontWeight: 700,
  },
  subtitle: {
    fontSize: '1.3rem',
    opacity: 0.8,
    marginBottom: '50px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '60px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '30px',
    textDecoration: 'none',
    color: 'white',
    transition: 'transform 0.2s, background 0.2s',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'left' as const,
  },
  footer: {
    opacity: 0.6,
    fontSize: '0.9rem',
  },
};
