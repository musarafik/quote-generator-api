const express = require("express");
const router = express.Router();

const {
    getAllQuotes,
    getQuoteById,
    addQuote,
    deleteQuoteById,
    deleteAllQuotes 
} = require("../controllers/quotes_controller");

router.get("/quotes", getAllQuotes);

router.get("/quotes/:id", getQuoteById);

router.post("/quotes", addQuote);

router.delete("/quotes/:id", deleteQuoteById);

router.delete("/quotes", deleteAllQuotes);

module.exports = router;