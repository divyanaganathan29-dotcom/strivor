type Props = {
  userData: {
    username: string;
  };
  goBack: () => void;
};

const groups = [
  {
    name: "Code Crushers",
    members: ["You", "Rahul", "Priya", "Arjun", "Sneha"],
    values: [5, 4, 4, 6, 7],
    streak: 8,
  },
  {
    name: "Bug Busters",
    members: ["You", "Meera", "Vikram", "Amit"],
    values: [7, 8, 7, 6],
    streak: 5,
  },
];

function GroupsPage({ userData, goBack }: Props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Groups</h1>
      <p style={styles.subtitle}>Compete together, grow together</p>

      {groups.map((group, i) => (
        <div key={i} style={styles.card}>
          {/* HEADER */}
          <div style={styles.cardHeader}>
            <div>
              <h2>{group.name}</h2>
              <p style={styles.small}>{group.members.length} members</p>
            </div>
            <div style={styles.streak}>🔥 {group.streak}</div>
          </div>

          {/* BARS */}
          <div style={styles.bars}>
            {group.values.map((val, idx) => (
              <div key={idx} style={styles.barWrapper}>
                <div
                  style={{
                    ...styles.bar,
                    height: `${val * 10}px`,
                    background:
                      group.members[idx] === "You"
                        ? "#22d3ee"
                        : "#0ea5e9",
                  }}
                />
                <p style={styles.barLabel}>{group.members[idx]}</p>
              </div>
            ))}
          </div>

          {/* MEMBER TAGS */}
          <div style={styles.tags}>
            {group.members.map((m, idx) => (
              <span
                key={idx}
                style={{
                  ...styles.tag,
                  background: m === "You" ? "#22d3ee" : "#1e293b",
                  color: m === "You" ? "black" : "white",
                }}
              >
                {m === "You" ? userData.username : m}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* ALERT */}
      <div style={styles.alert}>
        ⚠️ Rahul missed today’s target!
        <p style={styles.small}>
          Code Crushers group streak is at risk
        </p>
      </div>

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

  title: { fontSize: "32px" },
  subtitle: { color: "#94a3b8", marginBottom: "20px" },

  card: {
    background: "#0f172a",
    borderRadius: "16px",
    padding: "20px",
    marginBottom: "20px",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  streak: {
    color: "#f97316",
    fontWeight: "bold",
  },

  bars: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    height: "120px",
    marginBottom: "10px",
  },

  barWrapper: {
    textAlign: "center" as const,
  },

  bar: {
    width: "40px",
    borderRadius: "6px",
  },

  barLabel: {
    fontSize: "12px",
    color: "#94a3b8",
    marginTop: "5px",
  },

  tags: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap" as const,
    marginTop: "10px",
  },

  tag: {
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  alert: {
    background: "#1e293b",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "20px",
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

export default GroupsPage;