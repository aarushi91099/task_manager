const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const todos = require('../models/task');
const body = require('body-parser')

router.get('/',(req,res) => {
     
            todos.find((err,docs) => {
            res.render('index',{'tasks':docs});
        })
    
});


router.post('/add', (req,res) => {
    var a = req.body.task;
    
    console.log(a);
    

    
    var obj = {'tasks':a};
    
          
        console.log(obj);
        todos.insertMany(obj, (err,res) => {
            if(err){
                throw(err);
            }
            else{

            
        console.log ("Record entered");}
    });
    
            
    res.redirect('/');
     
});


router.get('/add', (req,res) => {
    var tasks = req.body.tasks;

}); 


router.get('/delete/:id', (req,res) => {
    var uid = req.params.id;
    console.log(uid);
    todos.findByIdAndRemove(uid ,(err, doc) => {
        if (!err) {
            res.redirect('/');
            
            
        }
        else{
            console.log('Error in employee delete :' + err);
        }
    });    
});

module.exports = router;