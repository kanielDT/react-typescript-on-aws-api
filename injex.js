import cors from "cors"
import express from "express"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => res.send("welcome to my API"))

app.listen(4000, () => console.log("API running on port 4000"))