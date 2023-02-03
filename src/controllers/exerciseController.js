const bodyParser = require("body-parser");
const exerciseService = require("../services/exerciseService")

const getAllExercises = (req, res)=>{
    const allExercises = exerciseService.getAllExercises()
    res.send({ status: "todo en orden", data: allExercises });
}

const getOneExercise = (req, res)=>{
    const {
        params: { exersiceId },
    } = req;
    if(!exersiceId){
        return ;
    }
    const exercise = exerciseService.getOneExercise(exersiceId)
    res.send({ status: "OK", data: exercise });
}

const createNewExercise = (req, res)=>{
    const { body } = req;
    if(
        !body.name 
    ){
        return;
    }
    const newExercise = {
        name: body.name,  
    }

    const createdExercise = exerciseService.createNewExercise(newExercise)
    res.status(201).send({ status: "ok", data: createdExercise });
}

const updateOneExercise = (req, res)=>{
    const {
        body,
        params: {exersiceId}
    } = req;
    if(!exersiceId){
        return;
    }
    const updatedExercise = exerciseService.updateOneExercise(exersiceId, body)
    res.send({ status: "OK", data: updatedExercise });
    
}

const deleteOneExcercise = (req, res)=>{
    const {
        params: { exersiceId },
      } = req;
      if (!exersiceId) {
        return;
      }
      exerciseService.deleteOneExcercise(exersiceId);
      res.status(204).send({ status: "se borro" });
}

module.exports= {
    getAllExercises,
    getOneExercise,
    createNewExercise,
    updateOneExercise,
    deleteOneExcercise
}; 