const { v4: uuid } = require("uuid");
const Excercise = require("../database/Excercise");

const getAllExcercises = () => {
    const allExcercises = Excercise.getAllExcercises();
    return allExcercises; 
};

const getOneExcercise = (excerciseId) => {
    const excercise = Excercise.getOneExcercise(excerciseId)
    return excercise; 
};

const createNewExcercise = (newExcercise) => {
    const excerciseToInsert = {
        id: uuid(),
        ...newExcercise,
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    const createdExcercise = Excercise.createNewExcercise(excerciseToInsert);
    return createdExcercise; 
};

const updateOneExcercise = () => {
    return ; 
};

const deleteOneExcercise = () => {
    return ; 
};

module.exports = {
    getAllExcercises,
    getOneExcercise,
    createNewExcercise,
    updateOneExcercise,
    deleteOneExcercise,
};