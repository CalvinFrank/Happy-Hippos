"use client"
import styles from "./page.module.css"
import { useRouter } from "next/navigation"

export default function E404() {
  const router = useRouter()
  return (
    <div className={styles.e404}>
      <h1>❗️Oops❗️</h1>
      <h1>Thats a 4️⃣0️⃣4️⃣</h1>
      <h1>We're lost in the big 🌎world🌎 of 🛝fun🤪 things!</h1>
      <h1>Dont worry I know Our way back home:</h1>
      <h1 onClick={() => {router.push("/")}} className={styles.click}>🖱️click me</h1>
    </div>
  )
}