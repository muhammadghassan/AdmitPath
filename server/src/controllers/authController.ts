import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const register = async (req: Request, res: Response) => {
    const { email, password, role, name, gpa, sat } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                role,
                student: role === 'STUDENT' ? {
                    create: {
                        name,
                        gpa: parseFloat(gpa),
                        sat: parseInt(sat),
                        preferences: []
                    }
                } : undefined
            }
        });

        return res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
        return res.status(400).json({ message: 'Error creating user', error: err });
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '2h' });
    res.json({ token });
};