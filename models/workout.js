const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },
    exercises: [{
        name:
        {
          type: String,
          trim: true,
          required: "Enter your exercise"
        },
        type:
        {
          type: String,
          trim: true,
          required: "Enter the type of your exercise"
        },
        weight:
        {
          type: Number
        },
        sets:
        {
          type: Number
        },
        reps:
        {
          type: Number
        },
        duration:
        {
          type: Number,
          required: "Enter the the duration"
        },
        distance:
        {
          type: Number
        }
    }],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

