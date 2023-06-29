import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Menu = () => {
  const router = useRouter()

  return (
    <div className={styles.menu}>
      <Link href="/">
        <a className={router.pathname == "/" ? styles.active : ""}>Home</a>
      </Link>
      <Link href="/chatbot">
        <a className={router.pathname == "/chatbot" ? styles.active : ""}>Chatbot</a>
      </Link>
    </div>
  )
}

export default Menu