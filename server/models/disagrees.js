'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class disagrees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      //어떤 하나의 disagrees는 하나의 유저에 속한다
      models.disagrees.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
      //어떤 하나의 disagress는 하나의 게시물에 속한다
      models.disagrees.belongsTo(models.articles, {
        foreignKey: 'articles_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
    }
  }
  disagrees.init({
    articles_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'disagrees',
  });
  return disagrees;
};