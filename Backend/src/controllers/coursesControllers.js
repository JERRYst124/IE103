

import Course from "../models/Course.js";

export const getAllCourses = async(req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error("Lỗi khi getAllCourses");
    res.status(500).json({ error: 'Lỗi hệ thống' });
  }
}; 

export const createCourse = async(req,res) =>{
  try {
    const {title} = req.body;
    const course = new Course({title});
    const newCourse = await course.save();
    res.status(201).json(newCourse);
  } catch (error) {
    console.error("Lỗi khi Create Course", error.message);
    res.status(500).json({ error: 'Lỗi hệ thống' });
  }
};

export const updateCourse = (req,res) =>{
  res.status(200).json({message:"Nhiệm vụ đã được update thành công"});
};

export const deleteCourse = async(req,res) =>{
  res.status(200).json({message:"Nhiệm vụ đã được xóa thành công"});
};