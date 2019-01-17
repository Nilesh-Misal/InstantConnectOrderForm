//const models=require('../model')

const models=require('../model')

var User= models.customer;
console.log(User);
// var customer  = models.MediumInstall;
// console.log(customer);
var express = require('express');
var router  = express.Router();
const uuidv4 = require('uuid/v4');

 
router.post('/create', function(req, res) {
    //console.log('nillleshhhhhhhh');

    // var param={
    //     conatctperson:req.body.conatctperson,
    //     companyname:req.body.companyname,
    //     address:req.body.address,
    //     postalcode:req.body.postalcode,

    //     companyname:req.body.companyname,
    //     admin_Contact_person:req.body.admin_Contact_person,
    //     admin_Office_address:req.body.admin_Office_address,
    //     admin_conatct_Number:req.body.admin_conatct_Number,
    //     admin_email_address:req.body.admin_email_address,

    //     installation_site_address:req.body.installation_site_address,
    //     conatct_person_name:req.body.conatct_person_name,
    //     address:req.body.address,
    //     email:req.body.email,

    //     sales_person_name:req.body.sales_person_name,
    //     sales_Person_contact_no:req.body.seles_Person_contact_no,
    //     sales_Person_email:req.body.sales_Person_email,
    //     sales_person_reference_id:req.body.sales_person_reference_id,

    // }
    User.create(
        {
            conatctperson:req.body.conatctperson,
            companyname:req.body.companyname,
            address:req.body.address,
            postalcode:req.body.postalcode,
    
            admincompanyname:req.body.admincompanyname,
            admin_Contact_person:req.body.admin_Contact_person,
            admin_Office_address:req.body.admin_Office_address,
            admin_conatct_Number:req.body.admin_conatct_Number,
            admin_email_address:req.body.admin_email_address,
    
            installation_site_address:req.body.installation_site_address,
            conatct_person_name:req.body.conatct_person_name,
            adminaddress:req.body.adminaddress,
            email:req.body.email,
    
            sales_person_name:req.body.sales_person_name,
            sales_Person_contact_no:req.body.seles_Person_contact_no,
            sales_Person_email:req.body.sales_Person_email,
            sales_person_reference_id:req.body.sales_person_reference_id,
    
    
    })
      .then(function(result) {
        console.log('helllo')
        console.log(result)
        //res.redirect('/');
      //  console.log(req.body);
      
         
      res.redirect('find');
        
      })
      .catch(function(err){
        console.log(err)
    
      })
    });

    router.get('/login',function(req,res){
      res.render('index')
      console.log('login successfully')

    })

    router.get('/signup',function(req,res){
       // res.sendFile(__dirname +'/home/jampot/Documents/InstantConnect/views/registration.ejs');
       // res.send();
      //  res.redirect('/registration.ejs');
      res.render('registration');
      console.log('login successfully');

    })

    router.get('/registration',function(req,res){
      res.render('requirement')
      console.log('login successfully')

    })

    router.get('/find/:id', function (req, res) {
        User.find({
          where: {
            id: req.params.id
          }
        }).then(function(result) {
          console.log(result);
          res.send(result);
        });
      });


      router.get('/find', function (req, res) {

        User.findAll({

         
          
         }).then(function(result) {
         // console.log(result);
         console.log('nilllllllllllllllleshhhhhhhhhhhhh')
         // console.log(req.query);
          res.render('find',{users:result});
        });
                  //console.log(req.query);

      });

      router.get('/edit/:id',function(req,res,next){

        User.findById(req.params.id)
        .then(function(user) {
         //console.log(user);
          res.render('customer', {users:user} )
        }).catch((err) => {
          res.render('error', err);
        })
      //   var data1=req.body;
      //   var user=User.build();


      //   console.log(data1);
      //   var id=req.params.id;
      //   console.log(id);
      //   var data=req.body;
      //   console.log(data);

      //   // User.findById(req.params.id)
      //   //  .then((user) => {
       
      //   User.update(data,{'where':{'id':req.params.id}
      //   }).then(function(result){
      //     console.log(result);
      //    // return res.status(200).send(successEncode({status:'success','data':result,'message':'success'}));

      //   res.render('edit',{data:result});
      //   })
      // });
    });
      

      router.get('/delete/:id', (req, res) => {
      
        User.findById(req.params.id)
         .then((user) => {
            user.destroy({
                 where: {
                id:req.params.id
                 }
             }).then(function() {
              // alert('succesfully deleted');
              res.redirect('/customer/find');
            }); 
                     // res.redirect('find');
                  })
                 

              })
      

    module.exports = router;

     