import Image from "next/image";
import email from "../../../assets/email-footer.svg";
import logo from "../../../assets/logo.svg";
import styles from "./Footer.module.scss";
import { routes } from "@/app/config/routes";
import tiktok from "../../../assets/tiktok.svg";
import facebook from "../../../assets/facebook.svg";
import linkedin from "../../../assets/linkedin.svg";
import instagram from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";

const Footer = () => {
  const links = [
    {
      label: "Price Comparison",
      to: routes.hompage,
    },
    {
      label: "Chrome Extension",
      to: routes.hompage,
    },
    {
      label: "How It Works",
      to: routes.hompage,
    },
    {
      label: "Ratepunk Blog",
      to: routes.hompage,
    },
    {
      label: "Privacy Policy",
      to: routes.hompage,
    },
  ];

  const socials = [
    {
      icon: tiktok,
      to: routes.hompage,
    },
    {
      icon: facebook,
      to: routes.hompage,
    },
    {
      icon: instagram,
      to: routes.hompage,
    },
    {
      icon: linkedin,
      to: routes.hompage,
    },
    {
      icon: twitter,
      to: routes.hompage,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-wrapper"]}>
        <div>
          <Image priority src={logo} alt="Logo" />
          <p className={styles["footer-description"]}>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you’re getting the best deal!
          </p>
          <p className={styles["footer-copyright"]}>
            © 2021 Ratepunk. All Rights Reserved.
          </p>
        </div>

        <div>
          <nav className={styles.links}>
            <h2>QUICK LINKS</h2>
            <ul>
              {links.map(({ label, to }) => (
                <li key={label}>
                  <a href={to}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles["footer-items"]}>
          <div className={styles["contact-container"]}>
            <h2 className={styles["contact-title"]}>CONTACT</h2>
            <a href="mailto:hi@ratepunk.com">
              <Image priority src={email} alt="Email" />
              hi@ratepunk.com
            </a>
          </div>

          <div className={styles["socials-container"]}>
            <h2 className={styles["socials-title"]}>SOCIAL</h2>
            <div className={styles["socials-box-wrapper"]}>
              {socials.map(({ icon, to }, index) => (
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <span className={styles["socials-box"]}>
                    <Image priority src={icon} alt="Email" />
                  </span>
                </a>
              ))}
            </div>
            <p className={styles["footer-copyright"]}>
              © 2021 Ratepunk. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
