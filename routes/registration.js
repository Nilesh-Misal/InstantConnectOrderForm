const models=require('../model');


var registration=models.registration;
console.log(registration);


var express=require('express');
var router=express.Router();


// var session=require('express-session');

// router.use(session({secret: 'ssshhhhh'}));



router.post('/create',function(req,res){

    var params={
     first_name:req.body.first_name,
     last_name:req.body.last_name,
     company:req.body.company,
     email:req.body.email,
     area_code:req.body.area_code,
     phone:req.body.phone,
     password:req.body.password,
     subject:req.body.subject,
     existingcustomer:req.body.exist,
    }
    console.log(params);

    registration.create(params).then(function(result){
        console.log(result);
        res.redirect('/');
        
        
    })

})

router.post('/login',function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    console.log(username);
    console.log(password);

    registration.find({
        where:{
            email:req.body.username,
        }
    }).then(function(result){
        console.log(result);
        if(result.email==username && result.password==password)
        {
            res.render('dashboard',{name:result.first_name});
            
        }
        else{
            res.render('/')
        }
    })
})

// router.get('requirements',function(req,res){
//     res.render('user_profile');
// })

// router.get('large_requirements',function(req,res){
//     res.render('user_profile');
// })
module.exports = router;