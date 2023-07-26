"use client"
import styles from "./header.module.css";
import LogIn from "./login/page";
import { useAppContext } from "./context";
import { useRouter } from "next/navigation";

export default function Header() {
  const {isClicked,setIsClicked} = useAppContext()
  const router = useRouter()
  return (
    <header className={styles.header}>
         <img src="./favicon.ico" className={styles.logo} onClick={() => {router.push("/")}}/>
          <button className={styles.profile} onClick={() => {setIsClicked(true)}}>Log In</button>  
         {isClicked ? <LogIn/> : ""}
    </header>
  )
}