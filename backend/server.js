const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/data", (req, res) => {
  res.json({ message: "¡Hola desde el backend!" });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
