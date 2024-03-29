import "./globals.css";
import localFont from "next/font/local";
import { Yeseva_One, Oswald } from "next/font/google";

const akira = localFont({ src: "./fonts/akira.otf", variable: "--font-akira" });
const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-yeseva",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Akshit Aryan | Portfolio",
  description: "Personal Portfolio Website v2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${akira.variable} ${yeseva.variable} ${oswald.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
