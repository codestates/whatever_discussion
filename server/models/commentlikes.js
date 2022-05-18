'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commentLikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //댓글좋아요는 하나의 댓글에 속한다
      models.commentLikes.belongsTo(models.comments, {
        foreignKey: 'comments_id',
        targetKey: 'id',
        onDelete: 'cascade'
      });
      
      //댓글좋아요는 한유저에게만 속한다
      models.commentLikes.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
    }
  }
  commentLikes.init({
    comments_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'commentLikes',
  });
  return commentLikes;
};