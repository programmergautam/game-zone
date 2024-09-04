import "./globals.css";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="GameZone - Your Ultimate Gaming Experience" />
        <meta name="keywords" content="gaming, GameZone, immersive gameplay, cross-platform play" />
        <meta name="author" content="GameZone Team" />
        <title>GameZone - Your Ultimate Gaming Experience</title>
      </Head>
      <body className="bg-gray-100 min-h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}
