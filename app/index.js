import app from "./src/app"

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`));