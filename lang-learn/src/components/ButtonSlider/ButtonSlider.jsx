import React from "react";
import classNames from 'classnames/bind';
import { HandySvg } from 'handy-svg';
import btnPrev from "./btn-prev.svg";
import btnNext from "./btn-next.svg";
import style from "../Game/game.module.scss";


function ButtonSlider({moveSlide, direction}) {
  return (
    <button onClick={moveSlide}
            className={direction === "prev" ? classNames(style.buttonSlide, style.prev) : classNames(style.buttonSlide, style.next)}>
    
    <HandySvg src={direction === "prev" ? btnPrev : btnNext}
            className={style.buttonImage}
            width="50" height="50" fill="rgb(53, 53, 106)"/>
    </button>
  );
}

export default ButtonSlider;







