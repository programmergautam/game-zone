import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  charset: "UTF-8",
  description: "GameZone - Your Ultimate Gaming Experience",
  keywords: "gaming, GameZone, immersive gameplay, cross-platform play, programmergautam, rgd",
  author: "GameZone Team",
  title: "GameZone - Your Ultimate Gaming Experience",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
