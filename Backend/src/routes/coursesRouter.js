import express from "express"
import { createCourse, deleteCourse, getAllCourses, getCourses, updateCourse } from "../controllers/coursesControllers.js";

const router = express.Router();
router.search('/',getCourses);
router.get('/',getAllCourses);

router.post('/', createCourse);

router.put('/:id', updateCourse);

router.delete('/:id', deleteCourse);

export default router;