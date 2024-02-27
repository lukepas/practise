import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ratepunk",
  description: "Ratepunk frontend task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={notoSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
