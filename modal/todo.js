const Joi = require('joi');



function validateTodo(todo) {
  const schema = {
    data: Joi.string().min(1).max(500).required()
  };

  return Joi.validate(todo, schema);
}

exports.validate = validateTodo;