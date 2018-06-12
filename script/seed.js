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
        'https://4vector.com/i/free-vector-duff-beer_058407_duff-beer.png',
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
      name: 'Pabst Blue Robot',
      description: `Brewed with real robot shavings! Consumption by organics with digestive systems inexperienced with metals may want to be avoided.`,
      price: 795,
      imageUrl:
        'https://www.serieslyawesome.tv/wp-content/uploads/2017/02/Joshua-Budich-fictional-food-2-futurama.jpg',
      inventoryQuantity: 70,
      categoryId: category[0].id,
    }),
    Product.create({
      name: 'Benterbrau',
      description: `Bender resembled a pregnant robot mimicking all the signs of pregnancy. At first all the ingredients were boiled inside Bender while he sat on the stove reading a magazine called Victoria's Circuits. When Bender burped, foam came out of his mouth and Leela tasted it saying that it was cooked. Leela added the yeast by unscrewing the antenne at the top of his head and adding a funnel. Upon revealing that yeast was needed Bender emotionally exclaimed: 'Yeast? You mean... I'll have a life form growing inside me? It's so beautiful.'`,
      price: 795,
      imageUrl:
        'https://res.cloudinary.com/teepublic/image/private/s--6T0ESMkE--/t_Preview/b_rgb:42332c,c_limit,f_jpg,h_630,q_90,w_630/v1485391878/production/designs/1144146_1.jpg',
      inventoryQuantity: 70,
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
      name: 'Malk',
      description: `Malk is a drink which is served with the lunches at Springfield Elementary School instead of milk. It has "vitamin R" and doesn't seem to have any nutritional value`,
      price: 795,
      imageUrl: 'http://zupimages.net/up/15/22/a66i.jpg',
      inventoryQuantity: 70,
      categoryId: category[0].id,
    }),
    Product.create({
      name: 'Fizzy Bubblech',
      description: `Slurm is a fictional soft drink in the Futurama multiverse. It is popular and highly addictive. It is Philip J. Fry I's favorite drink. It is widely seen throughout the universe. Slurm delivery trucks can be frequently spotted, including in the Futurama Opening Credits (shortly before the Planet Express ship crashes into the billboard). The drink's slogan is 'It's Highly Addictive!' and its distribution is handled by Bureau of Soft Drinks, Tobacco, and Firearms, a parody of the Bureau of Alcohol, Tobacco, and Firearms (which is now known as Bureau of Alcohol, Tobacco, Firearms and Explosives).`,
      price: 695,
      imageUrl:
        'https://www.spreadshirt.com/image-server/v1/mp/designs/1009298187,width=178,height=178/zohan-fizzy-bubblech.png',
      inventoryQuantity: 90,
      categoryId: category[0].id,
    }),
    Product.create({
      name: 'Slurm',
      description: `A soft drink in an unusually shaped bottle popular in Israel.`,
      price: 695,
      imageUrl:
        'http://1.bp.blogspot.com/-ckhg8l6br2k/VWKMnf7uz_I/AAAAAAAANvs/wL3IGbb07pA/s640/JoshuaBudich_12up-Slurm_b1d15e25-dea0-4a47-ac00-b38c96888aad_1024x1024.jpg',
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
      name: 'Krusty Burger',
      description: `Krusty Burger was founded by Krusty the Clown, star of The Krusty the Clown Show.

      During the Summer of 1984, Krusty Burger launched a promotion that gave free burgers to those who pick Olympic Events won by the United States on their game cards. The games involved in the promotion were games that were traditionally won by the Russians. Unfortunately for Krusty, the Russians boycott the Olympics, and the United States won almost every event, costing him $44 million. He then vows on camera to spit on every fiftieth burger as a result of his loss (with Homer in particular "liking those odds" when hearing this)..`,
      price: 895,
      imageUrl:
        'https://i.pinimg.com/originals/6e/af/29/6eaf2932cae3a18599edd7fa41b8f4e9.jpg',
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
      name: `Fishy Joes`,
      description: `Fishy Joe's fast food restaurants are run by Fishy Joe himself. The franchise doesn't care about the environment, and usually cooks animals, despite protests from environmental activists. Free Waterfall Jr. and MEAT once tried to shut down Fishy Joe's, but didn't succeed.`,
      price: 1295,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0073/2452/products/JoshuaBudich-FictionalFood-Popplers_grande.jpg?v=1485473595',
      inventoryQuantity: 30,
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
      name: `Wonka Bar`,
      description: `The Wonka Bar is both a fictional candy bar, introduced as a key story point in the 1964 novel Charlie and the Chocolate Factory by Roald Dahl, and a type of consumer product candy bar inspired by the fictional confection.`,
      price: 1595,
      imageUrl:
        'https://2.bp.blogspot.com/-R8inw3K8r0o/VVynMX00odI/AAAAAAABCRU/t0YLq49XEhE/s1600/Fictional%2BFood%2B-%2BWonka%2BBar%2Bby%2BJoshua%2BBudich.jpg',
      inventoryQuantity: 30,
      categoryId: category[1].id,
    }),

    Product.create({
      name: `Krusty o's`,
      description: `Krusty-Brand Cereal is the catalyst for the episode "'Round Springfield", when Bart swallows a "jagged metal Krusty-O" included in the box as a premium and is sent to the hospital. Later in the episode when Krusty holds a press conference to show that swallowing the jagged metal Krusty-O isn't dangerous, he immediately begins to gag before he is informed he swallowed a "regular" Krusty-O, which he claims must be "poison". At the end of the episode, another box of Krusty-Brand Cereal is shown with this promotion: "Flesh-Eating Bacteria In Every Box!", with Bart implying that he's planning to orchestrate another Krusty-O's-related lawsuit to replenish the $500 he spent on the then-recently deceased Bleeding Gums Murphy's sole album to give to Lisa.`,
      price: 765,
      imageUrl:
        'https://i.pinimg.com/originals/71/3e/90/713e90fbd17bec00705faccee4c50336.jpg',
      inventoryQuantity: 40,
      categoryId: category[1].id,
    }),
    Product.create({
      name: `Reptar Cereal`,
      description: `MONSTER FLAVOR IN EVERY BITE – The bite-sized, fruity o’s cereal are a delicious way to start the day. Although this cereal does not turn the milk green like Reptar Cereal in the TV show, it is sure to be fast favorite for every Rugrats and 90s nostalgia fan.
        NICKELODEON’S RUGRATS – Made famous by the popular 90s Nickelodeon show Rugrats, Reptar Cereal features the beloved green dinosaur, Reptar; the favorite character of Tommy Pickles, Chuckie Finster, Phil and Lil, and Angelica.`,
      price: 1495,
      imageUrl:
        'https://cdn-media.threadless.com/submissions/586742-5855d2ab188c4b6532009617f0cfc83b.jpg',
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
