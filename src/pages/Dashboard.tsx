type Props = {
  userData: {
    arena: string;
    username: string;
    age: string;
  };
  goToRanks: () => void;
  goToGroups: () => void;
  goToStats: () => void;
  goToProfile: () => void;
};

function Dashboard({
  userData,
  goToRanks,
  goToGroups,
  goToStats,
  goToProfile,
}: Props) {
  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>
          Welcome back, {userData.username || "Divya"} 👋
        </h1>

        <span style={styles.active}>● Active</span>
      </div>

      {/* MOTIVATION BAR */}
      <div style={styles.highlight}>
        🔥 You’re on fire! Keep that streak alive
      </div>

      {/* STATS GRID */}
      <div style={styles.grid}>
        <div style={styles.card}>
          <p style={styles.label}>TODAY</p>
          <h2>3</h2>
          <span style={styles.sub}>problems solved</span>
        </div>

        <div style={styles.card}>
          <p style={styles.label}>STREAK</p>
          <h2>12 days</h2>
          <span style={styles.sub}>Best: 28</span>
        </div>

        <div style={styles.cardGlow}>
          <p style={styles.label}>POINTS</p>
          <h2>3,420</h2>
        </div>

        <div style={styles.card}>
          <p style={styles.label}>TOTAL SOLVED</p>
          <h2>247</h2>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div style={styles.bottomNav}>
        <div style={styles.navItem}>
          🏠
          <p>Home</p>
        </div>

        <div style={styles.navItem} onClick={goToRanks}>
          🏆
          <p>Ranks</p>
        </div>

        <div style={styles.navItem} onClick={goToGroups}>
          👥
          <p>Groups</p>
        </div>

        <div style={styles.navItem} onClick={goToStats}>
          📊
          <p>Stats</p>
        </div>

        <div style={styles.navItem} onClick={goToProfile}>
          👤
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
}

const styles: any = {
  container: {
    minHeight: "100vh",
    background: "#020617",
    color: "white",
    padding: "25px",
    paddingBottom: "90px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },

  title: {
    fontSize: "36px",
    fontWeight: "bold",
  },

  active: {
    background: "#022c22",
    color: "#22c55e",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  highlight: {
    border: "1px solid #38bdf8",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "25px",
    color: "#e2e8f0",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  card: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "16px",
  },

  cardGlow: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 0 30px rgba(56,189,248,0.25)",
  },

  label: {
    color: "#94a3b8",
    marginBottom: "8px",
    fontSize: "14px",
  },

  sub: {
    color: "#64748b",
    fontSize: "12px",
  },

  bottomNav: {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    background: "#020617",
    borderTop: "1px solid #1e293b",
    display: "flex",
    justifyContent: "space-around",
    padding: "12px 0",
  },

  navItem: {
    textAlign: "center",
    fontSize: "14px",
    color: "#94a3b8",
    cursor: "pointer",
  },
};

export default Dashboard;