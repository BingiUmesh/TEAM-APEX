function getRandomInt(count: number) {
  return Math.floor(Math.random()) * count;
}

export default function ProdctDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
  if (random == 1) {
    throw new Error("Error loading review");
  }
  return (
    <>
      {children}
      <p>Featured products caresoul</p>
    </>
  );
}
