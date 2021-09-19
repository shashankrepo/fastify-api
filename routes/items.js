const { getAllItems, getItemById, addItem } = require('../controllers/items');

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

// Options for get all items
const getItemOpt = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItemById,
};

// Options for get all items
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

module.exports = itemRoutes = (fastify, options, done) => {
  // Get all items
  fastify.get('/items', getItemsOpt);

  // Get all items
  fastify.get('/item/:id', getItemOpt);

  // Get all items
  fastify.post('/items', postItemOpt);

  done();
};
