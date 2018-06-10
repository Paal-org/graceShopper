'use strict';

const db = require('../server/db');
const {
  User,
  Product,
  Review,
  Category,
  Order,
  LineItem,
} = require('../server/db/models');

/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      lastName: 'puppy',
      isAdmin: true,
      email: 'cody@email.com',
      password: '123',
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'puppy',
      isAdmin: false,
      email: 'murphy@email.com',
      password: '123',
    }),
  ]);

  //************* CATEGORY *******************/
  const category = await Promise.all([
    Category.create({
      name: 'drinks',
      imageUrl: '/img/pint.png',
    }),
    Category.create({
      name: 'food',
      imageUrl: '/img/hamburger.png',
    }),
  ]);

  //************* DRINKS *******************/
  const drinks = await Promise.all([
    Product.create({
      name: 'Alamo Beer',
      description:
        'Seen as the popular beer in the town and with many of the characters. Was used as the main plot of the episode "Beer and Loathing".',
      price: 895,
      imageUrl:
        'https://cartoon-battle.narzekasz.pl/deck/cards/KH_AlamoBeer.png',
      inventoryQuantity: 100,
      categoryId: category[0].id,
    }),
    Product.create({
      name: 'Duff Beer',
      description:
        'Consumed by many characters, this beer has been prevalent throughout the series since its introduction in May 1990, and provides a basis for numerous storylines. Variations include Duff Lite, Duff Dry, and Duff Dark. Fudd Beer is sold in competition with Duff Beer, and is reportedly popular in Shelbyville despite having blinded hillbillies.',
      price: 895,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/AKE_Duff_Beer_IMG_5244_edit.jpg/170px-AKE_Duff_Beer_IMG_5244_edit.jpg',
      inventoryQuantity: 50,
      categoryId: category[0].id,
    }),
    Product.create({
      name: 'Buzz Beer',
      description: `A mixture of beer and coffee brewed and mixed by the characters in Drew's garage.The production and marketing of this product created numerous situations in which the dynamics of the characters played out. In one episode, a product with the same ingredients called Cap-Beer-Cino was made by a competitor.`,
      price: 1095,
      imageUrl:
        'http://www.lcbo.com/content/dam/lcbo/products/330969.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
      inventoryQuantity: 100,
      categoryId: category[0].id,
    }),
    Product.create({
      name: 'Blue Milk',
      description: `Blue coloured bantha milk. Bantha is an animal, which lives on planet Tatooine.`,
      price: 795,
      imageUrl: 'https://cdn8.bbend.net/images/news/2018/01/protaprilia_1.jpg',
      inventoryQuantity: 70,
      categoryId: category[0].id,
    }),
    Product.create({
      name: 'Fizzy Bubblech',
      description: `A soft drink in an unusually shaped bottle popular in Israel.`,
      price: 695,
      imageUrl:
        'https://www.spreadshirt.com/image-server/v1/mp/designs/1009298187,width=178,height=178/zohan-fizzy-bubblech.png',
      inventoryQuantity: 90,
      categoryId: category[0].id,
    }),
  ]);
  //************* FOOD *******************/
  const food = await Promise.all([
    Product.create({
      name: 'Krabby Patty',
      description: `The Krabby Patty is a popular burger served at the Krusty Krab. It is the best-known food at the restaurant and the most famous burger in Bikini Bottom. It first appears in the episode "Help Wanted." It is what SpongeBob cooks most of the time at his job.

        It is a basic plot
        Krabby Patty Creature Feature 110
        element that contributes to the Krusty Krab's existence. A running gag throughout the series is Plankton trying to steal the Krabby Patty secret formula.`,
      price: 895,
      imageUrl: 'https://i.ytimg.com/vi/k5e1HPeusiA/hqdefault.jpg',
      inventoryQuantity: 100,
      categoryId: category[1].id,
    }),
    Product.create({
      name: 'Scooby Snacks',
      description: `In Be Cool, Scooby-Doo! (2016), it is shown that the recipe for Scooby Snacks comes from Sorcerer Snacks who were renamed for Scooby-Doo after the gang solves the mystery of who was trying to sabotage their production.

        Scooby Snacks seem to come in many different flavours (although all boxes are identical), and in one of the later episodes, "Recipe for Disaster" (2004), Scooby and Shaggy are ecstatic when Shaggy wins a tour of the Scooby Snacks factory where they attempt to sample the batter pre-cooking before being shooed off by an irate worker who thinks they are trying to steal the recipe.`,
      price: 1595,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Scooby-Snacks-F.jpg/220px-Scooby-Snacks-F.jpg',
      inventoryQuantity: 80,
      categoryId: category[1].id,
    }),
    Product.create({
      name: 'Everlasting Gobstopper',
      description: `The everlasting gobstopper is similar to a normal gobstopper or jawbreaker and is composed of several discrete layers. The layers allow for the color and flavor changing effects described in the book. They are available in a variety of different flavor combinations and usually have a chalky center with a cherry flavor. A version with a chewy center is also available.`,
      price: 1595,
      imageUrl:
        'https://i.pinimg.com/originals/30/b9/97/30b99730524f7058ec8aca935443dc71.jpg',
      inventoryQuantity: 60,
      categoryId: category[1].id,
    }),
    Product.create({
      name: `Panucci's Pizza`,
      description: `The restaurant appeared to have an overall good corporate climate, although Mr. Panucci did not take public health laws particularly seriously. The interior of the restaurant included green decorative and some rips in the edges of the walls, revealing the bricks beneath. The tables included orange seats and red and white checkered tablecloths.`,
      price: 1595,
      imageUrl:
        'https://i.pinimg.com/736x/e4/e8/00/e4e800cca234992835db9bab595fc501--futurama-pizza.jpg',
      inventoryQuantity: 30,
      categoryId: category[1].id,
    }),
    Product.create({
      name: `Reptar Cereal`,
      description: `MONSTER FLAVOR IN EVERY BITE – The bite-sized, fruity o’s cereal are a delicious way to start the day. Although this cereal does not turn the milk green like Reptar Cereal in the TV show, it is sure to be fast favorite for every Rugrats and 90s nostalgia fan.
        NICKELODEON’S RUGRATS – Made famous by the popular 90s Nickelodeon show Rugrats, Reptar Cereal features the beloved green dinosaur, Reptar; the favorite character of Tommy Pickles, Chuckie Finster, Phil and Lil, and Angelica.`,
      price: 1495,
      imageUrl:
        'https://i.pinimg.com/236x/8a/5d/46/8a5d46de1915470619e02c34825e4b5c--rugrats-weird.jpg',
      inventoryQuantity: 50,
      categoryId: category[1].id,
    }),
  ]);

  const review = await Promise.all([
    Review.create({
      rating: 3,
      content: `Nothing to brag about. It wasn't as rich or sweet of a flavour as expected. I was expecting something more rich and butterscotch or caramel like.`,
      productId: drinks[1].id,
      userId: 1,
    }),
    Review.create({
      rating: 4,
      content: 'This is such an amazing product Oh My God!',
      productId: drinks[1].id,
      userId: 2,
    }),
    Review.create({
      rating: 4,
      content: `Really good. The company that makes this is the same that makes Virgil Root Beer. The ingredients are all organic, and I didn't have any problems with the shipping. I'm giving this a 4/5 for comparison to the Universal Studios butterbeer. It's not bad, it's a little different from Harry Potter World's, and I definitely recommend drinking it cold.
      He made butterbeer floats with salted caramel ice cream, cool whip, and this drink for Christmas incase anyone wants to try something different. So all in all, not bad`,
      productId: drinks[2].id,
      userId: 1,
    }),
    Review.create({
      rating: 3,
      content: 'This is such an amazing product Oh My God!',
      productId: food[1].id,
      userId: 2,
    }),
    Review.create({
      rating: 5,
      content: `Don't be fooled by the rating, these were a big hit at my themed party and everyone kept searching around for "the last bag." That of which, I coincidentally hid for my own consumption. Haha`,
      productId: drinks[3].id,
      userId: 1,
    }),
    Review.create({
      rating: 5,
      content: `Don't be fooled by the rating, these were a big hit at my themed party and everyone kept searching around for "the last bag." That of which, I coincidentally hid for my own consumption. Haha`,
      productId: food[2].id,
      userId: 1,
    }),
    Review.create({
      rating: 5,
      content: 'This is such an amazing product Oh My God!',
      productId: food[2].id,
      userId: 2,
    }),
    Review.create({
      rating: 4,
      content:
        'This was definitely a nostalgic trip down memory lane. My wife and I were extremely happy with the purchase of this Reptar cereal. And, are so glad that it actually tastes delicious. A lot of these licensed cereals end up tasting pretty bland or like cardboard with sugar on them. Thankfully, that is not the case here.',
      productId: food[4].id,
      userId: 2,
    }),
    Review.create({
      rating: 1,
      content:
        'This cereal has ZERO taste! I was expecting something maybe similar to fruit loops but I kid you not they have NO flavor. I don’t know if it was intended to be just for display purposes but whoever rated these 5 stars on taste alone must have been someone connected to the product cause this is the most bland cereal I’ve ever had',
      productId: food[4].id,
      userId: 1,
    }),
  ]);
  const orders = await Promise.all([
    Order.create({
      status: 'cart',
      userId: '1',
    }),
    Order.create({
      status: 'complete',
      userId: '1',
      shippingStatus: 'pending',
    }),
    Order.create({
      status: 'complete',
      userId: '1',
      shippingStatus: 'shipped',
    }),
    Order.create({
      status: 'cart',
      userId: '2',
    }),
    Order.create({
      status: 'complete',
      userId: '2',
      shippingStatus: 'pending',
    }),
  ]);

  const lineItems = await Promise.all([
    LineItem.create({
      orderId: orders[0].id,
      productId: 3,
      purchaseQuantity: 3,
      purchasePrice: 795,
    }),
    LineItem.create({
      orderId: orders[0].id,
      productId: 1,
      purchasePrice: 795,
    }),
    LineItem.create({
      orderId: orders[0].id,
      productId: 2,
      purchasePrice: 795,
    }),
    LineItem.create({
      orderId: orders[1].id,
      productId: 3,
      purchasePrice: 795,
    }),
    LineItem.create({
      orderId: orders[1].id,
      productId: 2,
      purchasePrice: 795,
    }),
    LineItem.create({
      orderId: orders[3].id,
      productId: 7,
      purchasePrice: 795,
    }),
    LineItem.create({
      orderId: orders[4].id,
      productId: 6,
      purchasePrice: 795,
    }),
    LineItem.create({
      orderId: orders[2].id,
      productId: 6,
      purchasePrice: 795,
    }),
  ]);
  db.close();
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${food.length} food`);
  console.log(`seeded ${drinks.length} drinks`);
  console.log(`seeded successfully`);
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  seed()
    .catch(err => {
      console.error(err);
      process.exitCode = 1;
    })
    .finally(() => {
      // `finally` is like then + catch. It runs no matter what.
      console.log('closing db connection');
      db.close();
      console.log('db connection closed');
    });
  /*
   * note: everything outside of the async function is totally synchronous
   * The console.log below will occur before any of the logs that occur inside
   * of the async function
   */
  console.log('seeding...');
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
