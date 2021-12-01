import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as issueBoardController from '../controller/issueBoardController.js';
import { isAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateIssueBoard = [
  body('content')
    .trim()
    .isLength({ min: 5 })
    .withMessage('text should be at least 5 characters'),
  validate,
];

router.get('/', isAuth, issueBoardController.getIssueBoards);
router.get('/:id', isAuth, issueBoardController.getIssueBoard);

router.post('/create', isAuth, validateIssueBoard, issueBoardController.createIssueBoard);

router.put('/:id', isAuth, validateIssueBoard, issueBoardController.updateIssueBoard);

router.delete('/:id', isAuth, issueBoardController.deleteIssueBoard);

export default router;
