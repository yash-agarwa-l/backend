import express from 'express';
import * as userController from '../src/controllers/todo.controller.js'; // Import all exports

const router = express.Router();

router.get('/todos', userController.getAllTodos);
router.post('/todos', userController.createTodo);
router.put('/todos/:id', userController.updateTodo);
router.delete('/todos/:id', userController.deleteTodo);

export default router;

