const User = require('./user');
const Product = require('./product');
const Order = require('./order');
const Review = require('./review');
const LineItem = require('./lineItem');
const Category = require('./category');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

//Associations
Order.belongsToMany(Product, { through: 'lineItem' });
Product.belongsToMany(Order, { through: 'lineItem' });

User.hasMany(Order);
Order.belongsTo(User);

Review.belongsTo(Product);
Product.hasMany(Review);

Review.belongsTo(User);
User.hasMany(Review);

Product.belongsTo(Category);
Category.hasMany(Product);

module.exports = {
  User,
  Product,
  Order,
  Review,
  LineItem,
  Category
};
