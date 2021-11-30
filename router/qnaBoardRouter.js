import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as qnaBoardController from '../controller/qnaBoardController.js';
import { isAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateQnaBoard = [
  body('content')
    .trim()
    .isLength({ min: 5 })
    .withMessage('text should be at least 5 characters'),
  validate,
];

router.get('/', isAuth, qnaBoardController.getQnaBoards);
router.get('/:id', isAuth, qnaBoardController.getQnaBoard);

router.post('/create', isAuth, validateQnaBoard, qnaBoardController.createQnaBoard);

router.put('/:id', isAuth, validateQnaBoard, qnaBoardController.updateQnaBoard);

router.delete('/:id', isAuth, qnaBoardController.deleteQnaBoard);

export default router;
