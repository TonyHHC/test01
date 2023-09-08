import express from "express";

import {addTest, updateTest, deleteTest, insertTest, getTest, getEmployee} from "../controller/audig.js";

const router = express.Router();

router.get("/test/addTest", addTest);
router.get("/test/updateTest", updateTest);
router.get("/test/deleteTest", deleteTest);
router.get("/test/insertTest", insertTest);
router.get("/test/getTest", getTest);
router.get("/test/getEmployee", getEmployee);

export default router;