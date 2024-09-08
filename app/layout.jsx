import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://game-zone-by-programmergautam.vercel.app/"),
  title: "GameZone - Your Ultimate Gaming Experience",
  description: "GameZone - Your Ultimate Gaming Experience Awaits!",
  charset: "UTF-8",
  keywords: "gaming, GameZone, immersive gameplay, cross-platform play, programmergautam, rgd",
  authors: [{ name: "RGD" }],
  openGraph: {
    type: "website",
    url: "https://game-zone-by-programmergautam.vercel.app/",
    title: "GameZone - Your Ultimate Gaming Experience",
    description: "Join GameZone for immersive gameplay and cross-platform play!",
    images: [
      {
        url: "/gaming-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Gaming background",
      },
    ],
    siteName: "GameZone",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gamezone",
    title: "GameZone - Your Ultimate Gaming Experience",
    description: "Join GameZone for immersive gameplay and cross-platform play!",
    images: ["/gaming-bg.jpg"],
  },
  facebook: {
    app_id: "1234567890",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://game-zone-by-programmergautam.vercel.app/",
  },
  icons: {
    icon: "/favicon.ico",
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
