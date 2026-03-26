import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

type Props = {
  next: (arena: string, docId: string) => void;
};

function ArenaSelection({ next }: Props) {
  const [arena, setArena] = useState("");

  const saveArena = async () => {
    const docRef = await addDoc(collection(db, "users"), {
      arena: arena,
      createdAt: new Date(),
    });

    console.log("Doc created:", docRef.id);

    next(arena, docRef.id); // 🔥 PASS DOC ID
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Choose your platform</h1>

      <div style={styles.list}>
        {["LeetCode", "Codeforces", "CodeChef", "HackerRank"].map((item) => (
          <div
            key={item}
            onClick={() => setArena(item)}
            style={{
              ...styles.card,
              border: arena === item ? "2px solid #38bdf8" : "none",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <button
        onClick={saveArena}
        disabled={!arena}
        style={styles.button(arena)}
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
  title: { fontSize: "40px", marginBottom: "20px" },
  list: { display: "flex", flexDirection: "column" as const, gap: "15px" },
  card: {
    padding: "15px",
    background: "#1e293b",
    borderRadius: "10px",
    cursor: "pointer",
    textAlign: "center" as const,
    width: "200px",
  },
  button: (active: string) => ({
    padding: "14px 30px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "10px",
    color: "black",
    opacity: active ? 1 : 0.4,
  }),
};

export default ArenaSelection;