export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "red" }}>Header</header>
        {children}
        <footer style={{ backgroundColor: "red" }}>Footer</footer>
      </body>
    </html>
  );
}