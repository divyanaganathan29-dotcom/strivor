import { useState } from "react";

import ArenaSelection from "./pages/ArenaSelection";
import UsernamePage from "./pages/UsernamePage";
import AgePage from "./pages/AgePage";
import Dashboard from "./pages/Dashboard";
import RanksPage from "./pages/RanksPage";
import GroupsPage from "./pages/GroupsPage";
import StatsPage from "./pages/StatsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [page, setPage] = useState("arena");

  const [userData, setUserData] = useState({
    arena: "",
    username: "",
    age: "",
  });

  return (
    <>
      {/* ARENA */}
      {page === "arena" && (
        <ArenaSelection
          next={(arena: string) => {
            setUserData({ ...userData, arena });
            setPage("username");
          }}
        />
      )}

      {/* USERNAME */}
      {page === "username" && (
        <UsernamePage
          next={(username: string) => {
            setUserData({ ...userData, username });
            setPage("age");
          }}
        />
      )}

      {/* AGE */}
      {page === "age" && (
        <AgePage
          next={(age: string) => {
            setUserData({ ...userData, age });
            setPage("dashboard");
          }}
        />
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && (
        <Dashboard
          userData={userData}
          goToRanks={() => setPage("ranks")}
          goToGroups={() => setPage("groups")}
          goToStats={() => setPage("stats")}
          goToProfile={() => setPage("profile")}
        />
      )}

      {/* RANKS */}
      {page === "ranks" && (
        <RanksPage 
        userData={userData}
        goBack={() => setPage("dashboard")} />
      )}

      {/* GROUPS */}
      {page === "groups" && (
        <GroupsPage 
        userData={userData}
        goBack={() => setPage("dashboard")} />
      )}

      {/* STATS */}
      {page === "stats" && (
        <StatsPage
          userData={userData}
          goBack={() => setPage("dashboard")}
        />
      )}

      {/* PROFILE */}
      {page === "profile" && (
        <ProfilePage
          userData={userData}
          goBack={() => setPage("dashboard")}
        />
      )}
    </>
  );
}

export default App;