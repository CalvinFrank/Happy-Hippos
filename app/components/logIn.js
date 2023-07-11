import styles from "./logIn.module.css"
import { useAppContext } from "./../context";

export default function LogIn() {
  const {isClicked,setIsClicked} = useAppContext()
  return (
    <div className={styles.login}>
      <div className={styles.inner}>
        <div className={styles.firstLine}>
          I am log in!!!!!!!!!!!!!!!!!!!!!!!!
          <button className={styles.x} onClick={() => {setIsClicked(false)}}>x</button>
        </div>
        I am the next line
      </div>
    </div>
    )
}