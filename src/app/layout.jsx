
import "./globals.css";
import LayoutWrapper from "@/components/my-components/layoutWrapper";

// Metadata disediakan di sini
export const metadata = {
  title: "instajar",
  description: "bla bla bla",
  icons: {
    icon: "next.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
