/* eslint-disable react/jsx-key */
import styles from "./header.module.css";
import JClogo from "../../assets/jc_logo_v2.svg";
import crown from "../../assets/crown.svg";
import searchIcon from "../../assets/ic_search.svg";
import micIcon from "../../assets/voice-search.svg";
import avatar from "../../assets/avatar_guest.svg";
const Header = () => {
  let navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"];

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <div className={styles.logo}>
            <img src={JClogo} />
            <div className={styles.premium}>
              <img src={crown} alt="crown" />
              <p>Go Premium</p>
            </div>
          </div>

          <ul className={styles.navLinks}>
            {navLinks.map((link) => {
              return <li className={styles.navLink}>{link}</li>;
            })}
          </ul>
        </nav>
        <div className={styles.search}>
          <div className={styles.searchBox}>
            <div className={styles.headerIcon}>
              <img src={searchIcon} alt="search" />
            </div>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search, Movies, Shows and More"
            />
            <div className={styles.headerIcon}>
              <img src={micIcon} alt="mic" />
            </div>
          </div>
          <img src={avatar} className={styles.avatar} alt="avatar" />
        </div>
        </header>
    </>
  );
};

export default Header;
