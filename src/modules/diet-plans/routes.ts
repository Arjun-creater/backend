import { Router } from "express";
import { userAuth } from "../../middlewares/userAuth";
import { dietPlanInfo } from "./dietPlans.controller";

const router = Router();


router.post("/plan", userAuth, dietPlanInfo);


export default router