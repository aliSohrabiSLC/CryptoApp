import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://github.com/aliSohrabiSLC/CryptoApp">github</a> |
          Rract.js Full Course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Ali Sohrabi with 🤩</p>
      </footer>
    </>
  );
}

export default Layout;
