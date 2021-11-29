import express from 'express';
import {} from 'express-async-errors';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import * as userController from '../controller/userController.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

const validateCredential = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('username should be at least 5 characters'),
  body('password')
    .trim()
    .isLength({ min: 5 })
    .withMessage('password should be at least 5 characters'),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body('name').notEmpty().withMessage('name is missing'),
  body('email').isEmail().normalizeEmail().withMessage('invalid email'),
  // body('url')
  //   .isURL()
  //   .withMessage('invalid URL')
  //   .optional({ nullable: true, checkFalsy: true }),
  validate,
];

router.post('/signup', validateSignup, userController.signup);
router.post('/login', validateCredential, userController.login);
router.get('/me', isAuth, userController.me);

export default router;