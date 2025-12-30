// pages/optimize.js
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Optimize() {
  return (
    <div className={roboto.className} style={styles.container}>
      <h1 style={styles.title}>🚀 Next.js Optimization Demo</h1>
      <p style={styles.subtitle}>Demonstrating Image & Font Optimization</p>
      
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>📷 Optimized Image</h2>
        <p style={styles.cardText}>Next.js automatically optimizes images for better performance</p>
        <div style={styles.imageContainer}>
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={38}
            priority
          />
        </div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>🔤 Optimized Font</h2>
        <p style={styles.cardText}>This page uses the Roboto font loaded via next/font/google</p>
        <p style={styles.fontDemo}>
          <span style={{ fontWeight: 400 }}>Regular Weight (400)</span>
          <br />
          <span style={{ fontWeight: 700 }}>Bold Weight (700)</span>
        </p>
      </div>

      <div style={styles.features}>
        <h3 style={styles.featuresTitle}>✨ Optimization Features:</h3>
        <ul style={styles.list}>
          <li>✅ Automatic image optimization</li>
          <li>✅ Lazy loading by default</li>
          <li>✅ WebP/AVIF format conversion</li>
          <li>✅ Font optimization with zero layout shift</li>
          <li>✅ Automatic font subsetting</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    marginBottom: '40px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '16px',
    padding: '30px',
    margin: '20px auto',
    maxWidth: '500px',
    backdropFilter: 'blur(10px)',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  cardText: {
    opacity: 0.9,
    marginBottom: '20px',
  },
  imageContainer: {
    background: 'white',
    borderRadius: '12px',
    padding: '30px',
    display: 'inline-block',
  },
  fontDemo: {
    fontSize: '1.3rem',
    lineHeight: 2,
  },
  features: {
    marginTop: '40px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '30px',
    maxWidth: '500px',
    margin: '40px auto',
  },
  featuresTitle: {
    fontSize: '1.3rem',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    textAlign: 'left',
    fontSize: '1.1rem',
    lineHeight: 2,
  },
};
