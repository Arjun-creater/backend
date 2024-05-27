import { Request, Response, NextFunction } from "express";
import { AppDataSource } from '../AppDataSource';
import { Users } from "../entites/Users";
import { sendError } from "../utils/responseHanlder";
import { JwtAuthenticate } from "../utils/JwtAuthenticate";

declare global {
    namespace Express {
        interface Request {
            userId?: any,
            userToken?: any,
        }
    }
}

export const userAuth = async (req: Request, res: Response, next: NextFunction) => {

    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader || typeof authorizationHeader !== 'string') {
        return res.status(401).json({ message: "Access denied. Token is required." });
    }

    const tokenParts = authorizationHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(401).json({ message: "Invalid authorization header format." });
    }

    const token: string = tokenParts[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied. Token is required." });
    }

    try {
        const decodedToken = JwtAuthenticate.validateJwtToken(token);
        if (decodedToken) {
            (req as any).userId = decodedToken.id;
        } else {
            return res.status(403).json({ message: "Invalid token." });
        }

        (req as any).userToken = token;

        const userRepository = AppDataSource.getRepository(Users);
        const user = await userRepository.findOne({ where: { id: decodedToken.userId } });
        if (!user) {
            return sendError(res, "Invalid User");
        }

        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid token." });
    }
};
