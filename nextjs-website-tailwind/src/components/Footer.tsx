// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex justify-center items-center space-x-2">
            <h3 className="text-xl font-semibold">My E-Shop</h3>
            <p className="mt-2 text-lg sm:text-base">© 2024 All Rights Reserved</p>
          </div>
          <div className="flex space-x-6 text-xl justify-center items-center">
            <Link href="/about" className="hover:text-gray-300">About Us</Link>
            <Link href="/services" className="hover:text-gray-300">Services</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
