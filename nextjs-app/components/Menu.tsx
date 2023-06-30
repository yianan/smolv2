import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Menu.module.css'

const Menu = () => {
  const router = useRouter()

  return (
    <div className={styles.menu}>
      <Link href="/">
        <a className={router.pathname == "/" ? styles.active : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname == "/about" ? styles.active : ""}>About</a>
      </Link>
      <Link href="/chatbot">
        <a className={router.pathname == "/chatbot" ? styles.active : ""}>Chatbot</a>
      </Link>
      <Link href="/document">
        <a className={router.pathname == "/document" ? styles.active : ""}>Document</a>
      </Link>
    </div>
  )
}

export default Menu