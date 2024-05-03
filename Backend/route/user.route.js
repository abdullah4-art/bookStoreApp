import express from "express"
import { login, signup } from "../controller/user.controller.js"

const router = express.Router()

// sigup route
router.post("/signup",signup)

// login route
router.post("/login",login)

export default router