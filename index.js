const express = require("express");
const app = express();
const path = require("path");

const tilesDirectory = path.join(__dirname, "Tiles");

app.use(
  "/Tiles",
  express.static(tilesDirectory, {
    maxAge: "1d", // Optional: Cache the tiles for 1 day for better performance
  })
);

app.get("/:z/:y/:x.png", (req, res) => {
  const { x, y, z } = req.params;
  const tilePath = path.join(tilesDirectory, z, y, `${x}.png`);
  res.sendFile(tilePath);
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
