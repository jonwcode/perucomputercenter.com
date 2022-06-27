import React from "react";
import css from "./headerInfo.module.css";

const HeaderInfo = ({ toggleMapView }) => {
  return (
    <React.Fragment>
      {" "}
    <span className={css.group}>
      <span className={css.preHeader}>Owner:</span>
      <span className={css.headerText}>Brad Hermann</span>
    </span>
    <span onClick={toggleMapView} className={`${css.group} ${css.location}`}>
        <span className={css.preHeader}>      <i className="fa fa-map-marker fa-lg" aria-hidden="true" /> </span>
        <span className={css.headerText}>18 N. Broadway, Peru, IN, 46970
      </span>
    </span>
    <span className={`${css.group} ${css.location}`}>
        <span className={css.preHeader}> <i className="fa fa-phone fa-lg" aria-hidden="true"></i> </span>
        <span className={css.headerText}><a href="tel:(765) - 473-4423">(765) - 473-4423</a>
      </span>
    </span>
    </React.Fragment>
  );
};

export default HeaderInfo;
