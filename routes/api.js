const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    Workout.find()
      // .sort({ date: -1 })
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });





router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});




router.put("/api/workouts/:id", ({ body, params }, res) => {
Workout.findByIdAndUpdate(
params.id, {$push:{exercises:body}},
{new: true, runValidators: true}
)
.then(dbWorkouts=>{
  res.json(dbWorkouts);
})
.catch(err => {

  res.json(err);
} );


});




  



//   router.get("/api/workouts/range", (req, res) => {
//     // router.get("/:year/:month/:day/:author")
//     // router.get("*" function (req, res) {const city = req.query.city})
//   Workout.find({})

//     .then(dbWorkouts => {
//       res.json(dbWorkouts);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
