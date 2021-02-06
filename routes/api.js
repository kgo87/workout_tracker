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

    app.post("/api/workouts", (req, res) => {
        Workout.create(req.body)
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body)
        Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new:true, runValidators: true})
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });
 
    
}