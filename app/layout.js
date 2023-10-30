import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";

const corm = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "300", "700"],
});

export const metadata = {
  title: "bLanK",
  description: "Personal Portfolio of S Manish",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="max-w-screen overflow-hidden">
      <body className={corm.className}>{children}</body>
    </html>
  );
}
