'use strict';
module.exports = (sequelize, DataTypes) => {
  var small_requirements = sequelize.define('small_requirements', {
    ictcbd_cpu:DataTypes.STRING,
    ictcbd_ram:DataTypes.STRING,
    ictcbd_disk:DataTypes.STRING,
    ictcbd_fqdn:DataTypes.STRING,
    ictcbd_ipaddress:DataTypes.STRING,
    ictcbd_macaddress:DataTypes.STRING,

    ums1_cpu:DataTypes.STRING,
    ums1_ram:DataTypes.STRING,
    ums1_disk:DataTypes.STRING,
    ums1_fqdn:DataTypes.STRING,
    ums1_ipdaress:DataTypes.STRING,
    ums1_macaddress:DataTypes.STRING,

    ums2_cpu:DataTypes.STRING,
    ums2_ram:DataTypes.STRING,
    ums2_disk:DataTypes.STRING,
    ums2_fqdn:DataTypes.STRING,
    ums2_ipdaress:DataTypes.STRING,
    ums2_macaddress:DataTypes.STRING,

    location_cpu:DataTypes.STRING,
    location_ram:DataTypes.STRING,
    location_disk:DataTypes.STRING,
    location_fqdn:DataTypes.STRING,
    location_ipdaress:DataTypes.STRING,
    location_macaddress:DataTypes.STRING,

    notifier_cpu:DataTypes.STRING,
    notifier_ram:DataTypes.STRING,
    notifier_disk:DataTypes.STRING,
    notifier_fqdn:DataTypes.STRING,
    notifier_ipdaress:DataTypes.STRING,
    notifier_macaddress:DataTypes.STRING,


    reporter_cpu:DataTypes.STRING,
    reporter_ram:DataTypes.STRING,
    reporter_disk:DataTypes.STRING,
    reporter_fqdn:DataTypes.STRING,
    reporter_ipdaress:DataTypes.STRING,
    reporter_macaddress:DataTypes.STRING,

    rcs_cpu:DataTypes.STRING,
    rcs_ram:DataTypes.STRING,
    rcs_disk:DataTypes.STRING,
    rcs_fqdn:DataTypes.STRING,
    rcs_ipdaress:DataTypes.STRING,
    rcs_macaddress:DataTypes.STRING,



    vcs_cpu:DataTypes.STRING,
    vcs_ram:DataTypes.STRING,
    vcs_disk:DataTypes.STRING,
    vcs_fqdn:DataTypes.STRING,
    vcs_ipdaress:DataTypes.STRING,
    vcs_macaddress:DataTypes.STRING,


    rps_cpu:DataTypes.STRING,
    rps_ram:DataTypes.STRING,
    rps_disk:DataTypes.STRING,
    rps_fqdn:DataTypes.STRING,
    rps_ipdaress:DataTypes.STRING,
    rps_macaddress:DataTypes.STRING,



    
    
       },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return small_requirements;
};
