import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../config';
import authService from './auth.service';

const login = async (req: Request, res: Response) => {
    const { tokenId } = req.body;
    try {
        const user = await authService.login(tokenId);
        const token = jwt.sign(user, config.secret);
        res.cookie('token', token, { httpOnly: true });
        res.status(201)
            .json(user);
    } catch (error) {
        res.status(500)
            .send(error);
    }
};

export default {
    login
};
