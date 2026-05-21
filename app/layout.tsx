import "./globals.css";

export const metadata = {
  title: "Upskill",
  description: "Learn skills, build proof, and get discovered by companies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
