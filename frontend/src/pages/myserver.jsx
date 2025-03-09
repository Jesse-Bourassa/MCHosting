import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Button, Grid, CircularProgress } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export default function MyServers() {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch server data from Unraid API
  useEffect(() => {
    fetch("http://localhost:3000/api/servers") // ✅ Call your backend instead of Unraid directly
      .then((res) => res.json())
      .then((data) => {
        setServers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching servers:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#121212", color: "white", p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        My Servers
      </Typography>

      {loading ? (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <CircularProgress sx={{ color: "#FDD835" }} />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {servers.length > 0 ? (
            servers.map((server) => (
              <Grid item xs={12} sm={6} md={4} key={server.id}>
                <Card sx={{ bgcolor: "#1e1e1e", color: "white", p: 2 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {server.name}
                    </Typography>
                    <Typography variant="body1">Status: {server.status}</Typography>
                    <Typography variant="body1">CPU: {server.cpu}%</Typography>
                    <Typography variant="body1">RAM: {server.memory} GB</Typography>
                    <Button
                      variant="contained"
                      sx={{ mt: 2, bgcolor: server.status === "Running" ? "red" : "green" }}
                      onClick={() => handleServerAction(server.id, server.status === "Running" ? "stop" : "start")}
                    >
                      {server.status === "Running" ? "Stop Server" : "Start Server"}
                      <PowerSettingsNewIcon sx={{ ml: 1 }} />
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" textAlign="center" sx={{ mt: 4 }}>
              No servers found.
            </Typography>
          )}
        </Grid>
      )}
    </Box>
  );
}

// Function to start/stop a server
const handleServerAction = (serverId, action) => {
  fetch(`http://YOUR_UNRAID_IP:PORT/api/server/${serverId}/${action}`, { method: "POST" })
    .then((res) => res.json())
    .then((data) => {
      alert(`Server ${action}ed successfully!`);
      window.location.reload(); // Refresh the page to get updated server status
    })
    .catch((error) => console.error(`Error performing ${action} on server:`, error));
};
