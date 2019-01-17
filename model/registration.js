'use strict';
module.exports = (sequelize, DataTypes) => {
  var registration = sequelize.define('registration', {
      first_name:DataTypes.STRING,
      last_name:DataTypes.STRING,
      company:DataTypes.STRING,
      email:DataTypes.STRING,
      area_code:DataTypes.STRING,
      phone:DataTypes.STRING,
      password:DataTypes.STRING,
      subject:DataTypes.STRING,
      existingcustomer:DataTypes.STRING,
  });
  return registration;
}

