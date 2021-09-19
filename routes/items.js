const items = require('../data/items.js');

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
};

// Options for get all items
const getItemOpt = {
  schema: {
    response: {
      200: Item,
    },
  },
};

module.exports = itemRoutes = (fastify, options, done) => {
  // Get all items
  fastify.get('/items', getItemsOpt, (req, reply) => {
    reply.send(items);
  });

  // Get all items
  fastify.get('/item/:id', getItemOpt, (req, reply) => {
    const { id } = req.params;
    const item = items.find((item) => item.id === id);
    reply.send(item);
  });

  done();
};
