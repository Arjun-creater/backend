import { Router } from "express";
import { login, signUp, logout, updatePassword } from "./userAuth.controller";
import { userAuth } from "../../middlewares/userAuth";


const router = Router();

router.post("/login", login);
router.post("/sign-up", signUp);
router.put("/update-password", userAuth, updatePassword);
router.post("/logout", userAuth, logout);


export default router