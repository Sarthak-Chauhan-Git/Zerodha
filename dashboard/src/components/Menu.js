import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [profileOptionActive, setProfileOptionActive] = useState(false);

  const menuClass = "menu";
  const selectedMenuClass = "menu selected";

  const handleMenu = (index) => {
    setActiveMenu(index);
  };

  const handleProfileClick = () => {
    setProfileOptionActive(!profileOptionActive);
    console.log("Profile clicked", profileOptionActive);
  };

  return (
    <div className="menu-container">
      <img src="/logo.png" alt="logo" style={{ width: "50px" }} />

      <div className="menus">
        <ul className="navbar-nav mx-auto d-flex flex-row gap-4 fs-6">
          <li className="nav-item">
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/"
              onClick={() => {
                handleMenu(0);
              }}
            >
              <p className={activeMenu === 0 ? selectedMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => {
                handleMenu(1);
              }}
            >
              <p className={activeMenu === 1 ? selectedMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => {
                handleMenu(2);
              }}
            >
              <p className={activeMenu === 2 ? selectedMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => {
                handleMenu(3);
              }}
            >
              <p className={activeMenu === 3 ? selectedMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => {
                handleMenu(4);
              }}
            >
              <p className={activeMenu === 4 ? selectedMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => {
                handleMenu(5);
              }}
            >
              <p className={activeMenu === 5 ? selectedMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <div
          className="d-flex align-items-center gap-2"
          onClick={handleProfileClick}
        >
          <div className="rounded-circle p-2 bg-primary text-light">ZU</div>
          <span className="fw-semibold">USERID</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
