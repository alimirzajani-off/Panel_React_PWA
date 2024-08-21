import express from "express";
import { signIn, signUp } from "../controllers/authController.js";

const router = express.Router();

router.post("/auth/signup", signUp);
router.post("/auth/signin", signIn);
// router.get("/user/getusers", getAllUser);
// router.get("/user/:id", getUserById);
// router.patch("/user/:id", updateUser);
// router.patch("/user/reset/:username", resetUserPassword);

export default router;
