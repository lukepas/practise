"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import menuOpen from "../../../assets/menu.svg";
import menuClose from "../../../assets/close.svg";
import styles from "./Header.module.scss";
import { routes } from "@/app/config/routes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      label: "Chrome Extension",
      to: routes.hompage,
    },
    {
      label: "Price Comparison",
      to: routes.hompage,
    },
    {
      label: "Blog",
      to: routes.hompage,
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles["header-wrapper"]}>
        <div className={styles.logo}>
          <a href={routes.hompage}>
            <Image priority src={logo} alt="Logo" />
          </a>
        </div>
        <nav className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.to}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles["hamburger-menu"]} onClick={toggleMenu}>
          <div>
            <Image
              priority
              src={isMenuOpen ? menuClose : menuOpen}
              alt="menu"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
