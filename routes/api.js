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
    let categories = await models.Category.findAll({});
    res.json({ success: categories });
}); 

//Fetch questions: - GET /api/v1/questions
router.get('/categories/:categorydId/questions', async function(req, res, next) {
    //write some code here to fetch questions
    let questions = await models.Question.findAll({where: {categoryId: req.params.categoryId}});
    res.json(questions);
}); 

//Fetch answers: - GET /api/v1/answers
router.get('/questions/:questionId/answers', async function(req, res, next) {
    //write some code here to fetch answers
    let answers = await models.Answer.findAll({where: {questionId: req.params.questionId}});
    res.json(answers);
}); 

//create question: - POST /api/v1/questions
router.post('/categories/:categorydId/questions', async function (req, res, next) {
    //this is where the information is available to us as req.body
    console.log(req.body);
    //the query create an item in the Question table
    let question = await models.Question.create({questionTxt: req.body.questionTxt, categoryId: req.params.categoryId});
    res.json(question);
});

//create answer: - POST /api/v1/answers
router.post('/questions/:questionId/answers', async function (req, res, next) {
    //this is where the information is available to us as req.body
    console.log(req.body);
    //the query create an item in the Answer table
    let answer = await models.Answer.create({answerTxt:req.body.answerTxt, questionId: req.params.questionId});
    res.json(answer);
});

    
// //create answer: - POST /api/v1/answers
// router.get('/answers', async function(req, res, next) {
//     //write some code here to fetch answers
//     res.json({ success: true });
// }); 


// /* GET home page. */ //api/v1/test
// router.get('/test', function(req, res, next) {
//   res.json({success: true});
// });


  


module.exports = router;
