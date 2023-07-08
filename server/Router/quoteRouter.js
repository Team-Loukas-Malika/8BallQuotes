const router = require ("express").Router();

const quoteController = require ("../Controllers/quoteController.js");

router.get("/create", quoteController.getQuote)
router.post("/", quoteController.postQuote)

module.exports = router;
