import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

const links = [
  { to: '/',            icon: '◈', label: 'Dashboard',   sub: 'Overview'  },
  { to: '/deployments', icon: '⬡', label: 'Deployments', sub: 'Pipeline'  },
  { to: '/logs',        icon: '≋', label: 'Logs',        sub: 'Activity'  },
]

function Sidebar({ expanded, setExpanded, user }) {
  return (
    <aside className={`${styles.sidebar} ${expanded ? styles.expanded : styles.collapsed}`}>
      <div className={styles.gradientEdge} />

      <button
        className={styles.toggleBtn}
        onClick={() => setExpanded(!expanded)}
        title={expanded ? 'Collapse' : 'Expand'}
      >
        <span className={`${styles.toggleIcon} ${expanded ? styles.rotated : ''}`}>›</span>
      </button>

      {/* Logo — shows admin name */}
      <div className={styles.logo}>
        <div className={styles.logoMark}>
          <span className={styles.logoInner}>
            {user.initials.charAt(0)}
          </span>
        </div>
        {expanded && (
          <div className={styles.logoText}>
            <p className={styles.logoName}>{user.name}</p>
            <p className={styles.logoSub}>Control Panel</p>
          </div>
        )}
      </div>

      <div className={styles.divider} />
      {expanded && <p className={styles.sectionLabel}>Navigation</p>}

      <nav className={styles.nav}>
        {links.map(({ to, icon, label, sub }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            title={!expanded ? label : ''}
          >
            <span className={styles.linkIcon}>{icon}</span>
            {expanded && (
              <div className={styles.linkText}>
                <span className={styles.linkLabel}>{label}</span>
                <span className={styles.linkSub}>{sub}</span>
              </div>
            )}
            {expanded && <span className={styles.linkArrow}>›</span>}
          </NavLink>
        ))}
      </nav>

      <div style={{ flex: 1 }} />

      {expanded && (
        <div className={styles.statusBox}>
          <div className={styles.statusRow}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>All Systems Nominal</span>
          </div>
          <div className={styles.statusBar}>
            <div className={styles.statusFill} />
          </div>
          <p className={styles.statusMeta}>Uptime — 99.98%</p>
        </div>
      )}

      {!expanded && (
        <div className={styles.collapsedStatus}>
          <span className={styles.statusDot} />
        </div>
      )}

      <div className={styles.divider} />

      {/* User card — shows dynamic name */}
      <div className={styles.user} title={!expanded ? user.name : ''}>
        <div className={styles.avatar}>{user.initials}</div>
        {expanded && (
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <p className={styles.userName}>{user.name}</p>
            <p className={styles.userRole}>{user.role}</p>
          </div>
        )}
        {expanded && <span className={styles.userMenu}>⋯</span>}
      </div>
    </aside>
  )
}

export default Sidebar