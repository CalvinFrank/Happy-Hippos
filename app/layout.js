import './globals.css'
import Header from './header'
import {AppWrapper} from "./context";
// import E404 from './404';

export const metadata = {
  title: 'Happy Hippos',
}

// function is404() {
   
// }

export default function RootLayout({ children }) {
  return (
    <AppWrapper>
      <html lang="en">
        <body>
          <Header/>
          {children}
          {/* <E404/> */}
        </body>
      </html>
    </AppWrapper>
  )
}
