import express from "express";
import { getUserController, updateUserController } from "../controllers/userController.js";



const router = express.Router();


router.get("/getUser",getUserController)

router.put("/update-user", updateUserController);

export default router;
