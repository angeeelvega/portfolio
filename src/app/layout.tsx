import "../app/styles/globals.scss";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portafolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}