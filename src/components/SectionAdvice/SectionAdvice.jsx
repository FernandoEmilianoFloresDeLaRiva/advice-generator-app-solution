import React, { useState } from "react";
import dice from "../../assets/dice.svg";
import iconHr from "../../assets/iconHr.svg";
import "./SectionAdvice.css";
import { useAdvice } from "../../hooks/useAdvice";

function SectionAdvice() {
  const [change, setChange] = useState(false);
  const { id, advice } = useAdvice(change);
  const changeAdvice = (e) => {
    e.preventDefault();
    setChange(!change);
  };
  return (
    <article>
      <p>ADVICE # {id}</p>
      <h1>{advice}</h1>
      <img className="line" src={iconHr} />
      <button className="button-dice" onClick={changeAdvice}>
        <img src={dice} />
      </button>
    </article>
  );
}

export default SectionAdvice;
