const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  // const categories = await Category.insertMany([
  //   { name: "Food" },
  //   { name: "Household Supplies" },
  //   { name: "Electronics" },
  //   { name: "Books" },
  //   { name: "Toys" },
  // ]);

  // console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "A Woodsy, Earthy Blend",
      description:
        "This recipe for a handsome, heavenly-scented cold process soap is ideal for a beginner to tackle. From this recipe, you can learn how to use other additives. A base of coconut, canola, castor, sesame oil, Shea, and kokum butter is blended with lime, vetiver, and cedarwood essential oils. The result is a smokey marbled soap with distinctive and deeply masculine scents that you'd find in the most delicious men's colognes. Make a batch for gifting the men in your life.",
      image: "soap-recipe-18-5c2a5ad2c9e77c00010d2cb5.webp",
      // category: categories[0]._id,
      // price: 2.99,
      // quantity: 500,
    },
    {
      name: "A Fresh Citrus Soap",
      description:
        "This melt and pour soap recipe is simple since it's pre-mixed, but with a little customization, it becomes an artisan item. There's no need to work with messy chemicals like lye with a melt and pour base. Dried citrus slices are key because they aren't fresh, but they do have quite a refreshing scent. The slices are heavy, so add them after the base has cooled down slightly so it's not as thin and watery or else the slices will fall to the bottom of the mold. For this recipe, find a goat's milk melt and pour base, then add citrus essential oil and dried orange slices.",
      image: "soap-recipe-7-5c2a3ca546e0fb0001e1fcb1.webp",
      // category: categories[0]._id,
      // price: 1.99,
      // quantity: 500,
    },
    {
      name: "Skin Nourishing Soap",
      description:
        "This double butter luxury soap recipe pairs two quality butter ingredients with a dash of creativity. Aside from being nourishing for the skin thanks to the cocoa and Shea butter, this soap has flecks of gold and brown mica (a colorant for soap) in it to give it texture and golden, glittery color. The mica is a bit of a heavy additive, so add just as the soap is starting to thicken so the colorant doesn't fall to the bottom.",
      image: "soap-recipes-3-5c295764c9e77c0001ddf030.webp",
      // category: categories[1]._id,
      // price: 7.99,
      // quantity: 20,
    },
    {
      name: "Fun Exfoliating Loofah Soap",
      description:
        "Who says you can't be creative with a melt and pour soap base? Loofah soaps are easy to make with this technique. Melt the base, add extras, and cut the loofahs in the color of your choice so they fit in the mold. Then pour the soap on top of the loofah. If you're making a rose soap, add rose essential oil and a bit of rose mica colorant to your base.",
      image: "soap-recipe-8-5c2a3e2446e0fb0001495e49.webp",
      // category: categories[1]._id,
      // price: 7.99,
      // quantity: 20,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "user1",
    lastName: "user1",
    email: "user1@testmail.com",
    password: "user1",
  });

  await User.create({
    firstName: "user2",
    lastName: "user2",
    email: "user2@testmail.com",
    password: "user2",
  });

  await User.create({
    firstName: "user3",
    lastName: "user3",
    email: "user3@testmail.com",
    password: "user3",
  });

  await User.create({
    firstName: "luser",
    lastName: "luser",
    email: "luser@testmail.com",
    password: "luser",
  });

  console.log("users seeded");

  process.exit();
});
