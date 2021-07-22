import styles from "./index.module.scss";
import Link from "next/link";
import React, {useState} from "react"
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <React.Fragment>
      <header id="header" className={styles.header}>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
          </div>
        </div>
      </header>
      <div className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}>
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
          </div>
          <li>
            <Link href="/">
              <a>
                <p className={styles.mainTitle}>TEST</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}