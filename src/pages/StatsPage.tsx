
type Props = {
  userData: {
    username: string;
    arena: string;
    age: string;
  };
  goBack: () => void;
};

function StatsPage({ userData, goBack }: Props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Analytics</h1>
      <p style={styles.subtitle}>Track your coding journey</p>

      {/* Weekly Performance */}
      <div style={styles.card}>
        <h3>Weekly Performance</h3>
        <p style={styles.small}>Problems solved per day</p>

        <div style={styles.graph}>
          Mon — Tue — Wed — Thu — Fri — Sat — Sun
        </div>

        <div style={styles.statsRow}>
          <div>
            <p>Age Rank</p>
            <p style={styles.highlight}>#5</p>
          </div>
          <div>
            <p>Global Rank</p>
            <p>#120</p>
          </div>
          <div>
            <p>Streak</p>
            <p style={{ color: "#f97316" }}>12 days</p>
          </div>
        </div>
      </div>

      {/* Peer Comparison */}
      <div style={styles.card}>
        <h3>Peer Comparison</h3>
        <p style={styles.small}>Average problems per day</p>

        <div style={styles.barContainer}>
          {["You", "Rahul", "Priya", "Arjun", "Sneha"].map((name, i) => (
            <div key={i} style={styles.barItem}>
              <div
                style={{
                  ...styles.bar,
                  height: `${(i + 2) * 20}px`,
                }}
              />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Progress */}
      <div style={styles.card}>
        <h3>Monthly Progress</h3>

        <div>
          <p>Monthly Target</p>
          <div style={styles.progressBg}>
            <div style={{ ...styles.progressFill, width: "80%" }} />
          </div>
          <p style={styles.small}>64 / 80</p>
        </div>

        <div>
          <p>Weekly Target</p>
          <div style={styles.progressBg}>
            <div
              style={{
                ...styles.progressFill,
                width: "80%",
                background: "#a855f7",
              }}
            />
          </div>
          <p style={styles.small}>16 / 20</p>
        </div>
      </div>

      {/* BACK BUTTON */}
      <button style={styles.button} onClick={goBack}>
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
  title: { fontSize: "28px", marginBottom: "5px" },
  subtitle: { color: "#94a3b8", marginBottom: "20px" },

  card: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
  },

  small: { color: "#94a3b8", fontSize: "12px" },

  graph: {
    height: "120px",
    background: "#020617",
    borderRadius: "8px",
    margin: "10px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#38bdf8",
  },

  statsRow: {
    display: "flex",
    justifyContent: "space-between",
  },

  highlight: {
    color: "#38bdf8",
    fontWeight: "bold",
  },

  barContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: "120px",
  },

  barItem: {
    textAlign: "center",
  },

  bar: {
    width: "30px",
    background: "#22d3ee",
    borderRadius: "5px",
    marginBottom: "5px",
  },

  progressBg: {
    height: "8px",
    background: "#1e293b",
    borderRadius: "10px",
    margin: "5px 0",
  },

  progressFill: {
    height: "100%",
    background: "#22d3ee",
    borderRadius: "10px",
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
export default StatsPage;