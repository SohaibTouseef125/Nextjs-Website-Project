import Link from "next/link";
import "./../app/style/footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top Section */}
        <div className="footer-top">
          <h3 className="footer-title">My E-Shop</h3>
          <p className="footer-rights">© 2024 All Rights Reserved</p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <Link href="/about">
            <p>About Us</p>
          </Link>
          <Link href="/services">
            <p>Services</p>
          </Link>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
