import styles from "./game.module.css"

export default function Game({title, imgsrc}) {
  return (
    <li className={styles.game}>
      <img src={imgsrc} className={styles.thumbnail}/>
      <span className={styles.title}>{title}</span>
    </li>
  )
}