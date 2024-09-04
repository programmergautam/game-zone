import "./globals.css";

export const metadata = {
  charset: "UTF-8",
  description: "GameZone - Your Ultimate Gaming Experience",
  keywords: "gaming, GameZone, immersive gameplay, cross-platform play",
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
      <body className="bg-gray-100 min-h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}
