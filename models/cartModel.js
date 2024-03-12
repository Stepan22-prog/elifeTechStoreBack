import Model from "./model.js";

class CartModel extends Model {
    async createOrder({name, email, phone, address, total_price}) {
      try {
        const sql = 'INSERT INTO `orders`(`userName`, `userEmail`, `userPhone`, `userAddress`, `total_price`) VALUES (?, ?, ?, ?, ?)';
        const values = [name, email, phone, address, total_price];

        const [results] = await this.connection.execute({sql, values});
        return results;
      } catch (error) {
        throw error
      }
    }

    async createOrderItem({product_id, order_id, quantity, price}) {
      try {
        const sql = 'INSERT INTO `order_items`(`product_id`, `order_id`, `quantity`, `price`) VALUES (?, ?, ?, ?)';
        const values = [product_id, order_id, quantity, price];

        const [results] = await this.connection.execute({sql, values});
        return results;
      } catch (error) {
        throw error;
      }
  }
}

export default CartModel;