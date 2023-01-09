const excerciseService = require("../services/exerciseService")

const getAllExcercises = (req, res)=>{
    const allExcercises = excerciseService.getAllExcercises()
    res.send("get all excercises");
}

const getOneExcercise = (req, res)=>{
    const excercise = excerciseService.getOneExcercise()
    res.send("get one excercise");
}

const createNewExcercise = (req, res)=>{
    const createdExcercise = excerciseService.createNewExcercise()
    res.send("create new excercise");
}

const updateOneExcercise = (req, res)=>{
    const updatedExcercise = excerciseService.updateOneExcercise()
    res.send("update an existing excercise");
}

const deleteOneExcercise = (req, res)=>{
    const deletedExcercise = excerciseService.deleteOneExcercise()
    res.send("delete an existing exercise");
}

module.exports= {
    getAllExcercises,
    getOneExcercise,
    createNewExcercise,
    updateOneExcercise,
    deleteOneExcercise,
}; 