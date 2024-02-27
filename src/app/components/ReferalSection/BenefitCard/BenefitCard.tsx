import { Caveat_Brush } from "next/font/google";
import styles from "./BenefitCard.module.scss";
import Image from "next/image";

const caveatBrush = Caveat_Brush({ weight: "400", subsets: ["latin"] });

export type Benefit = {
  icon: string;
  title: string;
  description: string;
  step: string;
};

type Props = {
  benefit: Benefit;
  order: number;
};

const BenefitCard = ({ benefit, order }: Props) => {
  const { icon, title, step, description } = benefit;

  const isEvenOrder = order % 2 === 0;

  const benefitCardClass = isEvenOrder
    ? styles["benefit-card"]
    : `${styles["benefit-card"]} ${styles["reverse"]}`;

  return (
    <div className={benefitCardClass}>
      <div className={styles["benefit-card-image"]}>
        <Image src={icon} priority alt={title} />
      </div>
      <div className={styles["benefit-card-item"]}>
        <p className={styles["item-step"]}>{step}</p>
        <h3 className={`${styles["item-title"]} ${caveatBrush.className}`}>
          {title}
        </h3>
        <p className={styles["item-description"]}>{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
