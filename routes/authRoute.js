import express from "express";
import {
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSIgnIn } from "../middlewares/authMiddleware.js";
//route object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN ||
router.post("/login", loginController);

//test routes
router.get("/test", requireSIgnIn, isAdmin, testController);
export default router;
