'use client';

import { useSelectedLayoutSegments } from "next/navigation";
import Head from "@/components/header";
import Nav from "@/components/footer";

const HIDE_LAYOUT_SEGMENTS = ['login', 'register', 'dashboard', 'about', 'list-project', 'send-form'];

export default function LayoutWrapper({ children }) {
  const segments = useSelectedLayoutSegments();
  const hideLayout = segments.some(seg => HIDE_LAYOUT_SEGMENTS.includes(seg));

  return (
    <>
      {!hideLayout && <Head />}
      <main className={hideLayout ? "" : "mt-20 mb-20"}>
        {children}
      </main>
      {!hideLayout && <Nav />}
    </>
  );
}
