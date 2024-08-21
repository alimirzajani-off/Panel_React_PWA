import express from "express";
import { addUser, getUser } from "../controllers/UserController.js";

const router = express.Router();

router.post("/user/addUser", addUser);
router.get("/user/getUser", getUser);
// router.get("/user/getusers", getAllUser);
// router.get("/user/:id", getUserById);
// router.patch("/user/:id", updateUser);
// router.patch("/user/reset/:username", resetUserPassword);

export default router;
