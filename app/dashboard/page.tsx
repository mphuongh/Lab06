// app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';

interface Profile {
  name: string;
  email: string;
}

export default function Dashboard() {
  const [profile, setProfile] = useState<Profile | null>(null);
  
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
