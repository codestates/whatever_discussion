'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('articles', [
      {
        id: 1,
        users_id:1,
        title:'깻잎논쟁',
        textContent:"당신의 선택은",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
      id: 2,
      users_id:2,
      title:'패딩논쟁',
      textContent:"당신의 선택은",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   
    
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('articles', null, {})
  }
};