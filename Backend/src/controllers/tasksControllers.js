

import Task from "../models/Task.js";

export const getAllTasks = async(req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Lỗi khi getAllTasks");
    res.status(500).json({ error: 'Lỗi hệ thống' });
  }
}; 

export const createTask = async(req,res) =>{
  try {
    const {title} = req.body;
    const task = new Task({title});
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Lỗi khi Create Task", error.message);
    res.status(500).json({ error: 'Lỗi hệ thống' });
  }
};

export const updateTask = (req,res) =>{
  res.status(200).json({message:"Nhiệm vụ đã được update thành công"});
};

export const deleteTask = async(req,res) =>{
  res.status(200).json({message:"Nhiệm vụ đã được xóa thành công"});
};