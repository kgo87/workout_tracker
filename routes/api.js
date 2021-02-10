const path = require("path");
const Workout = require("../models/workout.js");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        Workout.find()
            .then(results => {
                res.json(results);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    });

    app.post("/api/workouts", (req, res) => {
        console.log(req.body)
        Workout.create(req.body)
            .then(results => {
                res.json(results);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body)
        Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new:true, runValidators: true})
            .then(results => {
                res.json(results);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({}).limit(7)
            .then(results => {
                res.json(results);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    });
    
}