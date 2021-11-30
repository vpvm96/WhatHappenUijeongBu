import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as ujbSnsController from '../controller/ujbSnsController.js';
import { isAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateSns = [
  body('text')
    .trim()
    .isLength({ min: 3 })
    .withMessage('text should be at least 3 characters'),
  validate,
];

router.get('/', isAuth, ujbSnsController.getSnss);
router.get('/:id', isAuth, ujbSnsController.getSns);

router.post('/', isAuth, validateSns, ujbSnsController.createSns);

router.put('/:id', isAuth, validateSns, ujbSnsController.updateSns);

router.delete('/:id', isAuth, ujbSnsController.deleteSns);

export default router;
