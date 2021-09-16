import { Request, Response } from 'express';
import authService from './auth.service';

const login = async (req: Request, res: Response) => {
    const { tokenId } = req.body;
    console.log(req.session.userId);
    try {
        const user = await authService.login(tokenId);
        req.session.userId = user.id;

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
