import { Caveat_Brush } from "next/font/google";
import styles from "./ReferalCard.module.scss";
import ReferalInput from "./ReferalForm/ReferalForm";
const caveatBrush = Caveat_Brush({ weight: "400", subsets: ["latin"] });

const ReferalCard = () => {
  return (
    <div className={styles["referal"]}>
      <div className={styles["referal-wrapper"]}>
        <h2 className={`${styles["referal-title"]} ${caveatBrush.className}`}>
          REFER FRIENDS AND GET REWARDS
        </h2>
        <p className={styles["referal-description"]}>
          Refer your friends to us and earn hotel booking vouchers. We'll give
          you 1 coin for each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>
        <ReferalInput />
        <p className={styles["referal-rules"]}>Limits on max rewards apply.</p>
      </div>
    </div>
  );
};

export default ReferalCard;
