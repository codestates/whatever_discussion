'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
    {
      id: 1,
      userId: 'hyae4924',
      password: '12341234',
      mbti:'ESTJ',
      username: '황지웅',
      nickName:'woong',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
        id: 2,
        userId: 'yj5691',
        password: '12341234',
        mbti:'INTS',
        username: '서영준',
        nickName:'young',
        createdAt: new Date(),
        updatedAt: new Date(), 
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};