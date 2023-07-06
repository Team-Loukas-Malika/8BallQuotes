const router = require ("express").Router();

const quoteController = require ("../Controllers/quoteController.js");

router.get("/", quoteController.getQuote)
router.post("/", quoteController.postQuote)

module.exports = router;
