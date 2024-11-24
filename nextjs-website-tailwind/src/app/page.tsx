// pages/index.tsx
import Link from 'next/link';


const Home = () => {
  return (
    <div>
     
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center py-12 px-4 sm:px-6 sm:py-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4 animate__animated animate__fadeIn">
          Welcome to My Website!
        </h1>
        <p className="text-xl sm:text-xl text-gray-700 mb-6 animate__animated animate__fadeIn">
          button responsive website built with Next.js, TypeScript, Tailwind CSS, and React Icons.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
          <Link href="/">
            <button className="bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-800 transform transition duration-300 ease-in-out hover:scale-105">
            Home
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-800 transform transition duration-300 ease-in-out hover:scale-105">
              About
            </button>
          </Link>
          <Link href="/services">
            <button className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-800 transform transition duration-300 ease-in-out hover:scale-105">
              Services
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-800 transform transition duration-300 ease-in-out hover:scale-105">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
