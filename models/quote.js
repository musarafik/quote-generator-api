const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    "quote": {
        type: String,
        required: true
    },
   
    "source": {
        type: String
    }
});

module.exports = mongoose.model("Quote", QuoteSchema);