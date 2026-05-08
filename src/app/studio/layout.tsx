export const metadata = {
  title: "Sanity Studio | Yaman Kazan",
  description: "Yaman Kazan Content Management Studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
