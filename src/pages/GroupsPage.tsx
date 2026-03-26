import { useNavigate } from "react-router-dom";

function GroupsPage() {
  const navigate = useNavigate();

  const groups = [
    {
      name: "Code Crushers",
      members: ["You", "Rahul", "Priya", "Arjun", "Sneha"],
      values: [4, 3, 3, 5, 6],
      streak: 8,
      elite: true,
    },
    {
      name: "Bug Busters",
      members: ["You", "Meera", "Vikram", "Amit"],
      values: [6, 7, 6, 5],
      streak: 5,
      elite: false,
    },
  ];

  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <h1 style={styles.title}>Groups</h1>
      <p style={styles.subtitle}>Compete together, grow together</p>

      {/* GROUP CARDS */}
      {groups.map((group, i) => (
        <div key={i} style={styles.card}>
          
          {/* TOP ROW */}
          <div style={styles.topRow}>
            <div>
              <h2>
                {group.name}{" "}
                {group.elite && <span style={styles.badge}>⭐ ELITE</span>}
              </h2>
              <p style={styles.members}>
                👥 {group.members.length} members
              </p>
            </div>

            <div style={styles.streak}>🔥 {group.streak}</div>
          </div>

          {/* LABEL */}
          <p style={styles.label}>AVG PROBLEMS / DAY</p>

          {/* BAR GRAPH */}
          <div style={styles.barContainer}>
            {group.values.map((v, index) => (
              <div key={index} style={styles.barBox}>
                <div style={{ ...styles.bar, height: v * 15 }} />
                <span style={styles.barLabel}>
                  {group.members[index]}
                </span>
              </div>
            ))}
          </div>

          {/* MEMBER PILLS */}
          <div style={styles.membersRow}>
            {group.members.map((m, idx) => (
              <span
                key={idx}
                style={{
                  ...styles.pill,
                  background:
                    m === "You" ? "#22c1dc" : "#1e293b",
                  color: m === "You" ? "black" : "#94a3b8",
                }}
              >
                {m === "You" ? "Divya" : m}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* ALERT */}
      <div style={styles.alert}>
        ⚠ Rahul missed today’s target!
        <p style={{ fontSize: "12px", color: "#94a3b8" }}>
          Code Crushers group streak is at risk
        </p>
      </div>

      {/* NAVBAR */}
      <div style={styles.nav}>
        <NavItem label="Home" onClick={() => navigate("/dashboard")} />
        <NavItem label="Ranks" onClick={() => navigate("/ranks")} />
        <NavItem label="Groups" active />
        <NavItem label="Stats" onClick={() => navigate("/stats")} />
        <NavItem label="Profile" onClick={() => navigate("/profile")} />
      </div>
    </div>
  );
}

function NavItem({ label, onClick, active }: any) {
  return (
    <div
      onClick={onClick}
      style={{
        color: active ? "#38bdf8" : "#94a3b8",
        cursor: "pointer",
      }}
    >
      {label}
    </div>
  );
}

const styles: any = {
  container: {
    minHeight: "100vh",
    background: "#020617",
    color: "white",
    padding: "20px",
    paddingBottom: "80px",
  },

  title: { fontSize: "28px", fontWeight: "bold" },
  subtitle: { color: "#94a3b8", marginBottom: "20px" },

  card: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "14px",
    marginBottom: "20px",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  badge: {
    background: "#f59e0b",
    color: "black",
    fontSize: "10px",
    padding: "3px 6px",
    borderRadius: "6px",
  },

  members: {
    color: "#94a3b8",
    fontSize: "13px",
  },

  streak: {
    color: "#f97316",
    fontWeight: "bold",
  },

  label: {
    marginTop: "15px",
    fontSize: "12px",
    color: "#64748b",
  },

  barContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginTop: "15px",
  },

  barBox: {
    textAlign: "center",
  },

  bar: {
    width: "60px",
    background: "#22c1dc",
    borderRadius: "6px",
  },

  barLabel: {
    marginTop: "5px",
    fontSize: "12px",
    color: "#94a3b8",
  },

  membersRow: {
    marginTop: "15px",
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },

  pill: {
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  alert: {
    background: "#1e293b",
    padding: "15px",
    borderRadius: "12px",
    marginTop: "20px",
  },

  nav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-around",
    background: "#020617",
    borderTop: "1px solid #1e293b",
    padding: "12px",
  },
};

export default GroupsPage;