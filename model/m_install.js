'use strict';
module.exports = (sequelize, DataTypes) => {
  var installation_Details = sequelize.define('installation_Details', {
    small_install_resource:DataTypes.STRING,
    small_install_cpu:DataTypes.STRING,
    small_install_ram:DataTypes.STRING,
    small_install_disk:DataTypes.STRING,
    medium_install_resource:DataTypes.STRING,
    medium_install_cpu:DataTypes.STRING,
    medium_install_ram:DataTypes.STRING,
    medium_install_disk:DataTypes.STRING,
    large_install_resource:DataTypes.STRING,
    large_install_cpu:DataTypes.STRING,
    large_install_ram:DataTypes.STRING,
    large_install_disk:DataTypes.STRING,
    
    bseries_model:DataTypes.STRING,
    bseries_cpu:DataTypes.STRING,
    bseries_processor:DataTypes.STRING,
    bseries_memory:DataTypes.STRING,
    bseries_network:DataTypes.STRING,
    bseries_hdd:DataTypes.STRING,
    bseries_hypervisioresxi:DataTypes.STRING,
    bseries_iosimage:DataTypes.STRING,

    cseries_model:DataTypes.STRING,
    cseries_cpu:DataTypes.STRING,
    cseries_processor:DataTypes.STRING,
    cseries_memory:DataTypes.STRING,
    cseries_network:DataTypes.STRING,
    cseries_hdd:DataTypes.STRING,
    cseries_hypervisioresxi:DataTypes.STRING,
    cseries_iosimage:DataTypes.STRING,

    eseries_model:DataTypes.STRING,
    eseries_cpu:DataTypes.STRING,
    eseries_processor:DataTypes.STRING,
    eseries_memory:DataTypes.STRING,
    eseries_network:DataTypes.STRING,
    eseries_hdd:DataTypes.STRING,
    eseries_hypervisioresxi:DataTypes.STRING,
    eseries_iosimage:DataTypes.STRING,

    cisco_communication_manager:DataTypes.STRING,
    cisco_support_version:DataTypes.STRING,

    
    ios_supported_hardware:DataTypes.STRING,
    ios_support_version:DataTypes.STRING,

    android_supported_hardware:DataTypes.STRING,
    android_support_os:DataTypes.STRING,

    bluetooth_support_apple_and_android:DataTypes.STRING,
    wired_headset_apple:DataTypes.STRING,
    wired_headset_android:DataTypes.STRING,



    windows_instant_client_hardware:DataTypes.STRING,
    windows_instant_client_software:DataTypes.STRING,


    vpn_mobile_client_type:DataTypes.STRING,
    vpn_mobile_client_user:DataTypes.STRING,

    cisco_communication_manager_type:DataTypes.STRING,
    cisco_communication_manager_version:DataTypes.STRING,

    browser_support_IE:DataTypes.STRING,
    browser_support_chrome:DataTypes.STRING,


    compatible_OS:DataTypes.STRING,
    compatible_platform:DataTypes.STRING,

    lmr_getway_type:DataTypes.STRING,
    lmr_support_version:DataTypes.STRING,

    supported_interface_card_no:DataTypes.STRING,
    supported_interface_card:DataTypes.STRING,


    supported_interface_card_Details:DataTypes.STRING,

    ums_requirements_id:DataTypes.STRING,
    ums_requirements:DataTypes.STRING,

  
    
       },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return installation_Details;
};
