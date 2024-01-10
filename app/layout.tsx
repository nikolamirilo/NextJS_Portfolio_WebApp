"use client";
import { Open_Sans } from "next/font/google";
import "../styles/index.scss";
import { Footer, Navbar } from "components";

const font = Open_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Nikola Mirilo",
//   description: "",
//   generator: "Nikola Mirilo",
//   applicationName: "Nikola Mirilo",
//   referrer: "origin-when-cross-origin",
//   keywords: ["Nikola Mirilo"],
//   authors: [{ name: "Reactify Solutions" }],
//   creator: "Nikola Mirilo",
//   publisher: "Nikola Mirilo",
//   metadataBase: new URL("https://nikola-mirilo.vercel.app"),
//   alternates: {
//     canonical: "/",
//     languages: {
//       "sr-RS": "/sr-RS",
//     },
//   },
//   openGraph: {
//     images: ["/opengraph-image.jpeg", "twitter-image.jpeg"],
//   },
// };

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white relative`}>
        <Navbar />
        <div id="parent">{props.children}</div>
        <Footer />
      </body>
    </html>
  );
}
