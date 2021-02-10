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
},
{
    toJSON: {
      virtuals: true
    }
  }
);

function totalDuration(self) {
    var total = 0;
    for(var i = 0; i<self.length;i++) {
        total = total+self[i].duration;
    }
    return total
}

  workoutSchema.virtual("totalDuration").get(function () {
    return totalDuration(this.exercises)
  });
  

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

