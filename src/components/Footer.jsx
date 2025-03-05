import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8  w-full ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 flex items-center">
          <h2 className="text-2xl md:text-5xl font-bold tracking-wide text-center md:text-left">
            MySITE
          </h2>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left">
          {/* Column 1 */}
          <div className="mb-6 md:mb-0 md:mr-12">
            <h2 className="text-xl font-bold mb-2">About Us</h2>
            <p className="text-gray-400">Learn more about our company and mission.</p>
          </div>
          {/* Column 2 */}
          <div>
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <p className="text-gray-400">Email: contact@example.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <Link href="https://www.facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://www.twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://www.instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} My Next.js Site. All rights reserved.
      </div>
    </footer>
  );
}
