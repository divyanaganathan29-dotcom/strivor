import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import ArenaSelection from "./pages/ArenaSelection";
import UsernamePage from "./pages/UsernamePage";
import AgePage from "./pages/AgePage";
import Dashboard from "./pages/Dashboard";
import RanksPage from "./pages/RanksPage";
import StatsPage from "./pages/StatsPage";
import GroupsPage from "./pages/GroupsPage";   // ✅ ADDED
// ❌ removed duplicate useNavigate import
import ProfilePage from "./pages/ProfilePage";

// (your ProfilePage stays exactly here — unchanged)

/* KEEP EVERYTHING SAME ABOVE */

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    arena: "",
    username: "",
    age: "",
    docId: "",
  });

  return (
    <Routes>
      {/* ARENA */}
      <Route
        path="/"
        element={
          <ArenaSelection
            next={(arena, docId) => {
              setUserData({ ...userData, arena, docId });
              navigate("/username");
            }}
          />
        }
      />

      {/* USERNAME */}
      <Route
        path="/username"
        element={
          <UsernamePage
            userData={userData}
            next={(username) => {
              setUserData({ ...userData, username });
              navigate("/age");
            }}
          />
        }
      />

      {/* AGE */}
      <Route
        path="/age"
        element={
          <AgePage
            userData={userData}
            next={(age) => {
              setUserData({ ...userData, age });
              navigate("/dashboard");
            }}
          />
        }
      />

      {/* DASHBOARD */}
      <Route
  path="/dashboard"
  element={
    <Dashboard
      userData={userData}
    />
  }
/>

      {/* RANKS */}
      <Route path="/ranks" element={<RanksPage userData={userData} />} />

      {/* STATS */}
      <Route path="/stats" element={<StatsPage userData={userData} />} />

      {/* ✅ ADDED GROUPS */}
      <Route path="/groups" element={<GroupsPage />} />

      {/* ✅ ADDED PROFILE */}
      <Route path="/profile" element={<ProfilePage userData={userData} />} />

    </Routes>
  );
}

export default AppWrapper;