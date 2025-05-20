// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/footer";
import Head from "@/components/header";

export const metadata = {
  title: "Instajar",
  description: "bla bla bla",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head />
        <div className="mt-20 mb-20">{children}</div>
        <Nav />
      </body>
    </html>
  );
}
