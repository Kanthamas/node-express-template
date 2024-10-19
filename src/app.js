import express from "express";
import "dotenv/config";

const app = express();

const PORT = 3001 || process.env.PORT;

app.get("/", (req, res) => {
	res.send("Hello from SERVER!");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
