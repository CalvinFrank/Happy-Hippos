"use client"
import styles from "./header.module.css";
import LogIn from "./components/logIn";
import { useAppContext } from "./context";

export default function Header() {
  const {isClicked,setIsClicked} = useAppContext()
  return (
    <header className={styles.header}>
         <img src="./favicon.ico" className={styles.logo}/>
         <button className={styles.profile} onClick={() => {setIsClicked(true)}}>Log In</button>  
         {isClicked ? <LogIn/> : ""}
    </header>
  )
}