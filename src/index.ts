import express from "express";
import path from "path";
//import { fileURLToPath } from "url";

const port = 3000;
const rickAndMortyApi = "https://rickandmortyapi.com/api";
const app = express();

app.get("/character", async (req, res) => {
  const { id } = req.query;
  if (!id) {
    const response = await fetch(`${rickAndMortyApi}/character/1,2,3`);
    const data = await response.json();
    return res.json(data);
  }
  // Fetch character data from the API
});

app.get("/character/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (![1, 2, 3].includes(Number(id))) {
      const response = await fetch(`${rickAndMortyApi}/character/1,2,3`);
      const data = await response.json();
      return res.json(data);
    }
    const response = await fetch(`${rickAndMortyApi}/character/${id}`);
    const data = await response.json();
    return res.json(data);
  } catch (error) {
    console.error("Error fetching characters:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
