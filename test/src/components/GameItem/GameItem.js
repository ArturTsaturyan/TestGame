import { useEffect, useState } from "react";
import styles from "./GameItem.module.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function GameItem({ src, title, name }) {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate(`game/${title}`)
  }
  return (
    <div className={styles.GameItem}>
      <div onClick={handleClick}>
        {<img src={`https://cdn2.softswiss.net/i/s2/${name}.png`} alt="" className={styles.GameItemImage} />}
      </div>
      <div>
        <p className={styles.GameItemTitle}>{title}</p>
      </div>
    </div>
  );
}
