type Props = {
  userData: {
    username: string;
    age: string;
    arena: string;
  };
  goBack: () => void;
};

const leaderboard = [
  { name: "Sneha", score: 5200, streak: 45 },
  { name: "Arjun", score: 4800, streak: 38 },
  { name: "Vikram", score: 4500, streak: 32 },
  { name: "Meera", score: 4200, streak: 29 },
  { name: "Rohit", score: 3900, streak: 25 },
];

function RanksPage({ userData, goBack }: Props) {
  return (
    <div style={styles.container}>
      {/* HEADER */}
      <h1 style={styles.title}>Leaderboard</h1>
      <p style={styles.subtitle}>See where you stand</p>

      {/* FILTER BAR */}
      <div style={styles.filterBar}>
        <div style={styles.activeTab}>👑 Global</div>
        <div style={styles.inactiveTab}>👥 Age: {userData.age}</div>
      </div>

      {/* PODIUM */}
      <div style={styles.podium}>
        <div style={styles.podiumCard}>
          🥈 Arjun
          <p>4800</p>
        </div>

        <div style={{ ...styles.podiumCard, transform: "scale(1.1)", background: "#134e4a" }}>
          🥇 Sneha
          <p>5200</p>
        </div>

        <div style={styles.podiumCard}>
          🥉 Vikram
          <p>4500</p>
        </div>
      </div>

      {/* LIST */}
      <div style={styles.list}>
        {leaderboard.map((user, index) => (
          <div key={index} style={styles.row}>
            <div>
              <strong>#{index + 1}</strong> {user.name}
              <p style={styles.small}>{user.streak} day streak</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <strong>{user.score}</strong>
              <p style={styles.small}>solved</p>
            </div>
          </div>
        ))}

        {/* YOU */}
        <div style={styles.youRow}>
          <div>
            <strong>#120</strong> {userData.username} (You)
            <p style={styles.small}>12 day streak</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <strong>3420</strong>
            <p style={styles.small}>solved</p>
          </div>
        </div>
      </div>

      {/* BACK */}
      <button onClick={goBack} style={styles.button}>
        ← Back
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#020617",
    color: "white",
    padding: "20px",
  },

  title: {
    fontSize: "32px",
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: "20px",
  },

  filterBar: {
    display: "flex",
    background: "#0f172a",
    borderRadius: "30px",
    padding: "5px",
    marginBottom: "30px",
  },

  activeTab: {
    flex: 1,
    background: "#22d3ee",
    color: "black",
    padding: "10px",
    borderRadius: "30px",
    textAlign: "center" as const,
  },

  inactiveTab: {
    flex: 1,
    textAlign: "center" as const,
    padding: "10px",
    color: "#94a3b8",
  },

  podium: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "30px",
  },

  podiumCard: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center" as const,
    width: "100px",
  },

  list: {
    background: "#0f172a",
    borderRadius: "12px",
    padding: "10px",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    borderBottom: "1px solid #1e293b",
  },

  youRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#1e293b",
    borderRadius: "10px",
    marginTop: "10px",
  },

  small: {
    fontSize: "12px",
    color: "#94a3b8",
  },

  button: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default RanksPage;
