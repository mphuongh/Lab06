// app/dashboard/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
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
