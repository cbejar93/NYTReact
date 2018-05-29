const mongoose = require("moongose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {type: String, required: true },
    snippet: {type: String, required: true},
    url: {type: String, required:true }
})

const Article = mongoose.models("Article", articleSchema);

module.exports= Article;