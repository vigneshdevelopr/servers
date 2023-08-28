import express from "express";
const router = express.Router();

import { analysisUrlHandler } from "../controllers/private/analysis_Controller.js";
import { createShortUrlHandler } from "../controllers/private/createShortUrl_controller.js";

import { getAllUrlHandler } from "../controllers/private/getAll_controller.js";
import { authorizationMiddleWareFunc } from "../middleware/authorizationMiddleWare.js";
router.get("/getAll", authorizationMiddleWareFunc, getAllUrlHandler);
//get user,find in db, get all urls with click details

router.get("/analysis", authorizationMiddleWareFunc, analysisUrlHandler);
//url created each day  per month - send data for chart visualization

router.post(
  "/createShortUrl",
  authorizationMiddleWareFunc,
  createShortUrlHandler
); //send original url->generate short and save it to db

export const urlPrivate_route = router;