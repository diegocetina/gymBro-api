const bodyParser = require("body-parser");
const excerciseService = require("../services/exerciseService")

const getAllExcercises = (req, res)=>{
    const allExcercises = excerciseService.getAllExcercises()
    res.send({ status: "todo en orden", data: allExcercises });
}

const getOneExcercise = (req, res)=>{
    const {
        params: { excersiceId },
    } = req;
    if(!excersiceId){
        return ;
    }
    
    const excercise = excerciseService.getOneExcercise(excersiceId)
    res.send({ status: "OK", data: excercise });
}

const createNewExcercise = (req, res)=>{
    const { body } = req;
    if(
        !body.name 
    ){
        return;
    }
    const newExcercise = {
        name: body.name,  
    }

    const createdExcercise = excerciseService.createNewExcercise(newExcercise)
    res.status(201).send({ status: "ok", data: createdExcercise });
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