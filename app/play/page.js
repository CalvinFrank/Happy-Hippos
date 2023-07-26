import Game from "../components/game"
import styles from "./page.module.css"

export default function Play() {
  return (
    <div>
      <h3>Continue→</h3>
      <h5>🤔Mmmmm... 🫵you havn't 👁️👁️looked at any 🎮games YET.</h5>
      <h3>Suggested→</h3>
      <ul className={styles.suggested}>
        <Game title="stranded" imgsrc="https://picsum.photos/200/300"/>
        <Game title="dance in a coconut tree with mr poopypants looking at another coconut tree that is next to the coconut tree that you and the other dancers are on😁😉" imgsrc="../favicon.ico"/>
        <Game title="race simulator" imgsrc="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"/>
      </ul>
    </div>
  )
}