import styles from './GameButton.module.css';

export default function GameButton({onClick}) {
    return(
        <div className={styles.gameButton}>
            <button className={styles.viewMore} onClick={onClick}>View more</button>
        </div>
    )
}