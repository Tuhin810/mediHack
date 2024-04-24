import express from "express";
import { signup } from "../../controllers/auth/registration/userRegistration.controller";
import { createNurse, getAllNurses } from "../../controllers/auth/registration/nurseRegistration";

const router = express.Router();

router.route("/registration").post(signup);

router.route("/create-nurse").post(createNurse);

module.exports = router;
