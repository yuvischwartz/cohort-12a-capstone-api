var express = require('express');
const { Answer } = require('../lib/models');
var router = express.Router();

let models = require('../lib/models');
console.log(models)

//create question: - POST /api/v1/questions
//create answer: - POST /api/v1/answers
//Fetch categories: - GET /api/v1/categories
//Fetch questions: - GET /api/v1/questions
//Fetch answers: - GET /api/v1/answers


//Fetch categories: - GET /api/v1/categories
router.get('/categories', async function(req, res, next) {
    //write some code here to fetch categories
    let items = await Category.findAll({});
    res.json(items);
    // res.json({ success: true });
}); 

//Fetch questions: - GET /api/v1/questions
router.get('/questions', async function(req, res, next) {
    //write some code here to fetch questions
    let items = await Question.findAll({});
    res.json(items);
    // res.json({ success: true });
}); 

//Fetch answers: - GET /api/v1/answers
router.get('/answers', async function(req, res, next) {
    //write some code here to fetch answers
    let items = await Answer.findAll({});
    res.json(items);
    // res.json({ success: true });
}); 
  

//create question: - POST /api/v1/questions
router.post('/questions', function(req, res, next) {
    res.json({success: true});
  });

//create answer: - POST /api/v1/answers
router.get('/answers', async function(req, res, next) {
    //write some code here to fetch answers
    res.json({ success: true });
}); 


/* GET home page. */ //api/v1/test
router.get('/test', function(req, res, next) {
  res.json({success: true});
});


  


module.exports = router;
