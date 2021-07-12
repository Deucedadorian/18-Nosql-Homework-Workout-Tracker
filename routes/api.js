const router = require("express").Router();
const Workout = require("../models/workout.js");

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    Workout.updateOne({ "_id": req.params.id }, {"$push": {exercises: req.body}})
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

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find(
        {
            day: 
            {
                $gte: new Date((new Date().getTime() - (7 * 24 * 60 * 60 * 1000)))
            }
        }
        ).sort({ "date": -1 }
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

module.exports = router;