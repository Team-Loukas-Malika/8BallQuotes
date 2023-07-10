const router = require ("express").Router();

const quoteController = require ("../Controllers/quoteController.js");

router.get("/", quoteController.getQuote)
router.post("/", quoteController.postQuote)
router.get("/tags/:tags", quoteController.findQuote)

module.exports = router;
