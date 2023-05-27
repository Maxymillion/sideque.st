import "@/styles/globals.scss";
import { Inter } from "next/font/google";
import Favicons from "@/components/Favicons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sidequest - Coming Soon",
  description: "Coming soon!",
  icons: Favicons,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
