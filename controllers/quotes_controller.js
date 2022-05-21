let Quote = require("../models/quote");

const getAllQuotes = (req, res) => {
    Quote.find((err, quotes) => {
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send(quotes);
        }
    });
}

const getQuoteById = (req, res) => {
    const idToFind = req.params.id;
    Quote.findOne({_id: idToFind}, (err, quote) => {
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send(quote);
        }
    });
}

const addQuote = (req, res) => {
    const newQuote = new Quote(req.body);
    newQuote.save((err) => {
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(201).send("Saved quote!");
        }
    });
}

const deleteQuoteById = (req, res) => {
    const idToDelete = req.params.id;
    Quote.findOneAndDelete({_id: idToDelete}, (err, quote) => {
        if(err || !quote){
            res.status(400).send("Could not find quote to delete.");
        }
        else{
            res.status(200).send("Deleted the quote!");
        }
    });
}

const deleteAllQuotes = (req, res) => {
    Quote.deleteMany({}, (err) => {
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send("Deleted all quotes!");
        }
    });
}

module.exports = {
    getAllQuotes,
    getQuoteById,
    addQuote,
    deleteQuoteById,
    deleteAllQuotes
}