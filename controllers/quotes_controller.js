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

const getOneQuote = (req, res) => {
    Quote.countDocuments({}, (err, count) => {
        if(err){
            res.status(400).send("No quotes to get");
        }
        else{
            Quote.find((err, quotes) => {
                if(err){
                    res.status(400).send("No quotes to get");
                }
                else{
                    const indexToGet = getRndInteger(0, count - 1);
                    res.status(200).send(quotes[indexToGet]);
                }
            });
        }
    });
}

const getRndInteger = ((min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
});

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
    getOneQuote,
    addQuote,
    deleteQuoteById,
    deleteAllQuotes
}