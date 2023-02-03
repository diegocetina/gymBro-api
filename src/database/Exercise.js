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

const updateOneExercise = (exerciseId, changes) =>{
    const indexForUpdate = DB.exercises.findIndex(
        (exercise)=> exercise.id === exerciseId
    );
    if(indexForUpdate === -1){
        return;
    }
    const updatedExercise = {
        ...DB.exercises[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    }
    DB.exercises[indexForUpdate] = updatedExercise;
    saveToDatabase(DB);
    return updatedExercise
}

const deleteOneExcercise = (exerciseId) => {
    const indexForDeletion = DB.exercises.findIndex(
        (exercise)=> exercise.id === exerciseId
    );
    if(indexForDeletion === -1){
        return;
    }
    DB.exercises.splice(indexForDeletion, 1);
    saveToDatabase(DB)
}


module.exports = { 
    getAllExercises,
    getOneExercise,
    createNewExercise,
    updateOneExercise,
    deleteOneExcercise
};

