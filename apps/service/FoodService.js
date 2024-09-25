const {StatusCodes}  = require('http-status-code');

class FoodService {
  constructor(model) {
    this.model = model; // The model is passed through the constructor (could be the Food model)
  }

  getProducts(req, res) {
    try {
      const products = {ok:"ok"};
      res.status(StatusCodes.OK).json({ products }); // Return the list of products
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json({ 
        ERROR: "GET_PRODUCTS_ERROR", 
        MESSAGE: error.message 
      }); // Return an error message
    }
  }
}

module.exports = FoodService;