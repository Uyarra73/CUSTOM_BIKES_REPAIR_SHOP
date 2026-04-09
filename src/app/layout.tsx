import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Classic Cycles | Custom Bike Repair Shop",
  description: "Expert vintage bike repairs with craftsmanship and care. Book your appointment today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-vintage-cream">
        {children}
      </body>
    </html>
  );
}
