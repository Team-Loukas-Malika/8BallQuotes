const router = require ("express").Router();

var quoteController = require ("../controllers/skillController.js");

router.get("/", quoteController.getQuote)
router.post("/", quoteController.postQuote)

module.exports = router;
