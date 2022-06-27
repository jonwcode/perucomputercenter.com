import React, { useState, useRef, useEffect } from "react";
import img, { RenderImage } from "./images";
import css from "./slideshow.module.css";

const SlideShow = () => {

  RenderImage();

  const [index, setIndex] = useState(0);

  const count = useRef();

  count.current = index;

  const slideShowTimer = 20000;
  const slideBarDes = useRef();

  let desBarClasses = `${css.desBar}`;

  useEffect(() => {
    console.log(count.current, img.length - 1);

    const loopTimeout = setInterval(() => {
      if (count.current !== img.length - 1) {
        setIndex(count.current + 1);
      } else {
        setIndex(0);
      }

      //console.log(imgIndex);
    }, slideShowTimer);

    const changeCssSlideDownTimeOut = setTimeout(() => {
      slideBarDes.current.className = `${css.desBar} ${css.slideDownDesbar}`;
    }, slideShowTimer - 1000);

    const timeOut = setTimeout(() => {
      slideBarDes.current.className = `${css.desBar}`;
      console.log("Timeout");
    }, 4000);

    console.log("useEffect");

    return () => {
      clearTimeout(timeOut);
      clearInterval(loopTimeout);
      clearTimeout(changeCssSlideDownTimeOut);
    };
  }, [setIndex, index]);

  return (
    <React.Fragment>
      <div className={css["slideShow-container"]}>
        <div key={index} className={css.imgWrapper}>
          <img
            className={css.slideShow}
            alt="computer center photos"
            key={index}
            src={img[index].src}
          />
          <div ref={slideBarDes} className={desBarClasses}>
            {img[index].des}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SlideShow;
