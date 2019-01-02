'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customer', {
    conatctperson:DataTypes.STRING,
    companyname:DataTypes.STRING,
    address:DataTypes.STRING,
    postalcode:DataTypes.STRING,

    companyname:DataTypes.STRING,
    admin_Contact_person:DataTypes.STRING,
    admin_Office_address:DataTypes.STRING,
    admin_conatct_Number:DataTypes.STRING,
    admin_email_address:DataTypes.STRING,

    installation_site_address:DataTypes.STRING,
    conatct_person_name:DataTypes.STRING,
    address:DataTypes.STRING,
    email:DataTypes.STRING,



    sales_person_name:DataTypes.STRING,
    sales_Person_contact_no:DataTypes.STRING,
     sales_Person_email:DataTypes.STRING,
     sales_person_reference_id:DataTypes.STRING
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Customer;
}