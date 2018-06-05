'use strict';

const db = require('../server/db');
const { User, Product } = require('../server/db/models');

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
      email: 'cody@email.com',
      password: '123',
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'puppy',
      email: 'murphy@email.com',
      password: '123',
    }),
  ]);

  //************* DRINKS *******************/
  const drinks = await Promise.all([
    Product.create({
      name: 'Alamo Beer',
      description:
        'Seen as the popular beer in the town and with many of the characters. Was used as the main plot of the episode "Beer and Loathing".',
      price: 8.95,
      imageUrl:
        'https://cartoon-battle.narzekasz.pl/deck/cards/KH_AlamoBeer.png',
      inventoryQuantity: 100,
      category: 'drinks',
    }),
    Product.create({
      name: 'Duff Beer',
      description:
        'Consumed by many characters, this beer has been prevalent throughout the series since its introduction in May 1990, and provides a basis for numerous storylines. Variations include Duff Lite, Duff Dry, and Duff Dark. Fudd Beer is sold in competition with Duff Beer, and is reportedly popular in Shelbyville despite having blinded hillbillies.',
      price: 8.95,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/AKE_Duff_Beer_IMG_5244_edit.jpg/170px-AKE_Duff_Beer_IMG_5244_edit.jpg',
      inventoryQuantity: 100,
      category: 'drinks',
    }),
    Product.create({
      name: 'Buzz Beer',
      description: `A mixture of beer and coffee brewed and mixed by the characters in Drew's garage.The production and marketing of this product created numerous situations in which the dynamics of the characters played out. In one episode, a product with the same ingredients called Cap-Beer-Cino was made by a competitor.`,
      price: 8.95,
      imageUrl:
        'http://www.lcbo.com/content/dam/lcbo/products/330969.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
      inventoryQuantity: 100,
      category: 'drinks',
    }),
    Product.create({
      name: 'Blue Milk',
      description: `Blue coloured bantha milk. Bantha is an animal, which lives on planet Tatooine.`,
      price: 7.95,
      imageUrl: 'https://cdn8.bbend.net/images/news/2018/01/protaprilia_1.jpg',
      inventoryQuantity: 70,
      category: 'drinks',
    }),
    Product.create({
      name: 'Fizzy Bubblech',
      description: `A soft drink in an unusually shaped bottle popular in Israel.`,
      price: 6.95,
      imageUrl:
        'https://www.spreadshirt.com/image-server/v1/mp/designs/1009298187,width=178,height=178/zohan-fizzy-bubblech.png',
      inventoryQuantity: 100,
      category: 'drinks',
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
      price: 8.95,
      imageUrl: 'https://i.ytimg.com/vi/k5e1HPeusiA/hqdefault.jpg',
      inventoryQuantity: 100,
      category: 'food',
    }),
    Product.create({
      name: 'Scooby Snacks',
      description: `In Be Cool, Scooby-Doo! (2016), it is shown that the recipe for Scooby Snacks comes from Sorcerer Snacks who were renamed for Scooby-Doo after the gang solves the mystery of who was trying to sabotage their production.

        Scooby Snacks seem to come in many different flavours (although all boxes are identical), and in one of the later episodes, "Recipe for Disaster" (2004), Scooby and Shaggy are ecstatic when Shaggy wins a tour of the Scooby Snacks factory where they attempt to sample the batter pre-cooking before being shooed off by an irate worker who thinks they are trying to steal the recipe.`,
      price: 15.95,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Scooby-Snacks-F.jpg',
      inventoryQuantity: 100,
      category: 'food',
    }),
    Product.create({
      name: 'Everlasting Gobstopper',
      description: `The everlasting gobstopper is similar to a normal gobstopper or jawbreaker and is composed of several discrete layers. The layers allow for the color and flavor changing effects described in the book. They are available in a variety of different flavor combinations and usually have a chalky center with a cherry flavor. A version with a chewy center is also available.`,
      price: 15.95,
      imageUrl:
        'https://i.pinimg.com/originals/30/b9/97/30b99730524f7058ec8aca935443dc71.jpg',
      inventoryQuantity: 100,
      category: 'food',
    }),
    Product.create({
      name: `Panucci's Pizza`,
      description: `The restaurant appeared to have an overall good corporate climate, although Mr. Panucci did not take public health laws particularly seriously. The interior of the restaurant included green decorative and some rips in the edges of the walls, revealing the bricks beneath. The tables included orange seats and red and white checkered tablecloths.`,
      price: 15.95,
      imageUrl:
        'https://i.pinimg.com/736x/e4/e8/00/e4e800cca234992835db9bab595fc501--futurama-pizza.jpg',
      inventoryQuantity: 100,
      category: 'food',
    }),
    Product.create({
      name: `Reptar Cereal`,
      description: `MONSTER FLAVOR IN EVERY BITE – The bite-sized, fruity o’s cereal are a delicious way to start the day. Although this cereal does not turn the milk green like Reptar Cereal in the TV show, it is sure to be fast favorite for every Rugrats and 90s nostalgia fan.
        NICKELODEON’S RUGRATS – Made famous by the popular 90s Nickelodeon show Rugrats, Reptar Cereal features the beloved green dinosaur, Reptar; the favorite character of Tommy Pickles, Chuckie Finster, Phil and Lil, and Angelica.`,
      price: 14.95,
      imageUrl:
        'https://i.pinimg.com/236x/8a/5d/46/8a5d46de1915470619e02c34825e4b5c--rugrats-weird.jpg',
      inventoryQuantity: 100,
      category: 'food',
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
