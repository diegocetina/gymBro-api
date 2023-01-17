const express = require("express");
const exerciseController = require("../../controllers/exerciseController")

const router = express.Router();

router.get("/", exerciseController.getAllExercises);

router.get("/:exersiceId", exerciseController.getOneExercise);

router.post("/", exerciseController.createNewExercise);

router.patch("/:excersiceId", exerciseController.updateOneExcercise);

router.delete("/:excersiceId", exerciseController.deleteOneExcercise);

module.exports = router;
