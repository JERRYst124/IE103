
export const getAllTasks = (req, res) => {
  try {
    res.send("tôi bị ngu");
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server' });
  }
}; 

export const createTask = (req,res) =>{
  res.status(201).json({message:"Nhiệm vụ đã được thêm thành công"});
};

export const updateTask = (req,res) =>{
  res.status(200).json({message:"Nhiệm vụ đã được update thành công"});
};

export const deleteTask = async(req,res) =>{
  res.status(200).json({message:"Nhiệm vụ đã được xóa thành công"});
};