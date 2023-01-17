const DB = require("./db.json");
const { saveToDatabase } = require("./utils")

const getAllExercises = () => {
  return DB.exercises;
};

const getOneExercise = (exerciseId) => {
    const exercise = DB.exercises.find((exercise) => exercise.id === exerciseId);
    if(!exercise){
        return;
    }
    return exercise
}

const createNewExercise = (newExercise) => {
    const isAlredyadded = 
        DB.exercises.findIndex((exercise) => exercise.name === newExercise.name) > -1;
    if(isAlredyadded == true){
        const error = "ya existe ejercicio"
        return error;
    }
    DB.exercises.push(newExercise);
    saveToDatabase(DB)
    
    return newExercise;
};

module.exports = { 
    getAllExercises,
    getOneExercise,
    createNewExercise
    
};

