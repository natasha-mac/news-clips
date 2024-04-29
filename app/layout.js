import "../globals.css";

export const metadata = {
  title: "News-Clips",
  description: "Summary of News Articles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}