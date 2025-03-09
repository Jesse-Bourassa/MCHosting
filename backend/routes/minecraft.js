const express = require("express");
const router = express.Router();
const { Client } = require("ssh2");

// 🔹 Unraid Server Credentials
const UNRAID_HOST = "192.168.2.139";
const SSH_USERNAME = "root";
const SSH_PASSWORD = "Comp1214!"; // ❗Use SSH keys instead!

console.log("DEBUG: minecraft.js loaded OK");

try {
  console.log("DEBUG: Attempting to define router.post('/create') ...");

  router.post("/create", async (req, res) => {
    const { serverName, memory, maxPlayers, version } = req.body;

    if (!serverName || !memory || !maxPlayers || !version) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const conn = new Client();
    conn
      .on("ready", () => {
        console.log("✅ SSH Connected!");

        const command = `
  docker run -d --name ${serverName} \
    -e EULA=TRUE \
    -e MEMORY=${memory} \
    -e MAX_PLAYERS=${maxPlayers} \
    -e VERSION=${version} \
    -p 0:25565 \
    -v /mnt/user/appdata/${serverName}:/data \
    --restart unless-stopped \
    itzg/minecraft-server
`;

        conn.exec(command, (err, stream) => {
          if (err) {
            conn.end();
            return res.status(500).json({ error: "Failed to execute command." });
          }

          // OPTIONAL: track exit code
          let exitCode;

          stream
            .on("close", (code) => {
              exitCode = code;
              console.log(`✅ Docker command closed with code: ${code}`);
              conn.end();

              if (exitCode === 0) {
                // Success
                return res.json({ message: `Server ${serverName} created successfully!` });
              } else {
                // Command failed
                return res.status(500).json({ error: `Docker command exited with code ${exitCode}` });
              }
            })
            // Logs from Docker's stdout
            .on("data", (data) => {
              console.log("Docker stdout:", data.toString());
            })
            // Logs from Docker's stderr (often normal while pulling images)
            .stderr.on("data", (data) => {
              console.error("Docker stderr:", data.toString());
              // DO NOT respond to client here
            });
        });
      })
      .connect({
        host: UNRAID_HOST,
        port: 22,
        username: SSH_USERNAME,
        password: SSH_PASSWORD,
      });
  });

  console.log("DEBUG: /create route defined, about to export");
} catch (err) {
  console.error("ERROR in minecraft.js route definition:", err);
}

module.exports = router;
