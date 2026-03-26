import { useNavigate } from "react-router-dom";

type Props = {
  userData: {
    username: string;
  };
};

function Dashboard({ userData }: Props) {
  const navigate = useNavigate();

  const leaderboard = [
    { name: "Sneha", points: 5200 },
    { name: "Arjun", points: 4800 },
    { name: "Vikram", points: 4500 },
    { name: "Meera", points: 4200 },
    { name: "Rohit", points: 3900 },
  ];

  const weekly = [3, 3, 1, 2, 1, 5, 1];
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <h1 style={styles.title}>
        Welcome back, {userData.username || "Divya"} 👋
      </h1>

      <span style={styles.active}>● Active</span>

      {/* MOTIVATION */}
      <div style={styles.banner}>
        Every problem solved is a step closer to mastery ⚡
      </div>

      {/* STATS GRID */}
      <div style={styles.grid}>
        <Card title="TODAY" value="3" sub="problems solved" />
        <Card title="STREAK" value="12 days" sub="Best: 28" />
        <Card title="POINTS" value="3,420" />
        <Card title="TOTAL SOLVED" value="247" />
      </div>

      {/* PERSONALITY */}
      <div style={styles.personality}>
        🧠 Habit Personality: <b>Burst Performer</b>
      </div>

      {/* LEADERBOARD */}
      <h2 style={styles.section}>🏆 Global Top 5</h2>

      {leaderboard.map((u, i) => (
        <div key={i} style={styles.leaderRow}>
          <span>#{i + 1}</span>
          <span>{u.name}</span>
          <span>{u.points} pts</span>
        </div>
      ))}

      {/* WEEKLY */}
      <h2 style={styles.section}>Weekly Progress</h2>

      <div style={styles.week}>
        {weekly.map((val, i) => (
          <div key={i} style={styles.weekItem}>
            <div style={{ ...styles.bar, height: val * 15 }} />
            <span>{days[i]}</span>
          </div>
        ))}
      </div>

      {/* NAVBAR */}
      <div style={styles.nav}>
        <NavItem label="Home" onClick={() => navigate("/dashboard")} />
        <NavItem label="Ranks" onClick={() => navigate("/ranks")} />
        <NavItem label="Groups" onClick={() => navigate("/groups")} />
        <NavItem label="Stats" onClick={() => navigate("/stats")} />
        <NavItem label="Profile" onClick={() => navigate("/profile")} />
      </div>
    </div>
  );
}

function Card({ title, value, sub }: any) {
  return (
    <div style={styles.card}>
      <p style={styles.cardTitle}>{title}</p>
      <h2>{value}</h2>
      {sub && <span style={styles.sub}>{sub}</span>}
    </div>
  );
}

function NavItem({ label, onClick }: any) {
  return (
    <div style={styles.navItem} onClick={onClick}>
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

  active: {
    color: "#22c55e",
    fontSize: "12px",
    marginBottom: "10px",
  },

  banner: {
    border: "1px solid #38bdf8",
    padding: "15px",
    borderRadius: "10px",
    margin: "15px 0",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
  },

  card: {
    background: "#0f172a",
    padding: "15px",
    borderRadius: "12px",
  },

  cardTitle: { color: "#94a3b8" },
  sub: { fontSize: "12px", color: "#64748b" },

  personality: {
    marginTop: "20px",
    padding: "15px",
    background: "#0f172a",
    borderRadius: "10px",
  },

  section: {
    marginTop: "25px",
    marginBottom: "10px",
  },

  leaderRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#0f172a",
    marginBottom: "8px",
    borderRadius: "8px",
  },

  week: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },

  weekItem: {
    textAlign: "center",
  },

  bar: {
    width: "20px",
    background: "#38bdf8",
    margin: "0 auto",
    borderRadius: "5px",
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

  navItem: {
    cursor: "pointer",
    color: "#94a3b8",
  },
};

export default Dashboard;