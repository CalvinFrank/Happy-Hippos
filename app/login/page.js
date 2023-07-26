"use client"
import styles from "./page.module.css"
import { useAppContext } from "../context";

export default function LogIn() {
  const {isClicked,setIsClicked} = useAppContext()
  return (
    <div className={styles.login}>
      <div className={styles.inner}>
        <div className={styles.firstLine}>
          <button>Log In</button>
          <button className={styles.x} onClick={() => {setIsClicked(false)}}>x</button>
        </div>
        <hr />
        <h2>or</h2>
        <hr />
        <div className={styles.links}>
          <a href="/play">play as guest</a>
          <a href="/createAnAccount">create an account</a>
        </div>
      </div>
    </div>
    )
}
