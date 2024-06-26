import express from "express";
import {
  login,
  register,
  logout,
  getUser,
  updateProfile,
  updatePassword,
  getSingleUserDetails,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);
router.get("/getuser/:id", isAuthenticated, getSingleUserDetails);
router.put("/update/profile", isAuthenticated, updateProfile);
router.put("/update/password", isAuthenticated, updatePassword);

export default router;
