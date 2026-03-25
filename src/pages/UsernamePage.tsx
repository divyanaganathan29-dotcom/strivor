import { useState } from "react";

type Props = {
  next: (username: string) => void;
};

function UsernamePage({ next }: Props) {
  const [username, setUsername] = useState("");

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Link your account</h1>
      <p style={styles.subtitle}>Enter your coding platform username</p>

      <input
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />

      <button
        onClick={() => next(username)}
        disabled={!username}
        style={styles.button(username)}
      >
        Next →
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#0f172a",
    color: "white",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: "40px" },
  subtitle: { marginBottom: "20px", color: "#94a3b8" },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    width: "250px",
    marginBottom: "20px",
  },
  button: (active: string) => ({
    padding: "14px 30px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "10px",
    color: "black",
    fontWeight: "600",
    opacity: active ? 1 : 0.4,
    cursor: active ? "pointer" : "not-allowed",
  }),
};

export default UsernamePage;