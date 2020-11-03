const router = require("express").Router();
//const db = require("../models");
const Workout = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


//   router.post("/api/transaction/bulk", ({ body }, res) => {
//     Transaction.insertMany(body)
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  
  router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  

  router.get("/api/workouts/:id", (req, res) => {
    Workout.findById(req.params.id)
      .sort({ date: -1 })
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



module.exports = router;
  