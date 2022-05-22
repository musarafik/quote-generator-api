const express = require("express");
const router = express.Router();

const {
    getAllQuotes,
    getOneQuote,
    addQuote,
    deleteQuoteById,
    deleteAllQuotes 
} = require("../controllers/quotes_controller");

router.get("/quotes", getAllQuotes);

router.get("/quotes/single", getOneQuote);

router.post("/quotes", addQuote);

router.delete("/quotes/:id", deleteQuoteById);

router.delete("/quotes", deleteAllQuotes);

module.exports = router;