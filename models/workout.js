const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: "String",
        trim: true,
        required: "enter an exercise type",
      },

      name: {
        type: "String",
        trim: true,
        required: "enter an exercise name",
      },

      duration: {
        type: Number,
        required: "enter an exercise duration time",
      },

      weight: { type: Number },
      reps: { type: Number },
      sets: {type: Number },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
