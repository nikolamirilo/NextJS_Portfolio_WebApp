import { Open_Sans } from "next/font/google";
import "../styles/index.scss";
import { Footer, Navbar } from "components";
import { Metadata } from "next";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikola Mirilo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white relative`}>
        <div id="parent">{children}</div>
      </body>
    </html>
  );
}
