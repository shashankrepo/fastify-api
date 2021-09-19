const {
  getAllItems,
  getItemById,
  addItem,
  deleteItem,
  updateItem,
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
        name: { type: 'string' },
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

// Options to update item
const putItemOpt = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: updateItem,
};

module.exports = itemRoutes = (fastify, options, done) => {
  // Get all items
  fastify.get('/items', getItemsOpt);

  // Get item by id
  fastify.get('/item/:id', getItemOpt);

  // Add new item
  fastify.post('/items', postItemOpt);

  // Delete item by id
  fastify.delete('/item/:id', deleteItemOpt);

  // Update item by id
  fastify.put('/item/:id', putItemOpt);

  done();
};
