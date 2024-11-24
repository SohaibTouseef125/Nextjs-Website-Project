import Link from 'next/link';
import "./../app/style/home.css"
const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">
        Welcome to My Website!
      </h1>
      <p className="home-paragraph">
        A responsive website built with Next.js, TypeScript, and React Icons.
      </p>
      <div className="home-buttons">
        <Link href="/">
          <button className="home-button home-button-home">
            Home
          </button>
        </Link>
        <Link href="/about">
          <button className="home-button home-button-about">
            About
          </button>
        </Link>
        <Link href="/services">
          <button className="home-button home-button-services">
            Services
          </button>
        </Link>
        <Link href="/contact">
          <button className="home-button home-button-contact">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
