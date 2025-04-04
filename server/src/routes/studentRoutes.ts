import express from 'express';
import { getStudents, addPreference, calculateScore } from '../controllers/studentController';

const router = express.Router();
router.get('/', getStudents);
router.post('/preference', addPreference);
router.post('/calculate', calculateScore);

export default router;