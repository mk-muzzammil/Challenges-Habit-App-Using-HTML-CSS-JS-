const express  = require ("express");
require("./db/connection");

const path  = require ("path")
const routes  = require ("./routes/routes");
const app = express();

const staticPath = path.join(__dirname,"/public");
const port = 8000;


// middleware

app.use(express.static(staticPath))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//setting view engine
app.set("view engine", "ejs")


//routes

app.use(routes)



app.listen(port)