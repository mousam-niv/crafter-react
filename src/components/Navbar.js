import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
