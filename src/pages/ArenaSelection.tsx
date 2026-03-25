import { useState } from "react";

type Props = {
  next: (arena: string) => void;
};

function ArenaSelection({ next }: Props) {
  const [selected, setSelected] = useState("");

  const arenas = ["LeetCode", "Codeforces", "HackerRank", "CodeChef"];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Choose your arena</h1>
      <p style={styles.subtitle}>Where do you crush code?</p>

      <div style={styles.grid}>
        {arenas.map((arena) => (
          <div
            key={arena}
            onClick={() => setSelected(arena)}
            style={{
              ...styles.card,
              border:
                selected === arena
                  ? "2px solid #38bdf8"
                  : "2px solid transparent",
            }}
          >
            {arena}
          </div>
        ))}
      </div>

      <button
        onClick={() => next(selected)}
        disabled={!selected}
        style={{
          padding: "14px 30px",
          background: "#38bdf8",
          border: "none",
          borderRadius: "10px",
          color: "black",
          fontSize: "16px",
          fontWeight: "600",
          marginTop: "20px",
          opacity: selected ? 1 : 0.4,
          cursor: selected ? "pointer" : "not-allowed",
          transition: "0.2s",
        }}
        onMouseEnter={(e) => {
          if (selected) e.currentTarget.style.background = "#0ea5e9";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#38bdf8";
        }}
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
  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },
  subtitle: {
    marginBottom: "30px",
    color: "#94a3b8",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 180px)",
    gap: "25px",
  },
  card: {
    padding: "25px",
    background: "#1e293b",
    borderRadius: "12px",
    cursor: "pointer",
    textAlign: "center" as const,
    fontSize: "18px",
  },
};

export default ArenaSelection;