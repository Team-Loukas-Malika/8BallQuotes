const QuoteModel = require("../Models/quoteModel");

const getQuote = async(req, res) =>{
  try {
    let quote = await QuoteModel.find();
    res.send(quote);
  } catch (error) {
    console.log(error);
    res.status(500).send({error: "Unable to get quote"})
  }
}

const postQuote = async(req, res) =>{
  try {
    let newQuote = await QuoteModel.create(req.body);
    res.send({msg: "Quote created successfully!", newQuote});
  } catch (error) {
    res.send({error: "An error occurred while creating quote"});
  }
}

const findQuote = async(req, res) => {
  try {
    let tag = req.params.tags
    let tagQuote = await QuoteModel.find({ tags: { $regex: new RegExp(tag, "i") } })
    res.send(tagQuote)
  } catch (error) {
    console.log({error: "Error finding quotes by tags"});
  }
}

module.exports = {
  getQuote,
  postQuote,
  findQuote
}