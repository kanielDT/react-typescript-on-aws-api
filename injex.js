import cors from "cors"
import express from "express"

const app = express()

app.use(express.json())
app.use(cors())


const dogs = [
    {
        name: "paco",
        breed: "chiuahwah",
        age: 32
    },
    {
        name: "bob",
        breed: "yorky",
        age: 31
    },
    {
        name: "juan",
        breed: "pitbull",
        age: 38
    },
    {
        name: "Sabo",
        breed: "husky",
        age: 36
    }

]

app.get("/", (req, res) => res.send("welcome to my API"))

app.listen(4000, () => console.log("API running on port 4000"))