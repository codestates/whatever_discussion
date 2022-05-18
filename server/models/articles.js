'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //어떤 한 게시물은 하나유 유저만을 가진다
      models.articles.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
      //어떤 한 게시물은 여러개의 댓글을 가진다
      models.articles.hasMany(models.comments, {
        foreignKey: 'articles_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      //어떤 한 게시물은 여러개의 찬성투표를 가진다
      models.articles.hasMany(models.agrees, {
        foreignKey: 'articles_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      //어떤 한 게시물은 여러개의 반대투표를 가진다
      models.articles.hasMany(models.disagrees, {
        foreignKey: 'articles_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })

    }
  }
  articles.init({
    users_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.BLOB,
    textContent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'articles',
  });
  return articles;
};