// app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';

interface Profile {
  name: string;
  email: string;
  role: string;
  joinDate: string;
}

interface Stats {
  posts: number;
  views: number;
  comments: number;
  likes: number;
}

export default function Dashboard() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setProfile({
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Administrator',
        joinDate: 'January 2024',
      });
      setStats({
        posts: 42,
        views: 12580,
        comments: 238,
        likes: 1420,
      });
    }, 800);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome back! 👋</h1>
      <p style={styles.subtitle}>Here&apos;s what&apos;s happening with your account</p>

      {/* Stats Cards */}
      <div style={styles.statsGrid}>
        {stats ? (
          <>
            <div style={{ ...styles.statCard, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <div style={styles.statIcon}>📝</div>
              <div style={styles.statValue}>{stats.posts}</div>
              <div style={styles.statLabel}>Total Posts</div>
            </div>
            <div style={{ ...styles.statCard, background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
              <div style={styles.statIcon}>👁️</div>
              <div style={styles.statValue}>{stats.views.toLocaleString()}</div>
              <div style={styles.statLabel}>Page Views</div>
            </div>
            <div style={{ ...styles.statCard, background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
              <div style={styles.statIcon}>💬</div>
              <div style={styles.statValue}>{stats.comments}</div>
              <div style={styles.statLabel}>Comments</div>
            </div>
            <div style={{ ...styles.statCard, background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
              <div style={styles.statIcon}>❤️</div>
              <div style={styles.statValue}>{stats.likes.toLocaleString()}</div>
              <div style={styles.statLabel}>Likes</div>
            </div>
          </>
        ) : (
          <div style={styles.loading}>Loading stats...</div>
        )}
      </div>

      {/* Profile Card */}
      <div style={styles.profileCard}>
        <h2 style={styles.cardTitle}>👤 User Profile</h2>
        {profile ? (
          <div style={styles.profileContent}>
            <div style={styles.avatar}>
              {profile.name.charAt(0)}
            </div>
            <div style={styles.profileInfo}>
              <div style={styles.profileRow}>
                <span style={styles.label}>Name:</span>
                <span style={styles.value}>{profile.name}</span>
              </div>
              <div style={styles.profileRow}>
                <span style={styles.label}>Email:</span>
                <span style={styles.value}>{profile.email}</span>
              </div>
              <div style={styles.profileRow}>
                <span style={styles.label}>Role:</span>
                <span style={styles.badge}>{profile.role}</span>
              </div>
              <div style={styles.profileRow}>
                <span style={styles.label}>Member since:</span>
                <span style={styles.value}>{profile.joinDate}</span>
              </div>
            </div>
          </div>
        ) : (
          <div style={styles.loading}>Loading profile...</div>
        )}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '1000px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1e293b',
    marginBottom: '8px',
  },
  subtitle: {
    color: '#64748b',
    marginBottom: '32px',
    fontSize: '1.1rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '32px',
  },
  statCard: {
    padding: '24px',
    borderRadius: '16px',
    color: 'white',
    textAlign: 'center' as const,
  },
  statIcon: {
    fontSize: '32px',
    marginBottom: '8px',
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '4px',
  },
  statLabel: {
    opacity: 0.9,
    fontSize: '0.9rem',
  },
  profileCard: {
    background: 'white',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '1px solid #e2e8f0',
  },
  profileContent: {
    display: 'flex',
    gap: '32px',
    alignItems: 'flex-start',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: 700,
  },
  profileInfo: {
    flex: 1,
  },
  profileRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    gap: '16px',
  },
  label: {
    color: '#64748b',
    minWidth: '120px',
    fontWeight: 500,
  },
  value: {
    color: '#1e293b',
    fontWeight: 500,
  },
  badge: {
    background: '#dbeafe',
    color: '#1d4ed8',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: 600,
  },
  loading: {
    color: '#64748b',
    textAlign: 'center' as const,
    padding: '40px',
  },
};
