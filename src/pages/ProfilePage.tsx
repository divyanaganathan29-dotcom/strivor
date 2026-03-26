import { useNavigate } from "react-router-dom";

type Props = {
  userData: {
    username: string;
    age: string;
    arena: string;
  };
};

function ProfilePage({ userData }: Props) {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      
      {/* PROFILE HEADER */}
      <div style={styles.header}>
        <div style={styles.avatar}>
          {userData.username?.[0]?.toUpperCase() || "D"}
        </div>

        <h2>{userData.username || "Divya"}</h2>
        <p style={styles.handle}>@{userData.username || "divya_codes"}</p>

        <div style={styles.active}>● Active</div>
      </div>

      {/* PERSONALITY */}
      <div style={styles.personality}>
        <p style={styles.small}>HABIT PERSONALITY</p>
        <h3 style={{ color: "#38bdf8" }}>Burst Performer</h3>
        <p style={styles.desc}>
          Solves many problems in bursts, then rests
        </p>
      </div>

      {/* STATS */}
      <div style={styles.stats}>
        <Stat title="Rank" value="#120" sub="Global" />
        <Stat title="Streak" value="12" sub="days" />
        <Stat title="Points" value="3,420" sub="total" />
      </div>

      {/* BADGES */}
      <h3 style={styles.section}>Badges & Titles</h3>

      <div style={styles.grid}>
        <Badge label="Top Performer" icon="🏆" />
        <Badge label="Most Consistent" icon="🎯" />
        <Badge label="Comeback King" icon="👑" />
        <Badge label="7-Day Warrior" icon="⚔️" />
        <Badge label="Century Club" icon="💯" />
        <Badge label="Hard Hitter" icon="💪" />
      </div>

      {/* TOKENS */}
      <h3 style={styles.section}>Tokens</h3>

      <Token label="Streak Restore" value="2" />
      <Token label="Freeze Day" value="1" />
      <Token label="Skip Penalty" value="3" />

      {/* PLATFORM */}
      <div style={styles.platform}>
        <h3>Platform</h3>
        <p style={{ color: "#94a3b8" }}>
          {userData.arena || "LeetCode"} • Age group: {userData.age || "18-21"}
        </p>
        <p style={{ color: "#f59e0b" }}>⭐ Elite Group Member</p>
      </div>

      {/* NAVBAR */}
      <div style={styles.nav}>
        <NavItem label="Home" onClick={() => navigate("/dashboard")} />
        <NavItem label="Ranks" onClick={() => navigate("/ranks")} />
        <NavItem label="Groups" onClick={() => navigate("/groups")} />
        <NavItem label="Stats" onClick={() => navigate("/stats")} />
        <NavItem label="Profile" active />
      </div>
    </div>
  );
}

/* COMPONENTS */

function Stat({ title, value, sub }: any) {
  return (
    <div style={styles.statCard}>
      <p style={styles.small}>{title}</p>
      <h2>{value}</h2>
      <span style={styles.sub}>{sub}</span>
    </div>
  );
}

function Badge({ label, icon }: any) {
  return (
    <div style={styles.badge}>
      <div style={{ fontSize: "20px" }}>{icon}</div>
      <p>{label}</p>
    </div>
  );
}

function Token({ label, value }: any) {
  return (
    <div style={styles.token}>
      <span>{label}</span>
      <span>{value}</span>
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

/* STYLES */

const styles: any = {
  container: {
    minHeight: "100vh",
    background: "#020617",
    color: "white",
    padding: "20px",
    paddingBottom: "80px",
  },

  header: {
    textAlign: "center",
    marginBottom: "20px",
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "#164e63",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    margin: "auto",
    marginBottom: "10px",
  },

  handle: {
    color: "#94a3b8",
    fontSize: "14px",
  },

  active: {
    color: "#22c55e",
    fontSize: "12px",
    marginTop: "5px",
  },

  personality: {
    border: "1px solid #38bdf8",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px",
  },

  desc: {
    color: "#94a3b8",
    fontSize: "13px",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "15px",
    marginBottom: "20px",
  },

  statCard: {
    background: "#0f172a",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "center",
  },

  small: {
    color: "#64748b",
    fontSize: "12px",
  },

  sub: {
    fontSize: "12px",
    color: "#64748b",
  },

  section: {
    marginTop: "20px",
    marginBottom: "10px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
  },

  badge: {
    background: "#0f172a",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
  },

  token: {
    background: "#0f172a",
    padding: "15px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },

  platform: {
    background: "#0f172a",
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

export default ProfilePage;