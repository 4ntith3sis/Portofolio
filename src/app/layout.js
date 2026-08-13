import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata = {
  title: "Daffa Abdul Fatah — Fullstack Developer & UI Designer",
  description: "Portfolio of Daffa Abdul Fatah, an Informatics Engineering student and fullstack developer focused on modern web applications and UI/UX design.",
  keywords: ["Daffa Abdul Fatah", "Fullstack Developer", "Web Developer", "UI/UX Designer", "Informatics Engineering", "React", "Next.js", "Portfolio", "Indonesia"],
  authors: [{ name: "Daffa Abdul Fatah" }],
  openGraph: {
    title: "Daffa Abdul Fatah — Fullstack Developer & UI Designer",
    description: "Portfolio of Daffa Abdul Fatah, an Informatics Engineering student and fullstack developer focused on modern web applications and UI/UX design.",
    url: "https://daffaabdulfatah.com",
    siteName: "Daffa Abdul Fatah Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daffa Abdul Fatah — Fullstack Developer & UI Designer",
    description: "Portfolio of Daffa Abdul Fatah, an Informatics Engineering student and fullstack developer focused on modern web applications and UI/UX design.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-background text-foreground font-sans min-h-screen selection:bg-foreground selection:text-background border-border">
        {children}
      </body>
    </html>
  );
}
