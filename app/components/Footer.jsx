import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-md py-6">
      <div className="container mx-auto px-4 flex justify-between items-center text-gray-400">
        <div className="flex space-x-6">
          <Link href="https://github.com/programmergautam">
            <FaGithub className="text-slate-400 hover:text-black transition transform hover:scale-110" size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/programmergautam">
            <FaLinkedin className="text-slate-400 hover:text-blue-500 transition transform hover:scale-110" size={24} />
          </Link>
          <Link href="https://www.facebook.com/programmergautam">
            <FaFacebookF
              className="text-slate-400 hover:text-blue-500 transition transform hover:scale-110"
              size={24}
            />
          </Link>
          <Link href="https://www.twitter.com/programmergautam">
            <FaXTwitter className="text-slate-400 hover:text-black transition transform hover:scale-110" size={24} />
          </Link>
          <Link href="https://www.instagram.com/programmergautam">
            <FaInstagram
              className="text-slate-400 hover:text-pink-500 transition transform hover:scale-110"
              size={24}
            />
          </Link>
        </div>
        <div>&copy; {new Date().getFullYear()} GameZone ❤️ Gautam</div>
      </div>
    </footer>
  );
}
