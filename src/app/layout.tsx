import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  openGraph: {
    title: "Video Language App",         // Заголовок, який відображається при поширенні
    description: "Train your language skills with others.",  // Опис для соцмереж
    url: "https://example.com",          // URL сайту
    siteName: "Video Language App",      // Назва сайту
    images: [
      {
        url: "/images/social-preview.png", // URL до зображення для соцмереж
        width: 800,
        height: 600,
        alt: "Preview image for Video Language App", // Alt текст для зображення
      },
    ],
    locale: "en_US",                     // Мова і країна, наприклад, "uk_UA"
    type: "website",                     // Тип ресурсу
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           <head>
        <link rel="icon" href="/coding.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
