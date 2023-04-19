const mongoose = require('mongoose');
const ModelArticle = require('./ModelArticle');

mongoose.connect("mongodb://localhost:27017/aprmongo");

const Articles = mongoose.model("Articles", ModelArticle);

const Article = new Articles({title: "Curso de NodeJs", author: "Alan", body: "Conectando DB Mongo"});

Article.save();



module.exports = mongoose;