const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date
    },

    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: {
                type: Number,
                required: false},
            reps: {
                type: Number,
                required: false},
            sets: {
                type: Number,
                required: false},
            distance: {
                type: Number,
                required: false}
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;