// app/dashboard/layout.tsx
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={styles.container}>
      <nav style={styles.sidebar}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>📊</span>
          <span style={styles.logoText}>Dashboard</span>
        </div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link href="/dashboard" style={styles.navLink}>
              🏠 Overview
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/dashboard" style={styles.navLink}>
              👤 Profile
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/dashboard" style={styles.navLink}>
              ⚙️ Settings
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/" style={styles.navLink}>
              ← Back to Home
            </Link>
          </li>
        </ul>
      </nav>
      <main style={styles.main}>{children}</main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    background: '#f8fafc',
  },
  sidebar: {
    width: '260px',
    background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
    color: 'white',
    padding: '20px 0',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 24px 30px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    marginBottom: '20px',
  },
  logoIcon: {
    fontSize: '28px',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 700,
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: '4px 12px',
  },
  navLink: {
    display: 'block',
    padding: '12px 16px',
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'all 0.2s',
    fontSize: '15px',
  },
  main: {
    flex: 1,
    padding: '40px',
  },
};
