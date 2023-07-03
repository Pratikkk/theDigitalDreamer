import React from "react";
import Image from "next/image";
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 The Digital Dreamer. All Rights Reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="the digital dreamer" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="the digital dreamer" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="the digital dreamer" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="the digital dreamer" />
      </div>
    </div>
  )
};

export default Footer;
