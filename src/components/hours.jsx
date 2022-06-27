import React from "react";
import css from "./hours.module.css";

const Hours = () => {
  return (
    <div className={css.container}>
    <span className={css.icon}>
      <i className="fa fa-clock-o fa-2x" aria-hidden="true" />
    </span>
<span className={css.hoursWrapper}>
    <span className={css.group}>
      <span className={css.hoursHeader}>Mon-Fri: &nbsp;</span>{" "}
      <span className={css.hours}>11am to 5pm</span>{" "}
    </span>
    <span className={css.group}>
      <span className={css.hoursHeader}>Sat-Sun:&nbsp;</span>
      <span className={css.hours}>Closed</span>
    </span>
 </span>
    </div>
  );
};

export default Hours;
