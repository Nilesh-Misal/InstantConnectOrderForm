
'use strict'

module.exports=(sequelize,DataTypes)=>{
    var large_requirements=sequelize.define('large_requirements',{
       
    ictcbd1_cpu:DataTypes.STRING,
    ictcbd1_ram:DataTypes.STRING,
    ictcbd1_disk:DataTypes.STRING,
    ictcbd1_fqdn:DataTypes.STRING,
    ictcbd1_ipaddress:DataTypes.STRING,
    ictcbd1_macaddress:DataTypes.STRING,

    ictcbd2_cpu:DataTypes.STRING,
    ictcbd2_ram:DataTypes.STRING,
    ictcbd2_disk:DataTypes.STRING,
    ictcbd2_fqdn:DataTypes.STRING,
    ictcbd2_ipaddress:DataTypes.STRING,
    ictcbd2_macaddress:DataTypes.STRING,

    webserver1_cpu:DataTypes.STRING,
    webserver1_ram:DataTypes.STRING,
    webserver1_disk:DataTypes.STRING,
    webserver1_fqdn:DataTypes.STRING,
    webserver1_ipaddress:DataTypes.STRING,
    webserver1_macaddress:DataTypes.STRING,


    webserver2_cpu:DataTypes.STRING,
    webserver2_ram:DataTypes.STRING,
    webserver2_disk:DataTypes.STRING,
    webserver2_fqdn:DataTypes.STRING,
    webserver2_ipaddress:DataTypes.STRING,
    webserver2_macaddress:DataTypes.STRING,

    webserver3_cpu:DataTypes.STRING,
    webserver3_ram:DataTypes.STRING,
    webserver3_disk:DataTypes.STRING,
    webserver3_fqdn:DataTypes.STRING,
    webserver3_ipaddress:DataTypes.STRING,
    webserver3_macaddress:DataTypes.STRING,


    load_balencer1_cpu:DataTypes.STRING,
    load_balencer1_ram:DataTypes.STRING,
    load_balencer1_disk:DataTypes.STRING,
    load_balencer1_fqdn:DataTypes.STRING,
    load_balencer1_ipaddress:DataTypes.STRING,
    load_balencer1_macaddress:DataTypes.STRING,

    load_balencer2_cpu:DataTypes.STRING,
    load_balencer2_ram:DataTypes.STRING,
    load_balencer2_disk:DataTypes.STRING,
    load_balencer2_fqdn:DataTypes.STRING,
    load_balencer2_ipaddress:DataTypes.STRING,
    load_balencer2_macaddress:DataTypes.STRING,
    


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
    return large_requirements;
}