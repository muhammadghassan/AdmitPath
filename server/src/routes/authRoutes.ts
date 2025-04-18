import express from 'express';
const router = express.Router();
import { login, register } from '../controllers/authController';

router.post('/login', login);
router.post('/register', register);

export default router;