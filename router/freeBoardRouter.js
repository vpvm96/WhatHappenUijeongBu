import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as freeBoardController from '../controller/freeBoardController.js';
import { isAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateFreeBoard = [
  body('content')
    .trim()
    .isLength({ min: 5 })
    .withMessage('text should be at least 5 characters'),
  validate,
];

router.get('/', freeBoardController.getFreeBoards);
router.get('/:id', isAuth, freeBoardController.getFreeBoard);

router.post('/create', isAuth, validateFreeBoard, freeBoardController.createFreeBoard);

router.put('/:id', isAuth, validateFreeBoard, freeBoardController.updateFreeBoard);

router.delete('/:id', isAuth, freeBoardController.deleteFreeBoard);

export default router;
