const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Workout = new Schema({
    date: {
        type: Date,
        default: Date.now
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
          type: Number,
          trim: true,
        },
        sets:
        {
          type: Number,
          trim: true,
        },
        reps:
        {
          type: Number,
          trim: true,
        },
        duration:
        {
          type: Number,
          trim: true,
          required: "Enter the weight"
        },
        distance:
        {
          type: Number,
          trim: true,
          required: "Enter the weight"
        }
    }],
});

const Workout = mongoose.model("Workout", transactionSchema);

module.exports = Workout;

