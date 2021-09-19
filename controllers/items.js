letitems = require('../data/items.js');
const { v4: uuidv4 } = require('uuid');
let items = require('../data/items.js');

const getAllItems = (req, reply) => {
  reply.send(items);
};

const getItemById = (req, reply) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === id);
  reply.send(item);
};

const addItem = (req, reply) => {
  const { name } = req.body;
  const item = { id: uuidv4(), name };
  items = [...items, item];
  reply.code(201).send(item);
};

const deleteItem = (req, reply) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === id);
  items = [...items.filter((item) => item.id !== id)];
  reply.send(item);
};

const updateItem = (req, reply) => {
  const { name } = req.body;
  const { id } = req.params;
  let itemIndex = items.findIndex((item) => item.id === id);
  items[itemIndex].name = name;
  reply.code(201).send(items[itemIndex]);
};

module.exports = {
  getAllItems,
  getItemById,
  addItem,
  deleteItem,
  updateItem,
};
