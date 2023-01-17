const DB = require("./db.json");
const { saveToDatabase } = require("./utils")

const getAllExcercises = () => {
  return DB.excercises;
};

const getOneExcercise = (exerciseId) => {
    const excercise = DB.excercises.find((excercise) => excercise.id === exerciseId);
    if(!excercise){
        return;
    }
    return excercise
}

const createNewExcercise = (newExcercise) => {
    const isAlredyadded = 
        DB.excercises.findIndex((exercise) => exercise.name === newExcercise.name) > -1;
    if(isAlredyadded == true){
        const error = "ya existe ejercicio"
        return error;
    }
    DB.excercises.push(newExcercise);
    saveToDatabase(DB)
    
    return newExcercise;
};

module.exports = { 
    getAllExcercises,
    createNewExcercise,
    getOneExcercise
};

