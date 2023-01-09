const express = require("express");
const excerciseController = require("../../controllers/exerciseController")

const router = express.Router();

router.get("/", excerciseController.getAllExcercises);

router.get("/:excersiceId", excerciseController.getOneExcercise);

router.post("/", excerciseController.createNewExcercise);

router.patch("/:excersiceId", excerciseController.updateOneExcercise);

router.delete("/:excersiceId", excerciseController.deleteOneExcercise);

module.exports = router;
