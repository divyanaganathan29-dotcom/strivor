import { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

type Props = {
  userData: any;
  next: (age: string) => void;
};

function AgePage({ userData, next }: Props) {
  const [age, setAge] = useState("");

  const saveAge = async () => {
    await updateDoc(doc(db, "users", userData.docId), {
      age: age,
    });

    console.log("Age updated!");
    next(age);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your age group</h1>

      {["Under 15", "15-17", "18-21", "22-25", "26+"].map((item) => (
        <div
          key={item}
          onClick={() => setAge(item)}
          style={{
            padding: "10px",
            margin: "10px",
            background: "#1e293b",
            cursor: "pointer",
          }}
        >
          {item}
        </div>
      ))}

      <button onClick={saveAge} disabled={!age}>
        Finish →
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
};

export default AgePage;