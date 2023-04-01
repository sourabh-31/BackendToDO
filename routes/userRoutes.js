import express from "express";
import { getMyProfile, loginUser, logoutUser, registerUser } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";



const router = express.Router();


router.post("/new", registerUser);

router.post("/login", loginUser);

router.get("/logout", logoutUser);

router.get("/me", isAuthenticated, getMyProfile);


export default router;