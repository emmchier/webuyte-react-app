import React from "react";
import "./styles.css";

const navList = [
  {
    id: 0,
    navItem: "Products",
    to: "#!",
  },
  {
    id: 1,
    navItem: "About",
    to: "#!",
  },
  {
    id: 2,
    navItem: "Contact",
    to: "#!",
  },
];

const Navbar = () => {
  return (
    <header className="navbar" role="banner">
      <div className="container">
        <div className="navbar__content">
          <a href="/" className="nabvar__brand" aria-label="link">
            LOGO
          </a>
          <nav className="navbar__nav">
            <ul className="navbar__list">
              {navList.map((item) => (
                <li key={item.id} className="navbar__list--item">
                  <a href={`/${item.to}`} aria-label="link">
                    {item.navItem}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
