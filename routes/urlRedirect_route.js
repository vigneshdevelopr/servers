//public route
import express from 'express'
const router = express.Router();
import {SuperUrlz} from '../models/urlModel.js';

router.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  try {
    if (!shortId) {
      return res
        .status(404)
        .send({ msg: "No empty values allowed", type: "error" });
    }
    console.log(shortId, " shortid for url");
    const urlFound = await SuperUrlz.findOne({ shortUrlId: shortId });
    if (!urlFound) {
      return res.status(404).send({ msg: "No url found", type: "error" });
    }
    const bigUrl = urlFound.originalUrl;
    urlFound.hitCount += 1;
    await urlFound.save();
    console.log(urlFound, " updated");
    res.redirect(bigUrl);
  } catch (e) {
    console.log(e.message, " err-in-redirect");
  }
});

export const redirectUrl = router;