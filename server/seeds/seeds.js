const db = require("../config/connection");
const { User, Sud } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  await User.create({
    username: "user1",
    email: "user1@testmail.com",
    password: "user1",
  });

  await User.create({
    username: "user2",
    email: "user2@testmail.com",
    password: "user2",
  });

  await User.create({
    username: "user3",
    email: "user3@testmail.com",
    password: "user3",
  });

  await User.create({
    username: "luser",
    email: "luser@testmail.com",
    password: "luser",
  });

  console.log("users seeded");

  await Sud.deleteMany();

  const suds = await Sud.insertMany([
    {
      title:
        "A Woodsy, Earthy Blend, ACTIVATED CHARCOAL SOAP RECIPE (COLD PROCESS): FOR 30 OZ / 840 G OF SOAP:",
      description:
        "This recipe for a handsome, heavenly-scented cold process soap is ideal for a beginner to tackle. From this recipe, you can learn how to use other additives. A base of coconut, canola, castor, sesame oil, Shea, and kokum butter is blended with lime, vetiver, and cedarwood essential oils. The result is a smokey marbled soap with distinctive and deeply masculine scents that you'd find in the most delicious men's colognes. Make a batch for gifting the men in your life.",
      image: "soap-recipe-18-5c2a5ad2c9e77c00010d2cb5.webp",
      ingredients: [
        "lye:  3 oz / 84 g",
        "distilled water: 4.8 oz / 137 g",
        "coconut oil (30%): 6.3 oz / 180 g",
        "canola oil (25%): 5.3 oz / 150 g",
        "shea butter (20%): 4.2 oz / 120 g",
        "kokum butter (14%): 3 oz / 84 g",
        "castor oil (6%): 1.3 oz / 36 g",
        "sesame oil (5%): 1 oz / 30 g",
        "lime essential oil: 7 g",
        "cedarwood (virginia) essential oil: 8 g",
        "vetiver essential oil: 8 g",
        "kaolin clay: 1 Tbsp",
        "activated charcoal: ½ tsp",
      ],
      steps: [
        "PREPARE THE MOLD:",
        "Cut out a piece of freezer paper about 7 x 9 Inches",
        "Cut the bottom of the Pringles can off, so that the remainder measures about 7 Inches tall",
        "Firmly tape the cap on (you don't want any soap batter seeping out at the bottom)",
        "Line the can with freezer paper - the coated side facing inward",
        "MAKING THE SOAP:",
        "Prepare the lye solution",
        "Measure and melt the coconut oil, shea butter and kokum butter over low heat",
        "Add canola, castor and sesame oil",
        "Wait until lye solution and oils have cooled down to room temperature",
        "Prepare kaolin clay by dissolving it in 1 tablespoon of oils from your base",
        "Measure and add essential oils",
        "Combine lye solution and melted oils and butters by stick blending until emulsified (this recipe traced quick for me, you want to allow yourself time to incorporate colors and swirls)",
        "Separate out a third (or 280 g) of the batter and add ½ teaspoon of activated charcoal",
        "Add kaolin clay to the remaining batter",
        "Thoroughly whisk in the colorants making sure there are no more clumps",
        "Create an `in the pot swirl` by pouring the black batter into the white. Pouring the batter in three different spots making a circle, take your spatula and go through each black spots only once moving in a circle",
        "Pour the batter into the mold and tap it down to release any air bubbles",
        "Insulate the mold with a heavy towel",
        "After 18 - 24 hours cut into bars",
        "Cure for 3-4 weeks",
      ],
      createdAt: Date.now(),
      username: "luser",
    },
    {
      title: "A Fresh Citrus Soap",
      description:
        "This melt and pour soap recipe is simple since it's pre-mixed, but with a little customization, it becomes an artisan item. There's no need to work with messy chemicals like lye with a melt and pour base. Dried citrus slices are key because they aren't fresh, but they do have quite a refreshing scent. The slices are heavy, so add them after the base has cooled down slightly so it's not as thin and watery or else the slices will fall to the bottom of the mold. For this recipe, find a goat's milk melt and pour base, then add citrus essential oil and dried orange slices.",
      image: "soap-recipe-7-5c2a3ca546e0fb0001e1fcb1.webp",
      ingredients: [
        "goat’s milk melt and pour base (we used this one)",
        "silicone soap molds (like this)",
        "citrus essential oil (you can find these at most natural food stores or here)",
        "dried citrus slices (instructions below on how to make your own)",
      ],
      steps: [
        "Step 1: Dry your citrus. Slice citrus (lemons, lime, oranges) into thin slices, about 1/8″ of an inch). Keep in mind the size of your mold. I chose very small citrus fruits to make sure the slices would fit. Preheat your oven to 200 degrees. Lay your citrus on top of a wire rack on top of a pan and place in the oven until dry, about 2-3 hours. How long it takes depends on how thick your slices are and how wide. Remove the dried citrus and allow to cool.",
        "Step 1: Dry your citrus. Slice citrus (lemons, lime, oranges) into thin slices, about 1/8″ of an inch). Keep in mind the size of your mold. I chose very small citrus fruits to make sure the slices would fit. Preheat your oven to 200 degrees. Lay your citrus on top of a wire rack on top of a pan and place in the oven until dry, about 2-3 hours. How long it takes depends on how thick your slices are and how wide. Remove the dried citrus and allow to cool.",
        "Step 3. Ask your child to help lay out the citrus inside the molds before pouring the soap.",
        "Step 4. Help your child pour the soap base into the molds. Be careful it can be hot so either do this step alone or help them with careful supervision.",
        "After a couple of hours, pop the soaps out and you have beautiful, handmade citrus soaps!",
        "I love how the citrus peeks through and it’s a great color contrast against the white goat’s milk.",
        "You can experiment with drying other types of colorful fruits and add different flavored oils.",
        "The soaps smell delicious and tied with some rustic twine, make pretty and simple gifts. The kids are giving these to their teachers this year.",
      ],
      createdAt: Date.now(),
      username: "user1",
    },
    {
      title: "Skin Nourishing Soap",
      description:
        "This double butter luxury soap recipe pairs two quality butter ingredients with a dash of creativity. Aside from being nourishing for the skin thanks to the cocoa and Shea butter, this soap has flecks of gold and brown mica (a colorant for soap) in it to give it texture and golden, glittery color. The mica is a bit of a heavy additive, so add just as the soap is starting to thicken so the colorant doesn't fall to the bottom.",
      image: "soap-recipes-3-5c295764c9e77c0001ddf030.webp",
      ingedients: [
        "6 ounces cocoa butter",
        "5 1/2 ounces shea butter",
        "15 1/2 ounces coconut oil",
        "4 1/2 ounces lard (or palm oil for a vegetarian option)",
        "11 ounces olive oil",
        "2 ounces castor oil",
        "2 ounces fragrance/essential oils of your choosing (optional)",
        "1/2 teaspoon gold mica colorant (optional)",
        "1/2 teaspoon brown mica colorant (optional)",
        "2 tablespoons carrier oil for micas, such as olive, avocado, or almond oil (optional)",
        "12 1/2 ounces distilled water",
        "6 ounces lye flakes",
      ],
      steps: [
        "Melt the Oils: First, put only the cocoa butter into your microwavable bowl or pot to begin melting it. In the microwave, heat the cocoa butter for about 3 minutes at 50 percent power. On the stovetop, melt at low-medium heat. When the cocoa butter is partially melted, add the shea butter and continue heating until it is partially melted. Next, add the coconut oil and then the lard. Heat until the butters and oils are completely melted. Then, add the olive and castor oils to the mixture.",
        "Prepare the Micas and Fragrance (Optional): While you’re waiting for the oils to melt, you can measure out your micas (colorants) and fragrance if you're using them. Both are completely optional in this recipe. To give the soap a rich, warm swirl pattern, put the gold mica into a small bowl with about 1 tablespoon of carrier oil. Do the same in a separate bowl with the brown mica. Stir both well with a fork or whisk.",
        "Make the Lye Solution and Add It to the Oils: To make the lye solution, first put on your safety gloves and goggles. Add the distilled water to your pitcher. Then, gradually add the lye flakes to the water, gently stirring with your stainless steel spoon until the lye is dissolved. Note that lye gives off heat as it dissolves, and working too quickly can cause the mixture to bubble over. Let the lye solution cool for a bit until it's no longer bubbling before proceeding. Then, add the lye solution to the oils. Use an immersion blender to mix the oils until you achieve `trace,` which just means that the mixture will hold its form when you drag the blender through it. Add the fragrance if you're using it, and blend a bit more.",
        "Swirl the Micas (Optional): For the color swirl, pour one of the bowls of mica onto one side of the oil mixture and the other mica on the other side.",
        "Mix in the Micas (Optional): Using the immersion blender not turned on, swirl the color into the mixture. You can leave distinct color swirls or mix it in fairly well for more subtle color variance.",
        "Mold the Soap: Pour the soap mixture into your soap bar mold, and let it set up. After roughly 24 hours, remove the soap from the mold and let it cure for about three to six weeks before using it.",
      ],
      createdAt: Date.now(),
      username: "user2",
    },
  ]);

  console.log("Sud seeded");

  process.exit();
});
