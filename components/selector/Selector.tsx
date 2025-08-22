import React from "react";
import Grid from "./Grid";
import styles from "./Selector.module.scss";
import sharedStyles from "./Shared.module.scss";

export default function Selector() {
  return (
    <div className={styles.container}>
      <Grid
        key="tank"
        role="tank"
        gridClass={`${sharedStyles.gridFour} ${sharedStyles.gridEnd}`}
      />
      <Grid
        key="damage"
        role="damage"
        gridClass={`${sharedStyles.gridFive} ${sharedStyles.gridCenter}`}
      />
      <Grid key="support" role="support" gridClass={sharedStyles.gridFour} />
    </div>
  );
}
