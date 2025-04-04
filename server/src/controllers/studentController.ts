import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getStudents = async (req: Request, res: Response) => {
    const students = await prisma.studentProfile.findMany({ include: { user: true } });
    res.json(students);
};

export const addPreference = async (req: Request, res: Response) => {
    const { studentId, university } = req.body;
    const student = await prisma.studentProfile.update({
        where: { id: studentId },
        data: {
            preferences: { push: university }
        }
    });
    res.json({ message: `Added preference ${university}`, student });
};

export const calculateScore = async (req: Request, res: Response) => {
    const { gpa, sat } = req.body;
    const score = (gpa * 0.6 + (sat / 1600) * 0.4).toFixed(2);
    res.json({ matchScore: score });
};