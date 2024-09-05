import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "GameZone - Your Ultimate Gaming Experience",
  description: "GameZone - Your Ultimate Gaming Experience Awaits!",
  charset: "UTF-8",
  keywords: "gaming, GameZone, immersive gameplay, cross-platform play, programmergautam, rgd",
  author: "GameZone Team",
  openGraph: {
    type: "website",
    url: "https://game-zone-by-programmergautam.vercel.app/",
    title: "GameZone - Your Ultimate Gaming Experience",
    description: "Join GameZone for immersive gameplay and cross-platform play!",
    image: "https://game-zone-by-programmergautam.vercel.app/gaming-bg.jpg",
    siteName: "GameZone",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gamezone",
    title: "GameZone - Your Ultimate Gaming Experience",
    description: "Join GameZone for immersive gameplay and cross-platform play!",
    image: "https://game-zone-by-programmergautam.vercel.app/gaming-bg.jpg",
  },
  facebook: {
    app_id: "1234567890",
    title: "GameZone - Your Ultimate Gaming Experience",
    description: "Join GameZone for immersive gameplay and cross-platform play!",
    image: "https://game-zone-by-programmergautam.vercel.app/gaming-bg.jpg",
    url: "https://game-zone-by-programmergautam.vercel.app/",
  },
  linkedin: {
    title: "GameZone - Your Ultimate Gaming Experience",
    description: "Join GameZone for immersive gameplay and cross-platform play!",
    image: "https://game-zone-by-programmergautam.vercel.app/gaming-bg.jpg",
    url: "https://game-zone-by-programmergautam.vercel.app/",
  },
  general: {
    title: "GameZone - Your Ultimate Gaming Experience",
    description: "Join GameZone for immersive gameplay and cross-platform play!",
    image: "https://game-zone-by-programmergautam.vercel.app/gaming-bg.jpg",
  },
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
