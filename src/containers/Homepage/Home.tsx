import React from "react";

import * as styles from "./Home.css";

export const Home = () => {
  return (
    <div>
      <section className={styles.section}>
        <h1>My Portfolio</h1>
      </section>
      <section className={styles.section}>
        <h2>My projects</h2>
      </section>
      <section className={styles.section}>
        <h2>Contact me</h2>
      </section>
    </div>
  );
};
