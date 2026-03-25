type Props = {
  userData: {
    arena: string;
    username: string;
    age: string;
  };
  goBack: () => void;
};

function ProfilePage({ userData, goBack }: Props) {
  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.avatar}>D</div>
        <h2>{userData.username || "Divya"}</h2>
        <p style={styles.handle}>@{userData.username || "divya_codes"}</p>
        <span style={styles.active}>● Active</span>
      </div>

      {/* PERSONALITY */}
      <div style={styles.highlight}>
        <p style={styles.small}>HABIT PERSONALITY</p>
        <h3 style={styles.blue}>Burst Performer</h3>
        <p style={styles.desc}>
          Solves many problems in bursts, then rests
        </p>
      </div>

      {/* STATS */}
      <div style={styles.grid}>
        <div style={styles.card}>
          <p>Rank</p>
          <h2>#120</h2>
          <span>Global</span>
        </div>

        <div style={styles.card}>
          <p>Streak</p>
          <h2>12</h2>
          <span>days</span>
        </div>

        <div style={styles.card}>
          <p>Points</p>
          <h2>3,420</h2>
          <span>total</span>
        </div>
      </div>

      {/* BADGES */}
      <h3 style={styles.section}>Badges & Titles</h3>
      <div style={styles.badgeGrid}>
        {["🏆 Top Performer", "🎯 Consistent", "👑 Comeback King",
          "⚔️ 7-Day Warrior", "💯 Century Club", "💪 Hard Hitter"].map((b) => (
          <div key={b} style={styles.badge}>{b}</div>
        ))}
      </div>

      {/* TOKENS */}
      <h3 style={styles.section}>Tokens</h3>
      <div style={styles.list}>
        <div style={styles.listItem}>🔄 Streak Restore <span>2</span></div>
        <div style={styles.listItem}>❄️ Freeze Day <span>1</span></div>
        <div style={styles.listItem}>⏭️ Skip Penalty <span>3</span></div>
      </div>

      {/* PLATFORM */}
      <div style={styles.platform}>
        <p>Platform</p>
        <h4>{userData.arena || "LeetCode"}</h4>
        <span>Age group: {userData.age}</span>
      </div>

      {/* BACK */}
      <button onClick={goBack} style={styles.button}>
        ← Back
      </button>
    </div>
  );
}

const styles: any = {
  container: {
    minHeight: "100vh",
    background: "#020617",
    color: "white",
    padding: "20px",
  },

  header: {
    textAlign: "center",
    marginBottom: "20px",
  },

  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#0ea5e9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    margin: "0 auto 10px",
  },

  handle: {
    color: "#94a3b8",
  },

  active: {
    color: "#22c55e",
    fontSize: "12px",
  },

  highlight: {
    border: "1px solid #38bdf8",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "20px",
  },

  blue: { color: "#38bdf8" },
  small: { color: "#94a3b8", fontSize: "12px" },
  desc: { color: "#94a3b8" },

  grid: {
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
  },

  card: {
    flex: 1,
    background: "#0f172a",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
  },

  section: {
    marginTop: "20px",
    marginBottom: "10px",
  },

  badgeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  },

  badge: {
    background: "#0f172a",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
  },

  list: {
    marginTop: "10px",
  },

  listItem: {
    display: "flex",
    justifyContent: "space-between",
    background: "#0f172a",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  },

  platform: {
    marginTop: "20px",
    background: "#0f172a",
    padding: "15px",
    borderRadius: "10px",
  },

  button: {
    marginTop: "20px",
    padding: "10px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ProfilePage;