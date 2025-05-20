'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import Head from "@/components/header";
import Nav from "@/components/footer";
import "./globals.css";


export const metadata = {
  title: "instajar",
  description: "bla bla bla",
  icons: {
    icon: "/image/aku2.jpg",
  },
};

const HIDE_LAYOUT_SEGMENTS = ['login', 'register', 'dashboard', 'about', 'list-project', 'send-form'];

export default function RootLayout({ children }) {
  const segments = useSelectedLayoutSegments();

  const hideLayout = segments.some(seg => HIDE_LAYOUT_SEGMENTS.includes(seg));

  return (
    <html lang="en">
      <body>
        {/* Header */}
        {!hideLayout && <Head />}

        {/* Konten */}
        <main className={hideLayout ? "" : "mt-20 mb-20"}>
          {children}
        </main>

        {/* Footer */}
        {!hideLayout && <Nav />}
      </body>
    </html>
  );
}
