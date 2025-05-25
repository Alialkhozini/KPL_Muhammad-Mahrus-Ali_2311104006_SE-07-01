const express = require("express");
const app = express();
const mahasiswaRoutes = require("./routes/mahasiswa");

app.use(express.json());
app.use("/api/mahasiswa", mahasiswaRoutes);

// Tambahkan ini agar / tidak error
app.get("/", (req, res) => {
  res.send("Selamat datang di API Mahasiswa!");
});

const PORT = 9050;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
