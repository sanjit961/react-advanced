import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to={"/"} style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to={"/about"} style={styles.navLink}>
            About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to={"/contact"} style={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navList: {
    display: "flex",
    listStyle: "none",
    padding: 0,
  },
  navItem: {
    marginRight: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#000",
  },
};

export default React.memo(Header);
