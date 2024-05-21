
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("./db.js");
const { userRouter } = require("./routes/users.route.js");
const { router } = require("./routes/bucket.router.js")
const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());
app.use("/users", userRouter);
app.use("/users", router)
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("home")
})
app.listen(PORT || 300, async () => {
    console.log(`Server is live at port: ${PORT}`)
    try {
        await connection
        console.log("Connected to mongoDB")
    } catch (error) {
        console.log(`Connection error failed to connect with mongo DB:------->>> ${error}`)
    }

})
