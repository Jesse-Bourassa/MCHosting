import React, { useState } from "react";

export default function Dashboard() {
  const [serverName, setServerName] = useState("");
  const [memory, setMemory] = useState("2G");
  const [maxPlayers, setMaxPlayers] = useState(10);
  const [version, setVersion] = useState("latest");

  const handleCreateServer = async () => {
    const response = await fetch("http://localhost:3001/minecraft/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ serverName, memory, maxPlayers, version }),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div>
      <h2>Create Minecraft Server</h2>
      <input type="text" placeholder="Server Name" onChange={(e) => setServerName(e.target.value)} />
      <input type="text" placeholder="Memory (e.g., 2G)" onChange={(e) => setMemory(e.target.value)} />
      <input type="number" placeholder="Max Players" onChange={(e) => setMaxPlayers(e.target.value)} />
      <input type="text" placeholder="Version (e.g., latest)" onChange={(e) => setVersion(e.target.value)} />
      <button onClick={handleCreateServer}>Create Server</button>
    </div>
  );
}
