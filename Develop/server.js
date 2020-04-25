const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const db = require("./models");

const PORT =  process.env.PORT || 8080;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

//index route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public","index.html"));
});

// exercise route
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public","exercise.html"));
})

app.post("/api/workouts", (req, res) => {
    db.Workout.create({ day:new Date(), exercises: [] })
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json({error: "Workout could not be created"});
    });
});

app.put("/api/workouts/:id", (req, res) => {
    const {id: _id} = req.params;
    db.Workout.updateOne({ _id}, {$push:{exercises: req.body}})
})


app.listen(PORT, () => {
    console.log(`app running on port ${PORT}!`);
});
