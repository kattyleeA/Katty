import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="header">
      <a href="#default" class="logo">
        CompanyLogo
      </a>
      <div class="header-right">
        <li>
          <Link to="home"> Home </Link>
        </li>
        <li>
          <Link to="about"> About </Link>
        </li>
        <li>
          <Link to="contact"> Contact </Link>
        </li>
      </div>
    </div>
  );
}
export default Header;
