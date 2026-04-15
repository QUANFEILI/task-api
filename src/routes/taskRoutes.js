import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask } from '../middleware/validateTask.js';

const router = express.Router();

const validateTaskQuery = validateTask.slice(2);
router.get('/', validateTaskQuery, taskController.getTasks);
router.post('/', validateTask, taskController.createTask);

export default router;
