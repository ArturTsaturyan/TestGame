import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Game.module.css";

export default function Game() {
  const { title } = useParams();

  return (
    <div className={styles.gamePage}>
      <NavLink to="/" className={styles.back}>
        Back
      </NavLink>
      <div className={styles.gamePageTitel}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
