'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      //users는 여러 articles를 가질수 있다
      models.users.hasMany(models.articles, {
        foreignKey: 'user_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      //users는 여러 댓글을 가질 수 있다
      models.users.hasMany(models.comments, {
        foreignKey: 'user_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      //users는 여러 댓글좋아요를 가질수있다
      models.users.hasMany(models.commentLikes, {
        foreignKey: 'user_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      //users는 여러 찬성투표를 할 수 있다
      models.users.hasMany(models.agrees, {
        foreignKey: 'user_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      //users는 여러 반대투표를 할 수 있다
      models.users.hasMany(models.disagrees, {
        foreignKey: 'user_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })


    }
  }
  users.init({
    userId: DataTypes.STRING,
    password: DataTypes.INTEGER,
    mbti: DataTypes.STRING,
    nickname: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};