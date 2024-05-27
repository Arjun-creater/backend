import { Request, Response } from 'express';
import { AppDataSource } from '../../AppDataSource';
import { handleCatch, sendError, sendSuccess } from '../../utils/responseHanlder';
import { DietPlans } from '../../entites/DietPlans';




export const dietPlanInfo = async (req: Request, res: Response) => {
    try {
        let { height, weight } = req.body;
        if (!height || height?.length <= 0 || !weight || weight?.length <= 0) {
            return sendError(res, "Height and Weight are required");
        }

        if (isNaN(Number(height))) {
            return sendError(res, "Height should be numeric and in metres");
        } else {
            height = Number(height); // in metres
        }

        if (isNaN(Number(weight))) {
            return sendError(res, "Weight should be numeric and in kilograms");
        } else {
            weight = Number(weight);
        }

        const userId = req?.userId;
        if (!userId) {
            return sendError(res, "Please Provide User Id");
        }

        let bmi = 0;
        let total_height = (height * height);
        bmi = weight / total_height;


        let code = null;
        if (bmi >= 18 && bmi <= 25) {
            code = "MODERATE";
        } else if (bmi > 25) {
            code = "OVERWEIGHT";
        } else if (bmi < 18) {
            code = "UNDERWEIGHT";
        }

        const dietPlansRepo = AppDataSource.getRepository(DietPlans);
        const dietPlans = await dietPlansRepo
            .createQueryBuilder('plan')
            .select(['plan.id AS id', 'plan.code AS code', 'plan.diet_plan AS diet_plan'])
            .where('plan.code = :planCode',
                {
                    planCode: code
                })
            .getRawOne();

        if (!dietPlans) {
            return sendError(res, "Diet Plan Not Found");
        }

        if (dietPlans.diet_plan != "" && dietPlans.diet_plan != null && dietPlans.diet_plan != undefined && typeof dietPlans.diet_plan === 'string') {
            dietPlans.diet_plan = JSON.parse(dietPlans.diet_plan) || {};
        } else {
            dietPlans.diet_plan = {};
        }



        return sendSuccess(res, "Success", { detail: dietPlans });

    } catch (e) {
        return handleCatch(res, e);
    }
};