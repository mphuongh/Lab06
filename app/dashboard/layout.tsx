// app/dashboard/layout.tsx
export default function Layout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '200px', backgroundColor: '#f0f0f0' }}>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}

// app/dashboard/page.tsx
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
    setTimeout(() => {
      setProfile({ name: 'John Doe', email: 'john.doe@example.com' });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <p>{profile.name} - {profile.email}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
