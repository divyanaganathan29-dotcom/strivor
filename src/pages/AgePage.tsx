import { useState } from "react";

type Props = {
  next: (age: string) => void;
};

function AgePage({ next }: Props) {
  const [selected, setSelected] = useState("");

  const ages = ["Under 15", "15-17", "18-21", "22-25", "26+"];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your age group</h1>
      <p style={styles.subtitle}>Compete with peers your age</p>

      <div style={styles.list}>
        {ages.map((age) => (
          <div
            key={age}
            onClick={() => setSelected(age)}
            style={{
              ...styles.card,
              border: selected === age ? "2px solid #38bdf8" : "none",
            }}
          >
            {age}
          </div>
        ))}
      </div>

      <button
        onClick={() => next(selected)}
        disabled={!selected}
        style={styles.button(selected)}
      >
        Let’s Go ⚡
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
  list: { display: "flex", flexDirection: "column" as const, gap: "15px" },
  card: {
    padding: "15px",
    background: "#1e293b",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center" as const,
    cursor: "pointer",
  },
  button: (active: string) => ({
    padding: "14px 30px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "10px",
    color: "black",
    fontWeight: "600",
    marginTop: "20px",
    opacity: active ? 1 : 0.4,
    cursor: active ? "pointer" : "not-allowed",
  }),
};

export default AgePage;