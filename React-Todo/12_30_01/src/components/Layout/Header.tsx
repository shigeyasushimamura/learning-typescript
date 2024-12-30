import styles from "./Layout.module.css";
const Header = () => {
  return (
    <>
      <div className={`${styles.appRow} ${styles.appHeader}`}>
        <div className={styles.appRowContent}>
          <header className={styles.headerHeader}>
            <div className={`${styles.headerTitle} `}>
              <h1>ポケモン図鑑</h1>
            </div>
            {/* <div className={styles.headerVerticalDivider}></div> */}
            <div className={`${styles.headerFlex} ${styles.headerSubTitle}`}>
              <h2>緑ver</h2>
            </div>
            <div>
              <button
                type="button"
                className={`${styles.btnIconMedium} ${styles.btnIcon} ${styles.btnOutlineWhite}`}
              >
                設定
              </button>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
