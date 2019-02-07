
var express=require('express');
var router=express.Router();
// var session=require('express-session');


// router.use(session({secret: 'ssshhhhh'}));


var sess;


router.get('/dashboard',function(req,res){

    sess=req.session;
   var username= sess.username;

//    var sess=req.session;
//    var name=sess.name
  // console.log(name);
  var name=sess.name;
    res.render('dashboard',{name:username});
});

router.get('/small_requirements',function(req,res){
     sess=req.session;
    var name=sess.name;
    res.render('small_requirement',{name:name});
});

router.get('/medium_requirements',function(req,res){
    sess=req.session;
    var name=sess.name;
    res.render('medium_requirements',{name:name});
});

router.get('/large_requirements',function(req,res){
    sess=req.session;
    var name=sess.name;
    res.render('large_requirements',{name:name});
});

module.exports=router;