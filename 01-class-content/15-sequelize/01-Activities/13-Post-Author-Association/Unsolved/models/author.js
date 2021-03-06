module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Author.asscociate = function(models){
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    })
  }
  return Author;
};
