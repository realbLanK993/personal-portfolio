import Cursor from "@/components/common/cursor";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "bLanK",
  description: "Personal Portfolio of S Manish",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-black text-slate-950 max-w-screen overflow-hidden  select-none">
      <body className={inter.className}>
        {" "}
        <Cursor /> {children}
      </body>
    </html>
  );
}
