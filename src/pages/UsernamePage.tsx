import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

type Props = {
  userData: {
    arena: string;
    docId: string;
  };
  next: (username: string) => void;
};

function UsernamePage({ userData, next }: Props) {
  const [username, setUsername] = useState("");

  const saveUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        arena: userData.arena,
        username: username,
        createdAt: new Date(),
      });

      console.log("Saved with ID:", docRef.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Enter Username</h1>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        style={styles.input}
      />

      <button
        onClick={async () => {
          await saveUser();
          next(username);
        }}
        style={styles.button}
      >
        Next →
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    background: "#020617",
    color: "white",
  },
  title: { fontSize: "32px" },
  input: {
    padding: "10px",
    margin: "20px",
    borderRadius: "8px",
  },
  button: {
    padding: "12px 20px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "8px",
  },
};

export default UsernamePage;