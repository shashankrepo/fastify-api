const {
  getAllItems,
  getItemById,
  addItem,
  deleteItem,
} = require('../controllers/items');

// item schema
const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};

// Options to get all items
const getItemsOpt = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item,
      },
    },
  },
  handler: getAllItems,
};

// Options to get item by id
const getItemOpt = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItemById,
};

// Options to post item
const postItemOpt = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        nama: { type: 'string' },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

// Options to delete item by id
const deleteItemOpt = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: deleteItem,
};

module.exports = itemRoutes = (fastify, options, done) => {
  // Get all items
  fastify.get('/items', getItemsOpt);

  // Get all items
  fastify.get('/item/:id', getItemOpt);

  // Get all items
  fastify.post('/items', postItemOpt);

  // Get all items
  fastify.delete('/item/:id', deleteItemOpt);

  done();
};
