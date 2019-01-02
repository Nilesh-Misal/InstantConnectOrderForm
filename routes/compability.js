
const models=require('../model')

var installation_Details= models.installation_Details
console.log(installation_Details);
// var customer  = models.MediumInstall;
// console.log(customer);
var express = require('express');
var router  = express.Router();
const uuidv4 = require('uuid/v4')

 
router.post('/create', function(req, res) {


  console.log("fsddsdsdsdsdsd");
    var params = {
      
      small_install_resource:req.body.small_install_resource,
      small_install_cpu:req.body.small_install_cpu,
      small_install_ram:req.body.small_install_ram,
      small_install_disk:req.body.small_install_disk,
      medium_install_resource:req.body.medium_install_resource,
      medium_install_cpu:req.body.medium_install_cpu,
      medium_install_ram:req.body.medium_install_ram,
      medium_install_disk:req.body.medium_install_disk,
      large_install_resource:req.body.large_install_resource,
      large_install_cpu:req.body.large_install_cpu,
      large_install_ram:req.body.large_install_ram,
      large_install_disk:req.body.large_install_disk,


      bseries_model:req.body.bseries_model,
      bseries_cpu:req.body.bseries_cpu,
      bseries_processor:req.body.bseries_processor,
      bseries_network:req.body.bseries_network,
      bseries_hdd:req.body.bseries_hdd,
      bseries_hypervisioresxi:req.body.bseries_hypervisioresxi,
      bseries_iosimage:req.body.bseries_iosimage,

      cseries_model:req.body.cseries_model,
      cseries_cpu:req.body.cseries_cpu,
      cseries_processor:req.body.cseries_processor,
      cseries_memory:req.body.cseries_memory,
      cseries_network:req.body.cseries_network,
      cseries_hdd:req.body.cseries_hdd,
      cseries_hypervisioresxi:req.body.cseries_hypervisioresxi,
      cseries_iosimage:req.body.cseries_iosimage,

      eseries_model:req.body.eseries_model,
      eseries_cpu:req.body.eseries_cpu,
      eseries_processor:req.body.eseries_processor,
      eseries_memory:req.body.eseries_memory,
      eseries_network:req.body.eseries_network,
      eseries_hdd:req.body.eseries_hdd,
      eseries_hypervisioresxi:req.body.eseries_hypervisioresxi,
      eseries_iosimage:req.body.eseries_iosimage,
    };
    console.log(params);

  
    installation_Details.create(
    {
      small_install_resource:req.body.small_install_resource,
      small_install_cpu:req.body.small_install_cpu,
      small_install_ram:req.body.small_install_ram,
      small_install_disk:req.body.small_install_disk,
      medium_install_resource:req.body.medium_install_resource,
      medium_install_cpu:req.body.medium_install_cpu,
      medium_install_ram:req.body.medium_install_ram,
      medium_install_disk:req.body.medium_install_disk,
      large_install_resource:req.body.large_install_resource,
      large_install_cpu:req.body.large_install_cpu,
      large_install_ram:req.body.large_install_ram,
      large_install_disk:req.body.large_install_disk,


      bseries_model:req.body.bseries_model,
      bseries_cpu:req.body.bseries_cpu,
      bseries_processor:req.body.bseries_processor,
      bseries_memory:req.body.bseries_memory,
      bseries_network:req.body.bseries_network,
      bseries_hdd:req.body.bseries_hdd,
      bseries_hypervisioresxi:req.body.bseries_hypervisioresxi,
      bseries_iosimage:req.body.bseries_iosimage,

      cseries_model:req.body.cseries_model,
      cseries_cpu:req.body.cseries_cpu,
      cseries_processor:req.body.cseries_processor,
      cseries_memory:req.body.cseries_memory,
      cseries_network:req.body.cseries_network,
      cseries_hdd:req.body.cseries_hdd,
      cseries_hypervisioresxi:req.body.cseries_hypervisioresxi,
      cseries_iosimage:req.body.cseries_iosimage,

      eseries_model:req.body.eseries_model,
      eseries_cpu:req.body.eseries_cpu,
      eseries_processor:req.body.eseries_processor,
      eseries_memory:req.body.eseries_memory,
      eseries_network:req.body.eseries_network,
      eseries_hdd:req.body.eseries_hdd,
      eseries_hypervisioresxi:req.body.eseries_hypervisioresxi,
      eseries_iosimage:req.body.eseries_iosimage,

      cisco_communication_manager:req.body.cisco_communication_manager,
      cisco_support_version:req.body.cisco_support_version,
      
      ios_supported_hardware:req.body.ios_supported_hardware,
      ios_support_version:req.body.ios_support_version,

      android_supported_hardware:req.body.android_supported_hardware,
      android_support_os:req.body.android_support_os,

      bluetooth_support_apple_and_android:req.body.bluetooth_support_apple_and_android,
      wired_headset_apple:req.body.wired_headset_apple,
      wired_headset_android:req.body.wired_headset_android,

      windows_instant_client_hardware:req.body.windows_instant_client_hardware,
      windows_instant_client_software:req.body.windows_instant_client_software,

      vpn_mobile_client_type:req.body.vpn_mobile_client_type,
      vpn_mobile_client_user:req.body.vpn_mobile_client_user,

      cisco_communication_manager_type:req.body.cisco_communication_manager_type,
      cisco_communication_manager_version:req.body.cisco_communication_manager_version,

      browser_support_IE:req.body.browser_support_IE,
      browser_support_chrome:req.body.browser_support_chrome,

      compatible_OS:req.body.compatible_OS,
      compatible_platform:req.body.compatible_platform,

      lmr_getway_type:req.body.lmr_getway_type,
      lmr_support_version:req.body.lmr_support_version,

      supported_interface_card_no:req.body.supported_interface_card_no,
      supported_interface_card:req.body.supported_interface_card,

      supported_interface_card_Details:req.body.supported_interface_card_Details,
      ums_requirements_id:req.body.ums_requirements_id,
      ums_requirements:req.body.ums_requirements,






})
  .then(function(result) {
    console.log('helllo')
    console.log(result)
    //res.redirect('/');
  //  console.log(req.body);
  
     
  res.send('Your form is Successfully submitted ');
    
  })
  .catch(function(err){
    console.log(err)

  })
});

router.get('/find/:id', function (req, res) {
  models.installation_Details.find({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    console.log(result);
    res.send(result);
  });
});

router.get('/find', function (req, res) {
  models.installation_Details.findAll({
    
   }).then(function(result) {
    console.log(result);
    res.send(result);
  });
});

router.put('/edit/:id',function(req,res){
  var data=req.body;
  var id=req.params.id;
  models.installation_Details.update(data,{'where':{'id':req.params.id}
  }).then(function(result){
    console.log(result);
    res.send(result);
  })
});

router.get('/delete/:id', (req, res) => {
  models.installation_Details.findById(req.params.id)
		.then((user) => {
      user.destroy({
					where: {
						id:req.params.id
					}
				}).then(() => {
          console.log('successfully deleted');
          res.send("successfully deleted");
				}).catch((err) => {
					res.render('error', err)
				})
			})
		})





 
module.exports = router;
