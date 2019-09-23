const models = require('../models');
module.exports = function(app) {
  // Get all products route
  app.get('/api/product', function(req, res) {
    models.Product.findAll().then(function(products) {
      res.json(products);
    }).catch(function(err) {
      console.log(err);
    })
  });
  // Update Product Route
  app.put('/api/product/:id', function(req, res) {
    models.Product.update(
      {
        stock: req.body.stock
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(results) {
      console.log('Product updated succesfully!');
    });
  });
}