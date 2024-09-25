require('dotenv').config();
const FoodService = require('../service/FoodService')


class FoodRoutes {
  constructor(router) {
    this.router = router;
    this.foodService = new FoodService();
  }

  async getRoutes() {
    // API status route
    this.router.route("/api/V1/").get(this.foodService.getProducts());
    return this.router;
  }
}

module.exports = FoodRoutes;
