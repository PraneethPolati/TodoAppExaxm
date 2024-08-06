const ToDo = require('../models/ToDoModel');
//for get
exports.getTodos= async (req,res)=>{
    try{
        const todos= await ToDo.find();

        res.json(todos);
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        });
    }
};
//for post
exports.createTodo = async(req,res)=>{
    const {
        title,
        description,
        completed
    } = req.body;

    const todo = new ToDo(
        {
            title,
            description,
            completed
        }
    );

    try{
        const newToDo = await todo.save();
        res.status(200).json(
            newToDo
        )}
    catch(err){
        res.status(500).json({
        success:false,
        message:err.message
    });
    }
};