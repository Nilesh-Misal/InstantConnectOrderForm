var models=require('../model');

var large_requirements=models.large_requirements;
console.log(large_requirements);

var express=require('express');
var router=express.Router();


router.post('/create',function(req,res){

    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiii');

    var params ={
        ictcbd1_cpu:req.body.ictcbd1_cpu,
        ictcbd1_ram:req.body.ictcbd1_ram,
        ictcbd1_disk:req.body.ictcbd1_disk,
        ictcbd1_fqdn:req.body.ictcbd1_fqdn,
        ictcbd1_ipaddress:req.body.ictcbd1_ipaddress,
        ictcbd1_macaddress :req.body.ictcbd1_macaddress,


        ictcbd2_cpu:req.body.ictcbd2_cpu,
        ictcbd2_ram:req.body.ictcbd2_ram,
        ictcbd2_disk:req.body.ictcbd2_disk,
        ictcbd2_fqdn:req.body.ictcbd2_fqdn,
        ictcbd2_ipaddress:req.body.ictcbd2_ipaddress,
        ictcbd2_macaddress :req.body.ictcbd2_macaddress,

        webserver1_cpu:req.body.webserver1_cpu,
        webserver1_ram:req.body.webserver1_ram,
        webserver1_disk:req.body.webserver1_disk,
        webserver1_fqdn:req.body.webserver1_fqdn,
        webserver1_ipaddress:req.body.webserver1_ipaddress,
        webserver1_macaddress :req.body.webserver1_macaddress,

        webserver2_cpu:req.body.webserver2_cpu,
        webserver2_ram:req.body.webserver2_ram,
        webserver2_disk:req.body.webserver2_disk,
        webserver2_fqdn:req.body.webserver2_fqdn,
        webserver2_ipaddress:req.body.webserver2_ipaddress,
        webserver2_macaddress :req.body.webserver2_macaddress,



        webserver3_cpu:req.body.webserver3_cpu,
        webserver3_ram:req.body.webserver3_ram,
        webserver3_disk:req.body.webserver3_disk,
        webserver3_fqdn:req.body.webserver3_fqdn,
        webserver3_ipaddress:req.body.webserver3_ipaddress,
        webserver3_macaddress :req.body.webserver3_macaddress,


        load_balencer1_cpu:req.body.load_balencer1_cpu,
        load_balencer1_ram:req.body.load_balencer1_ram,
        load_balencer1_disk:req.body.load_balencer1_disk,
        load_balencer1_fqdn:req.body.load_balencer1_fqdn,
        load_balencer1_ipaddress:req.body.load_balencer1_ipaddress,
        load_balencer1_macaddress :req.body.load_balencer1_macaddress,


        load_balencer2_cpu:req.body.load_balencer2_cpu,
        load_balencer2_ram:req.body.load_balencer2_ram,
        load_balencer2_disk:req.body.load_balencer2_disk,
        load_balencer2_fqdn:req.body.load_balencer2_fqdn,
        load_balencer2_ipaddress:req.body.load_balencer2_ipaddress,
        load_balencer2_macaddress :req.body.load_balencer2_macaddress,


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


    large_requirements.create(params).then(function(result){
        console.log(result);
        res.render('large_requirements');
    }).catch(function(err){
        console.log(err);

    })
})

module.exports=router;