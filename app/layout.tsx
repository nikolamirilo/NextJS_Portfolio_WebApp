import { Open_Sans } from "next/font/google";
import "../styles/index.scss";
import { Metadata } from "next";

const font = Open_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikola Mirilo",
  description:
    "Hello! I am Nikola, Junior IT Project Manager/Business Consultant in Adacta, DACH delivery region. Specialized in the implementation of Scrum and Agile methodologies in Software Development projects.",
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
