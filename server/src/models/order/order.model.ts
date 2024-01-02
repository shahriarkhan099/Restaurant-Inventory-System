import { Model, DataTypes, Optional } from 'sequelize';
import { IOrder } from '../../interfaces/order.interface';
import sequelize from '..';
import IngredientBatch from '../ingredientBatch/ingredientBatch.model';

interface OrderCreationAttributes extends Optional<IOrder, 'id'> {};

interface OrderInstance extends Model<IOrder, OrderCreationAttributes>, IOrder {
  createdAt?: Date;
  updatedAt?: Date;
}

const Order = sequelize.define<OrderInstance>('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('pending', 'delivered'),
        allowNull: false,
      },
      orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deliveryDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      supplierId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
});

Order.hasMany(IngredientBatch, {
    foreignKey: 'orderId'
});

IngredientBatch.belongsTo(Order, {
    foreignKey: 'orderId'
});

export default Order;