"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./ReferalForm.module.scss";
import emailIcon from "../../../../../assets/email.svg";
import successIcon from "../../../../../assets/success.svg";
import useJsonbin from "@/app/hooks/useJsonbin";

const ReferalForm = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, seIsEmailValid] = useState(true);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const [saveEmail, error] = useJsonbin();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    seIsEmailValid(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      seIsEmailValid(false);
      return;
    }

    const isEmailSaved = !!(await saveEmail(email));

    setIsEmailConfirmed(isEmailSaved);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (isEmailConfirmed) {
    return (
      <form onSubmit={handleSubmit} className={styles["referal-input-form"]}>
        <div className={styles["referal-input-success-container"]}>
          <Image
            src={successIcon}
            alt="Success"
            className={styles["referal-input-icon"]}
          />
          <p className={styles["referal-input-success"]}>
            Your email is confirmed!
          </p>
        </div>
        <div className={styles["referal-input-wrapper"]}>
          <input
            className={styles["copy-input"]}
            type="text"
            placeholder="https://ratepunk.com/referral"
            value="https://ratepunk.com/referral"
            disabled
          />
          <button type="submit" className={styles["copy-input-button"]}>
            Copy
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles["referal-input-form"]}>
      {(!isEmailValid || error) && (
        <p className={styles["referal-input-error"]}>Error State</p>
      )}
      <div className={styles["referal-input-wrapper"]}>
        <input
          className={styles["referal-input"]}
          type="text"
          placeholder="Enter your email address"
          value={email}
          onChange={handleChange}
        />
        <Image
          src={emailIcon}
          alt="Email"
          className={styles["referal-input-icon"]}
        />
      </div>
      <button type="submit" className={styles["referal-input-button"]}>
        Get Referral Link
      </button>
    </form>
  );
};

export default ReferalForm;
