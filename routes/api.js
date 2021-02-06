const path = require("path");
const Workout = require("../models/workout.js");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        Workout.find()
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });
 
    
}