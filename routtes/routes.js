import express from "express";
import { Allroutes } from "../controller/routesController.js";
const router = express.Router();
router.get("/", Allroutes.homeroute);
router.get("/contact", Allroutes.contact);
router.post("/contact", Allroutes.userdata);
export { router };
