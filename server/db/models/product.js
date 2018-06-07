const Sequelize = require('sequelize');
const db = require('../db');
const { Review } = require('./review');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.cornerstone-hw.com/wp-content/uploads/2018/02/example-1prdct1.png',
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  inventoryQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  // averageRating: {
  //   type: Sequelize.VIRTUAL,
  //   async get() {
  //     try {
  //       const reviews = await Review.findAll({ where: { productId: this.id } });
  //       let sum = 0;
  //       reviews.length
  //         ? reviews.map(review => {
  //             sum += review.rating;
  //             return review;
  //           })
  //         : (sum = 0);
  //       return sum / reviews.length || 1;
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   },
  // },
});

// Product.prototype.averageRating = async function() {
//   const reviews = await Review.findAll({ where: { productId: this.id } });
//   let sum = 0;
//   reviews.length
//     ? reviews.map(review => {
//         sum += review.rating;
//         return review;
//       })
//     : (sum = 0);
//   return sum / reviews.length || 1;
// };

module.exports = Product;
