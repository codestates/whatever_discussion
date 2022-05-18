'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      //어떤 댓글은 하나의 유저만을 가진다
      models.comments.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
      //어떤 댓글은 하나의 게시글만을 가진다
      models.comments.belongsTo(models.articles, {
        foreignKey: 'article_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
      //어떤 댓글은 여러개의 좋아요를 가진다
      models.comments.hasMany(models.commentLikes, {
        foreignKey: 'comments_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })

    }
  }
  comments.init({
    users_id: DataTypes.INTEGER,
    articles_id: DataTypes.INTEGER,
    textContent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};