import { Request, Response } from 'express';
import { AppDataSource } from '../../AppDataSource';
import { handleCatch, requestDataValidation, sendError, sendSuccess } from '../../utils/responseHanlder';
import bcrypt from 'bcrypt';
import { Users } from '../../entites/Users';
import { JwtAuthenticate } from '../../utils/JwtAuthenticate';


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req?.body;
        const lowerCaseEmail = email.toLowerCase();
        const userRepository = AppDataSource.getRepository(Users);
        const user = await userRepository.findOne({ where: { email: lowerCaseEmail, password: password } });
        if (!user) {
            return sendError(res, "Not Found.Please check credentials");
        }
        const jwtToken = JwtAuthenticate.generateJwtToken(user);

        return sendSuccess(res, "Success", { token: jwtToken, detail: user });
    } catch (e) {
        return handleCatch(res, e);
    }
};



export const signUp = async (req: Request, res: Response) => {
    const { username, email, password, mobile } = req.body;
    if (!email || email?.trim() === "" || email?.length <= 0 || !password || password?.trim() === "" || password?.length <= 0) {
        return sendError(res, "Email and Password are required");
    }
    try {
        const lowerCaseEmail = email.toLowerCase();
        const user = new Users();
        user.email = lowerCaseEmail;
        user.password = password;
        user.added_on = new Date();
        await requestDataValidation(user);

        const userRepository = AppDataSource.getRepository(Users);
        const existingUser: any = await userRepository.findOne({ where: { email: lowerCaseEmail } });
        let saveNewUser = true;
        if (existingUser) {
            return sendError(res, "This email has been already used");
            saveNewUser = false;
        }

        let userData = existingUser;
        if (saveNewUser == true) {
            userData = await userRepository.save(user);

            if (!userData) {
                return sendError(res, "Unable to Signup");
            }

        } else {
            return sendError(res, "Unable to Signup");
        }

        const jwtToken = JwtAuthenticate.generateJwtToken(userData);

        return sendSuccess(res, "Signed up successfully.", { token: jwtToken, detail: userData }, 201);

    } catch (e) {
        return handleCatch(res, e);
    }
};



export const logout = async (req: Request, res: Response) => {
    const userId = req?.userId;
    const userToken = req?.userToken;
    try {
        if (!userId) {
            return sendError(res, "Please Provide User Id");
        }

        return sendSuccess(res, "Success", {});

    } catch (e) {
        return handleCatch(res, e);
    }
};


export const updatePassword = async (req: Request, res: Response) => {
    try {
        const userId = req?.userId;
        if (!userId) {
            return sendError(res, "Please Provide User Id");
        }

        const { newPassword } = req?.body;

        const userRepository = AppDataSource.getRepository(Users);
        const user = await userRepository.findOne({ where: { id: userId } });
        if (user) {
            user.password = newPassword;
            await userRepository.update(user.id, user);

            return sendSuccess(res, "Success", {});
        } else {
            return sendError(res, "User Not Exists");
        }

    } catch (e) {
        return handleCatch(res, e);
    }
};




