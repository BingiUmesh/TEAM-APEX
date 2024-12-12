export default function RootLayout({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {users}
          {revenue}
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  );
}
