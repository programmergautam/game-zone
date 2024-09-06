import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-md py-6">
      <div className="container mx-auto px-4 flex justify-between items-center text-gray-400">
        <div className="flex space-x-6">
          <Link href="https://www.facebook.com">
            <FaFacebookF className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110" size={24} />
          </Link>
          <Link href="https://www.twitter.com">
            <FaXTwitter className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110" size={24} />
          </Link>
          <Link href="https://www.instagram.com">
            <FaInstagram className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110" size={24} />
          </Link>
        </div>
        <div>&copy; {new Date().getFullYear()} GameZone ❤️ Gautam</div>
      </div>
    </footer>
  );
}
