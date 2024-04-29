export const metadata = {
  title: "NewsClips",
  description: "News website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
