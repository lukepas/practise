import styles from "./StoreSection.module.scss";
import Image from "next/image";
import chromeStoreIcon from "../../../assets/chrome.svg";
import appleIcon from "../../../assets/apple.svg";
import starIcon from "../../../assets/star.svg";
import { routes } from "@/app/config/routes";

const StoreSection = () => {
  const stores = [
    {
      icon: chromeStoreIcon,
      label: "chrome web store",
      to: routes.stores.chrome,
    },
    {
      icon: appleIcon,
      label: "apple app store",
      to: routes.stores.apple,
    },
  ];

  const stars = ["Star 1", "Star 2", "Star 3", "Star 4", "Star 5"];

  return (
    <section className={styles.store}>
      <div className={styles["store-wrapper"]}>
        <div className={styles["store-item-wrapper"]}>
          {stores.map(({ icon, label, to }) => (
            <div className={styles["store-item-container"]} key={to}>
              <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["store-item"]}
              >
                <Image src={icon} priority alt={label} />
                <div>
                  <p>Available in the</p>
                  <h2>{label}</h2>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className={styles["ratings-container"]}>
          {stars.map((star) => (
            <Image src={starIcon} priority alt={star} key={star} />
          ))}
          <p>Chrome Store reviews</p>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
