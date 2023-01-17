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

const updateOneExcercise = () => {
    return ; 
};

const deleteOneExcercise = () => {
    return ; 
};

module.exports = {
    getAllExercises,
    getOneExercise,
    createNewExercise,
    updateOneExcercise,
    deleteOneExcercise,
};