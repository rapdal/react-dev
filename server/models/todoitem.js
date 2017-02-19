'use strict';
module.exports = function(sequelize, DataTypes) {
  var TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    classMethods: {
      associate: (models) => {
        TodoItem.belongsTo(models.Todo, {
          foreignKey: 'todoId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return TodoItem;
};