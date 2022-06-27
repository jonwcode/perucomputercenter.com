import React from 'react'
import css from "./card.module.css";

const Card = ({ children }) => {
    return ( <div className={css.wrapper}>{ children }</div>);
}
 
export default Card;