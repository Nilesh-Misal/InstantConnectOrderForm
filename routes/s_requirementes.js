
const models=require('../model');

var small_requirement=models.small_requirements;
console.log(small_requirement);


var express= require('express');
var router=express.Router();

 const uuidv4 = require('uuid/v4')



 router.post('/create', function(req,res){

    console.log('nileshhhhhhhhhhhhhhhhh');

    var params={

        ictcbd_cpu:req.body.ictcbd_cpu,
        ictcbd_ram:req.body.ictcbd_ram,
        ictcbd_disk:req.body.ictcbd_disk,
        ictcbd_fqdn:req.body.ictcbd_fqdn,
        ictcbd_ipaddress:req.body.ictcbd_ipaddress,
        ictcbd_macaddress:req.body.ictcbd_macaddress,


        ums1_cpu:req.body.ums1_cpu,
        ums1_ram:req.body.ums1_ram,
        ums1_disk:req.body.ums1_disk,
        ums1_fqdn:req.body.ums1_fqdn,
        ums1_ipdaress:req.body.ums1_ipdaress,
        ums1_macaddress:req.body.ums1_macaddress,


        ums2_cpu:req.body.ums2_cpu,
        ums2_ram:req.body.ums2_ram,
        ums2_disk:req.body.ums2_disk,
        ums2_fqdn:req.body.ums2_fqdn,
        ums2_ipdaress:req.body.ums2_ipdaress,
        ums2_macaddress:req.body.ums2_macaddress,


        location_cpu:req.body.location_cpu,
        location_ram:req.body.location_ram,
        location_disk:req.body.location_disk,
        location_fqdn:req.body.location_fqdn,
        location_ipdaress:req.body.location_ipdaress,
        location_macaddress:req.body.location_macaddress,


        notifier_cpu:req.body.notifier_cpu,
        notifier_ram:req.body.notifier_ram,
        notifier_disk:req.body.notifier_disk,
        notifier_fqdn:req.body.notifier_fqdn,
        notifier_ipdaress:req.body.notifier_ipdaress,
        notifier_macaddress:req.body.notifier_macaddress,

        reporter_cpu:req.body.reporter_cpu,
        reporter_ram:req.body.reporter_ram,
        reporter_disk:req.body.reporter_disk,
        reporter_fqdn:req.body.reporter_fqdn,
        reporter_ipdaress:req.body.reporter_ipdaress,
        reporter_macaddress:req.body.reporter_macaddress,


        rcs_cpu:req.body.rcs_cpu,
        rcs_ram:req.body.rcs_ram,
        rcs_disk:req.body.rcs_disk,
        rcs_fqdn:req.body.rcs_fqdn,
        rcs_ipdaress:req.body.rcs_ipdaress,
        rcs_macaddress:req.body.rcs_macaddress,


        vcs_cpu:req.body.vcs_cpu,
        vcs_ram:req.body.vcs_ram,
        vcs_disk:req.body.vcs_disk,
        vcs_fqdn:req.body.vcs_fqdn,
        vcs_ipdaress:req.body.vcs_ipdaress,
        vcs_macaddress:req.body.vcs_macaddress,



        rps_cpu:req.body.rps_cpu,
        rps_ram:req.body.rps_ram,
        rps_disk:req.body.rps_disk,
        rps_fqdn:req.body.rps_fqdn,
        rps_ipdaress:req.body.rps_ipdaress,
        rps_macaddress:req.body.rps_macaddress,

    }

    console.log(params);


    small_requirement.create(params).then(function(result){
        console.log(result);
        res.render('small_requirement');
    }).catch(function(err){
        console.log(err);
    });
})


module.exports = router;