import styles from "./index.module.scss";
import { Link } from 'react-router-dom'
import React, { useState } from "react"
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }

  const [openMods, setOpenMods] = useState(false);
  const modMenuFunction = () => {
    setOpenMods(!openMods);
  }

  const [openInfos, setOpenInfos] = useState(false);
  const InfoMenuFunction = () => {
    setOpenInfos(!openInfos);
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
            <Link to="/">
              <a>
                <p className={styles.mainTitle}>トップ</p>
              </a>
            </Link>
            <a onClick={() => modMenuFunction()}>
              <p className={styles.mainTitle}>導入Mod</p>
            </a>
            <ul className={openMods ? styles.und : styles.def}>
              <div>
                <Link to="/mods/industrial">
                  <a>
                    <p className={styles.mainTitle}>工業Mod</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/mods/magic">
                  <a>
                    <p className={styles.mainTitle}>魔術Mod</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/mods/agriculture">
                  <a>
                    <p className={styles.mainTitle}>農業Mod</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/mods/expedition">
                  <a>
                    <p className={styles.mainTitle}>探検Mod</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/mods/architecture">
                  <a>
                    <p className={styles.mainTitle}>建築Mod</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/mods/etc">
                  <a>
                    <p className={styles.mainTitle}>その他Mod</p>
                  </a>
                </Link>
              </div>
            </ul>
            <Link to="/videos">
              <a>
                <p className={styles.mainTitle}>鯖民の動画</p>
              </a>
            </Link>
            <Link to="/join">
              <a>
                <p className={styles.mainTitle}>参加方法</p>
              </a>
            </Link>
            <Link to="/events">
              <a>
                <p className={styles.mainTitle}>イベント</p>
              </a>
            </Link>
            <Link to="/donate">
              <a>
                <p className={styles.mainTitle}>寄付</p>
              </a>
            </Link>
            <a onClick={() => InfoMenuFunction()}>
              <p className={styles.mainTitle}>情報</p>
            </a>
            <ul className={openInfos ? styles.und : styles.def}>
              <div>
                <Link to="/info/rules">
                  <a>
                    <p className={styles.mainTitle}>ルール</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/info">
                  <a>
                    <p className={styles.mainTitle}>㊙情報</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/info/amusements">
                  <a>
                    <p className={styles.mainTitle}>娯楽施設</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/info/developers">
                  <a>
                    <p className={styles.mainTitle}>開発陣一覧</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/info/statistics">
                  <a>
                    <p className={styles.mainTitle}>ムスカリ統計局</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/info/commands">
                  <a>
                    <p className={styles.mainTitle}>コマンド一覧</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/info/schedules">
                  <a>
                    <p className={styles.mainTitle}>予定表</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/info/questions">
                  <a>
                    <p className={styles.mainTitle}>よくある質問</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/info/bugs">
                  <a>
                    <p className={styles.mainTitle}>既知のバグ</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/info/specs">
                  <a>
                    <p className={styles.mainTitle}>サーバースペック</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/info/logs">
                  <a>
                    <p className={styles.mainTitle}>記録</p>
                  </a>
                </Link>
              </div>
            </ul>
            <Link to="/recruit-devs">
              <a>
                <p className={styles.mainTitle}>開発陣募集</p>
              </a>
            </Link>
            <Link to="/links">
              <a>
                <p className={styles.mainTitle}>リンク集</p>
              </a>
            </Link>
          </li>
          <iframe className={styles.discord} src="https://discord.com/widget?id=419146900441137173&theme=dark" width="350" height="600" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </ul>
      </div>
    </React.Fragment>
  )
}