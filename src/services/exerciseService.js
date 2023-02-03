const { v4: uuid } = require("uuid");
const Exercise = require("../database/Exercise");

const getAllExercises = () => {
    const allExercises = Exercise.getAllExercises();
    return allExercises; 
};

const getOneExercise = (exerciseId) => {
    const exercise = Exercise.getOneExercise(exerciseId)
    return exercise; 
};

const createNewExercise = (newExercise) => {
    const exerciseToInsert = {
        id: uuid(),
        ...newExercise,
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    const createdExercise = Exercise.createNewExercise(exerciseToInsert);
    return createdExercise; 
};

const updateOneExercise = (excersiceId, changes) => {
    const updatedExercise = Exercise.updateOneExercise(excersiceId, changes);
    return updatedExercise; 
};

const deleteOneExcercise = (excersiceId) => {
    Exercise.deleteOneExcercise(excersiceId) 
};

module.exports = {
    getAllExercises,
    getOneExercise,
    createNewExercise,
    updateOneExercise,
    deleteOneExcercise,
};