import styles from "./ReferalSection.module.scss";
import BenefitCard, { Benefit } from "./BenefitCard/BenefitCard";
import inviteIcon from "../../../assets/invite.svg";
import coinsIcon from "../../../assets/collect-coins.svg";
import voucherIcon from "../../../assets/voucher.svg";
import ReferalCard from "./ReferalCard/ReferalCard";

const ReferalSection = () => {
  const benefits: Benefit[] = [
    {
      step: "STEP 1",
      title: "INVITE FRIENDS",
      description: "Refer friends with your unique referral link.",
      icon: inviteIcon,
    },
    {
      step: "STEP 2",
      title: "COLLECT COINS",
      description:
        "Get 1 coin for each friend that installs our extension using your referral link.",
      icon: coinsIcon,
    },
    {
      step: "STEP 3",
      title: "GET VOUCHER",
      description:
        "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
      icon: voucherIcon,
    },
  ];

  return (
    <section className={styles.referal}>
      <div className={styles["referal-wrapper"]}>
        <ReferalCard />
        <div className={styles["referal-card-container"]}>
          {benefits.map((benefit, index) => (
            <BenefitCard benefit={benefit} order={index} key={benefit.step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferalSection;
