import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/header";
import TabBar from "./components/tabbar";

export const metadata: Metadata = {
  title: "SADAIV Finance",
  description: "SADAIV Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <Header />

        {children}

        <TabBar />

      </body>
    </html>
  );
}