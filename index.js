import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", async(req, res)=>{
    const response = await axios.get("https://v2.jokeapi.dev/joke/Dark");
    const result = response.data;
    res.render("index.ejs", {content : result});
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
}); 