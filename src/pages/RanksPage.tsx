import { useNavigate } from "react-router-dom";

type Props = {
  userData: {
    username: string;
  };
};

function RanksPage({ userData }: Props) {
  const navigate = useNavigate();

  const top3 = [
    { name: "Arjun", points: 4800, rank: 2 },
    { name: "Sneha", points: 5200, rank: 1 },
    { name: "Vikram", points: 4500, rank: 3 },
  ];

  const others = [
    { name: "Meera", points: 4200, streak: 29 },
    { name: "Rohit", points: 3900, streak: 25 },
  ];

  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <h1 style={styles.title}>Leaderboard</h1>
      <p style={styles.subtitle}>See where you stand</p>

      {/* FILTER BAR */}
      <div style={styles.filter}>
        <div style={styles.activeTab}>👑 Global</div>
        <div style={styles.inactiveTab}>Age: 18-21</div>
      </div>

      {/* PODIUM */}
      <div style={styles.podium}>
        
        {/* 2nd */}
        <div style={styles.podiumItem}>
          <div style={styles.medal}>🥈</div>
          <p>{top3[0].name}</p>
          <div style={styles.podiumCardSmall}>
            {top3[0].points}
          </div>
        </div>

        {/* 1st */}
        <div style={styles.podiumItem}>
          <div style={styles.medal}>🥇</div>
          <p>{top3[1].name}</p>
          <div style={styles.podiumCardBig}>
            {top3[1].points}
          </div>
        </div>

        {/* 3rd */}
        <div style={styles.podiumItem}>
          <div style={styles.medal}>🥉</div>
          <p>{top3[2].name}</p>
          <div style={styles.podiumCardSmall}>
            {top3[2].points}
          </div>
        </div>
      </div>

      {/* LIST */}
      <div style={styles.list}>
        {others.map((u, i) => (
          <div key={i} style={styles.row}>
            <div>
              <b>#{i + 4}</b> {u.name}
              <p style={styles.sub}>{u.streak} day streak</p>
            </div>

            <div style={styles.right}>
              <b>{u.points}</b>
              <p style={styles.sub}>{300 + i * 10} solved</p>
            </div>
          </div>
        ))}

        {/* YOU */}
        <div style={styles.you}>
          <div>
            <b>#120</b> {userData.username || "Divya (You)"}
            <p style={styles.sub}>12 day streak</p>
          </div>

          <div style={styles.right}>
            <b>3420</b>
            <p style={styles.sub}>247 solved</p>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div style={styles.nav}>
        <NavItem label="Home" onClick={() => navigate("/dashboard")} />
        <NavItem label="Ranks" active />
        <NavItem label="Groups" onClick={() => navigate("/groups")} />
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

  filter: {
    display: "flex",
    background: "#0f172a",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "30px",
  },

  activeTab: {
    flex: 1,
    background: "#22c1dc",
    padding: "10px",
    textAlign: "center",
    color: "black",
  },

  inactiveTab: {
    flex: 1,
    padding: "10px",
    textAlign: "center",
    color: "#94a3b8",
  },

  podium: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "end",
    marginBottom: "30px",
  },

  podiumItem: {
    textAlign: "center",
  },

  medal: {
    fontSize: "20px",
  },

  podiumCardBig: {
    background: "#164e63",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "10px",
  },

  podiumCardSmall: {
    background: "#1e293b",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "10px",
  },

  list: {
    background: "#0f172a",
    borderRadius: "12px",
    padding: "10px",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
    borderBottom: "1px solid #1e293b",
  },

  right: {
    textAlign: "right",
  },

  sub: {
    fontSize: "12px",
    color: "#64748b",
  },

  you: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
    background: "#1e293b",
    borderRadius: "8px",
    marginTop: "10px",
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

export default RanksPage;
