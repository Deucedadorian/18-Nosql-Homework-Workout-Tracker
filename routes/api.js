const router = require("express").Router();
const Workout = require("../models/workout.js");

router.put("/api/workouts/:id", (req, res) => {
    Workout.updateOne({ _id: req.params.id }, {type: req.body.exercises.type})
    .then((dbWorkout) => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
      });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
      });
});

module.exports = router;