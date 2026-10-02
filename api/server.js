const express = require("express");
const cors = require("cors");

require("dotenv").config();

const menuRoutes = require("./routes/menuRouters");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Root
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API Restoran berhasil berjalan"
    });
});


// Routes
app.use("/api/menu", menuRoutes);


// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});