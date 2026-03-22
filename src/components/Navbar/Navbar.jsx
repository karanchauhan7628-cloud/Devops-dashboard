import styles from './Navbar.module.css'

function Navbar({ expanded }) {
  const time = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit'
  })

  return (
    <header className={`${styles.navbar} ${!expanded ? styles.navbarWide : ''}`}>
      <div className={styles.left}>
        <div className={styles.breadcrumb}>
          <span className={styles.breadRoot}>~/devops</span>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadPage}>dashboard</span>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.search}>
          <span className={styles.searchIcon}>⌕</span>
          <span className={styles.searchPlaceholder}>
            {expanded ? 'Search commands, logs, deployments...' : 'Search...'}
          </span>
          <kbd className={styles.kbd}>⌘K</kbd>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.clock}>{time}</div>

        <div className={styles.pill}>
          <span className={styles.pillDot} />
          Operational
        </div>

        <button className={styles.notifBtn}>
          <span className={styles.notifIcon}>◉</span>
          <span className={styles.notifBadge}>3</span>
        </button>

        <div className={styles.avatarWrap}>
          <div className={styles.avatar}>KS</div>
          <div className={styles.avatarRing} />
        </div>
      </div>
    </header>
  )
}

export default Navbar