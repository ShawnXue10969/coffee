import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coffee",
  description: "Discover the best coffee shops in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
