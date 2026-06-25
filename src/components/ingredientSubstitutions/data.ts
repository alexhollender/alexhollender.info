import type { Ingredient } from './types'

// A small, hand-made dataset of commonly substituted ingredients.
// Directionally correct but NOT authoritative — this is a prototype, the
// original used a private Algolia index.
export const ingredients: Ingredient[] = [
  {
    id: 'butter',
    ingredientName: 'Butter',
    substitutes: [
      { substituteName: 'margarine', proportion: '1:1' },
      { substituteName: 'coconut oil', proportion: '1:1', note: 'Adds a mild coconut flavor; best in baked goods.' },
      { substituteName: 'olive oil (for sautéing)', proportion: '3/4 the amount of butter', category: 'cooking' },
      { substituteName: 'applesauce', proportion: '1:1', note: 'Reduces fat in baking but yields a denser, moister crumb.', category: 'baking' },
      { substituteName: 'greek yogurt', proportion: '1/2 the amount of butter', category: 'baking' },
    ],
  },
  {
    id: 'buttermilk',
    ingredientName: 'Buttermilk',
    substitutes: [
      { substituteName: 'milk + lemon juice', proportion: '1 cup milk + 1 tbsp lemon juice', note: 'Let sit 5–10 minutes until curdled.' },
      { substituteName: 'milk + white vinegar', proportion: '1 cup milk + 1 tbsp vinegar' },
      { substituteName: 'plain yogurt thinned with milk', proportion: '3/4 cup yogurt + 1/4 cup milk' },
      { substituteName: 'sour cream thinned with water', proportion: '3/4 cup sour cream + 1/4 cup water' },
    ],
  },
  {
    id: 'egg',
    ingredientName: 'Egg',
    substitutes: [
      { substituteName: 'flax egg', proportion: '1 tbsp ground flax + 3 tbsp water', note: 'Rest 5 minutes to gel. Best for binding.', category: 'baking' },
      { substituteName: 'chia egg', proportion: '1 tbsp chia + 3 tbsp water', category: 'baking' },
      { substituteName: 'applesauce', proportion: '1/4 cup per egg', category: 'baking' },
      { substituteName: 'mashed banana', proportion: '1/4 cup per egg', note: 'Adds sweetness and banana flavor.', category: 'baking' },
      { substituteName: 'aquafaba', proportion: '3 tbsp per egg', note: 'Chickpea liquid; whips well for meringues.', category: 'baking' },
    ],
  },
  {
    id: 'baking_powder',
    ingredientName: 'Baking powder',
    substitutes: [
      { substituteName: 'baking soda + cream of tartar', proportion: '1/4 tsp soda + 1/2 tsp cream of tartar per tsp' },
      { substituteName: 'baking soda + buttermilk', note: 'Replace some liquid with buttermilk and reduce other leavening.' },
    ],
  },
  {
    id: 'baking_soda',
    ingredientName: 'Baking soda',
    substitutes: [
      { substituteName: 'baking powder', proportion: '3x the amount of baking soda', note: 'May slightly alter flavor and texture.' },
    ],
  },
  {
    id: 'brown_sugar',
    ingredientName: 'Brown sugar',
    substitutes: [
      { substituteName: 'white sugar + molasses', proportion: '1 cup sugar + 1 tbsp molasses' },
      { substituteName: 'white sugar', proportion: '1:1', note: 'Loses the caramel notes and a little moisture.' },
      { substituteName: 'coconut sugar', proportion: '1:1' },
    ],
  },
  {
    id: 'powdered_sugar',
    ingredientName: 'Powdered sugar',
    substitutes: [
      { substituteName: 'blended granulated sugar + cornstarch', proportion: '1 cup sugar + 1 tbsp cornstarch', note: 'Blend until fine and powdery.' },
    ],
  },
  {
    id: 'granulated_sugar',
    ingredientName: 'Granulated sugar',
    substitutes: [
      { substituteName: 'honey', proportion: '3/4 cup per cup of sugar', note: 'Reduce other liquids slightly.' },
      { substituteName: 'maple syrup', proportion: '3/4 cup per cup of sugar' },
      { substituteName: 'coconut sugar', proportion: '1:1' },
    ],
  },
  {
    id: 'cornstarch',
    ingredientName: 'Cornstarch',
    substitutes: [
      { substituteName: 'all-purpose flour', proportion: '2 tbsp flour per 1 tbsp cornstarch' },
      { substituteName: 'arrowroot powder', proportion: '2 tsp per 1 tbsp cornstarch' },
      { substituteName: 'tapioca starch', proportion: '2 tbsp per 1 tbsp cornstarch' },
    ],
  },
  {
    id: 'all-purpose_flour',
    ingredientName: 'All-purpose flour',
    substitutes: [
      { substituteName: 'cake flour + cornstarch', proportion: '1 cup minus 2 tbsp cake flour + 2 tbsp cornstarch' },
      { substituteName: 'whole wheat flour', proportion: '1:1', note: 'Heavier, nuttier result.' },
      { substituteName: 'gluten-free 1:1 blend', proportion: '1:1' },
    ],
  },
  {
    id: 'cake_flour',
    ingredientName: 'Cake flour',
    substitutes: [
      { substituteName: 'all-purpose flour + cornstarch', proportion: '1 cup minus 2 tbsp flour + 2 tbsp cornstarch' },
    ],
  },
  {
    id: 'self-rising_flour',
    ingredientName: 'Self-rising flour',
    substitutes: [
      { substituteName: 'all-purpose flour + baking powder + salt', proportion: '1 cup flour + 1 1/2 tsp baking powder + 1/4 tsp salt' },
    ],
  },
  {
    id: 'heavy_cream',
    ingredientName: 'Heavy cream',
    substitutes: [
      { substituteName: 'half-and-half + butter', proportion: '7/8 cup half-and-half + 1 tbsp melted butter' },
      { substituteName: 'evaporated milk', proportion: '1:1', note: 'Will not whip.' },
      { substituteName: 'coconut cream', proportion: '1:1', category: 'dairy-free' },
    ],
  },
  {
    id: 'sour_cream',
    ingredientName: 'Sour cream',
    substitutes: [
      { substituteName: 'greek yogurt', proportion: '1:1' },
      { substituteName: 'creme fraiche', proportion: '1:1' },
      { substituteName: 'buttermilk', note: 'For thinner applications like dressings.' },
    ],
  },
  {
    id: 'cream_cheese',
    ingredientName: 'Cream cheese',
    substitutes: [
      { substituteName: 'mascarpone', proportion: '1:1' },
      { substituteName: 'greek yogurt (strained)', proportion: '1:1' },
      { substituteName: 'ricotta (blended smooth)', proportion: '1:1' },
    ],
  },
  {
    id: 'milk',
    ingredientName: 'Milk',
    substitutes: [
      { substituteName: 'almond milk', proportion: '1:1', category: 'dairy-free' },
      { substituteName: 'oat milk', proportion: '1:1', category: 'dairy-free' },
      { substituteName: 'soy milk', proportion: '1:1', category: 'dairy-free' },
      { substituteName: 'evaporated milk + water', proportion: '1/2 cup each' },
    ],
  },
  {
    id: 'half-and-half',
    ingredientName: 'Half-and-half',
    substitutes: [
      { substituteName: 'milk + heavy cream', proportion: '3/4 cup milk + 1/4 cup cream' },
      { substituteName: 'whole milk', proportion: '1:1', note: 'Lighter result.' },
    ],
  },
  {
    id: 'yogurt',
    ingredientName: 'Yogurt',
    substitutes: [
      { substituteName: 'sour cream', proportion: '1:1' },
      { substituteName: 'buttermilk', note: 'For thinner applications.' },
      { substituteName: 'coconut yogurt', proportion: '1:1', category: 'dairy-free' },
    ],
  },
  {
    id: 'creme_fraiche',
    ingredientName: 'Creme fraiche',
    substitutes: [
      { substituteName: 'sour cream', proportion: '1:1' },
      { substituteName: 'mascarpone', proportion: '1:1' },
    ],
  },
  {
    id: 'mascarpone',
    ingredientName: 'Mascarpone',
    substitutes: [
      { substituteName: 'cream cheese', proportion: '1:1' },
      { substituteName: 'creme fraiche', proportion: '1:1' },
    ],
  },
  {
    id: 'ricotta',
    ingredientName: 'Ricotta',
    substitutes: [
      { substituteName: 'cottage cheese (blended)', proportion: '1:1' },
      { substituteName: 'cream cheese', note: 'Richer and denser.' },
      { substituteName: 'crumbled tofu', proportion: '1:1', category: 'dairy-free' },
    ],
  },
  {
    id: 'parmesan',
    ingredientName: 'Parmesan',
    substitutes: [
      { substituteName: 'grana padano', proportion: '1:1' },
      { substituteName: 'pecorino romano', proportion: '1:1', note: 'Saltier and sharper.' },
      { substituteName: 'nutritional yeast', category: 'dairy-free', note: 'Best sprinkled over a finished dish.' },
    ],
  },
  {
    id: 'mozzarella',
    ingredientName: 'Mozzarella',
    substitutes: [
      { substituteName: 'provolone' },
      { substituteName: 'fontina', category: 'melting' },
      { substituteName: 'monterey jack', category: 'melting' },
    ],
  },
  {
    id: 'feta',
    ingredientName: 'Feta',
    substitutes: [
      { substituteName: 'ricotta salata' },
      { substituteName: 'goat cheese', note: 'Creamier and less salty.' },
      { substituteName: 'queso fresco' },
    ],
  },
  {
    id: 'cheddar',
    ingredientName: 'Cheddar',
    substitutes: [
      { substituteName: 'colby' },
      { substituteName: 'gruyere', category: 'melting' },
      { substituteName: 'monterey jack', category: 'melting' },
    ],
  },
  {
    id: 'gruyere',
    ingredientName: 'Gruyere',
    substitutes: [
      { substituteName: 'emmental' },
      { substituteName: 'comte' },
      { substituteName: 'fontina' },
    ],
  },
  {
    id: 'honey',
    ingredientName: 'Honey',
    substitutes: [
      { substituteName: 'maple syrup', proportion: '1:1' },
      { substituteName: 'agave nectar', proportion: '1:1' },
      { substituteName: 'sugar + water', proportion: '1 1/4 cup sugar + 1/4 cup water per cup' },
    ],
  },
  {
    id: 'maple_syrup',
    ingredientName: 'Maple syrup',
    substitutes: [
      { substituteName: 'honey', proportion: '1:1' },
      { substituteName: 'agave nectar', proportion: '1:1' },
      { substituteName: 'golden syrup', proportion: '1:1' },
    ],
  },
  {
    id: 'molasses',
    ingredientName: 'Molasses',
    substitutes: [
      { substituteName: 'dark brown sugar', proportion: '3/4 cup per cup of molasses' },
      { substituteName: 'maple syrup', proportion: '1:1' },
      { substituteName: 'honey', proportion: '1:1' },
    ],
  },
  {
    id: 'corn_syrup',
    ingredientName: 'Corn syrup',
    substitutes: [
      { substituteName: 'golden syrup', proportion: '1:1' },
      { substituteName: 'honey', proportion: '1:1' },
      { substituteName: 'sugar + water syrup', proportion: '1 1/4 cup sugar + 1/3 cup water' },
    ],
  },
  {
    id: 'vanilla_extract',
    ingredientName: 'Vanilla extract',
    substitutes: [
      { substituteName: 'vanilla bean', proportion: '1 bean per 2–3 tsp extract' },
      { substituteName: 'vanilla bean paste', proportion: '1:1' },
      { substituteName: 'maple syrup', note: 'In a pinch, for flavor and sweetness.' },
      { substituteName: 'almond extract', proportion: '1/2 the amount', note: 'Much stronger; flavor differs.' },
    ],
  },
  {
    id: 'lemon_juice',
    ingredientName: 'Lemon juice',
    substitutes: [
      { substituteName: 'lime juice', proportion: '1:1' },
      { substituteName: 'white vinegar', proportion: '1/2 the amount', category: 'acid' },
      { substituteName: 'white wine', category: 'cooking' },
    ],
  },
  {
    id: 'lime_juice',
    ingredientName: 'Lime juice',
    substitutes: [
      { substituteName: 'lemon juice', proportion: '1:1' },
      { substituteName: 'white wine vinegar', proportion: '1/2 the amount', category: 'acid' },
    ],
  },
  {
    id: 'white_vinegar',
    ingredientName: 'White vinegar',
    substitutes: [
      { substituteName: 'apple cider vinegar', proportion: '1:1' },
      { substituteName: 'lemon juice', proportion: '1:1' },
      { substituteName: 'white wine vinegar', proportion: '1:1' },
    ],
  },
  {
    id: 'balsamic_vinegar',
    ingredientName: 'Balsamic vinegar',
    substitutes: [
      { substituteName: 'red wine vinegar + sugar', proportion: '1 tbsp vinegar + 1/2 tsp sugar' },
      { substituteName: 'sherry vinegar' },
    ],
  },
  {
    id: 'red_wine_vinegar',
    ingredientName: 'Red wine vinegar',
    substitutes: [
      { substituteName: 'white wine vinegar', proportion: '1:1' },
      { substituteName: 'apple cider vinegar', proportion: '1:1' },
      { substituteName: 'lemon juice', proportion: '1:1' },
    ],
  },
  {
    id: 'white_wine',
    ingredientName: 'White wine',
    substitutes: [
      { substituteName: 'chicken or vegetable broth', category: 'cooking' },
      { substituteName: 'white grape juice + vinegar', category: 'cooking' },
      { substituteName: 'dry vermouth' },
    ],
  },
  {
    id: 'red_wine',
    ingredientName: 'Red wine',
    substitutes: [
      { substituteName: 'beef broth', category: 'cooking' },
      { substituteName: 'pomegranate juice + vinegar', category: 'cooking' },
      { substituteName: 'cranberry juice' },
    ],
  },
  {
    id: 'shallot',
    ingredientName: 'Shallot',
    substitutes: [
      { substituteName: 'yellow onion + garlic', proportion: '1 small onion + 1 clove per 3 shallots' },
      { substituteName: 'red onion', note: 'Milder, slightly sweeter.' },
      { substituteName: 'scallion (white parts)' },
    ],
  },
  {
    id: 'garlic',
    ingredientName: 'Garlic',
    substitutes: [
      { substituteName: 'garlic powder', proportion: '1/8 tsp per clove' },
      { substituteName: 'granulated garlic', proportion: '1/8 tsp per clove' },
      { substituteName: 'shallot', note: 'Milder, with onion notes.' },
    ],
  },
  {
    id: 'onion',
    ingredientName: 'Onion',
    substitutes: [
      { substituteName: 'shallot', proportion: '3 shallots per medium onion' },
      { substituteName: 'leek (white parts)' },
      { substituteName: 'onion powder', proportion: '1 tbsp per medium onion' },
    ],
  },
  {
    id: 'scallion',
    ingredientName: 'Scallion',
    substitutes: [
      { substituteName: 'chives', category: 'garnish' },
      { substituteName: 'leek (thinly sliced)' },
      { substituteName: 'shallot' },
    ],
  },
  {
    id: 'leek',
    ingredientName: 'Leek',
    substitutes: [
      { substituteName: 'yellow onion', note: 'Stronger flavor; use a bit less.' },
      { substituteName: 'shallot' },
      { substituteName: 'scallion' },
    ],
  },
  {
    id: 'fresh_ginger',
    ingredientName: 'Fresh ginger',
    substitutes: [
      { substituteName: 'ground ginger', proportion: '1/4 tsp per 1 tbsp grated' },
      { substituteName: 'galangal', note: 'Sharper, more citrusy.' },
    ],
  },
  {
    id: 'cilantro',
    ingredientName: 'Cilantro',
    substitutes: [
      { substituteName: 'flat-leaf parsley', category: 'garnish', note: 'Lacks the citrusy notes.' },
      { substituteName: 'thai basil' },
      { substituteName: 'culantro' },
    ],
  },
  {
    id: 'parsley',
    ingredientName: 'Parsley',
    substitutes: [
      { substituteName: 'chervil', category: 'garnish' },
      { substituteName: 'cilantro', note: 'Different flavor profile.' },
      { substituteName: 'celery leaves' },
    ],
  },
  {
    id: 'dill',
    ingredientName: 'Dill',
    substitutes: [
      { substituteName: 'fennel fronds', note: 'Similar feathery texture, mild anise note.' },
      { substituteName: 'tarragon', category: 'flavor' },
      { substituteName: 'dried dill', proportion: '1 tsp dried per 1 tbsp fresh' },
    ],
  },
  {
    id: 'basil',
    ingredientName: 'Basil',
    substitutes: [
      { substituteName: 'thai basil', note: 'More anise-forward.' },
      { substituteName: 'oregano', category: 'cooked dishes' },
      { substituteName: 'spinach + basil extract', category: 'pesto' },
    ],
  },
  {
    id: 'oregano',
    ingredientName: 'Oregano',
    substitutes: [
      { substituteName: 'marjoram', proportion: '1:1', note: 'Sweeter and milder.' },
      { substituteName: 'thyme' },
      { substituteName: 'italian seasoning' },
    ],
  },
  {
    id: 'thyme',
    ingredientName: 'Thyme',
    substitutes: [
      { substituteName: 'oregano', proportion: '1:1' },
      { substituteName: 'marjoram' },
      { substituteName: 'savory' },
    ],
  },
  {
    id: 'rosemary',
    ingredientName: 'Rosemary',
    substitutes: [
      { substituteName: 'thyme' },
      { substituteName: 'sage' },
      { substituteName: 'savory' },
    ],
  },
  {
    id: 'sage',
    ingredientName: 'Sage',
    substitutes: [
      { substituteName: 'marjoram' },
      { substituteName: 'rosemary', note: 'More pungent; use less.' },
      { substituteName: 'thyme' },
    ],
  },
  {
    id: 'tarragon',
    ingredientName: 'Tarragon',
    substitutes: [
      { substituteName: 'fennel fronds', category: 'flavor' },
      { substituteName: 'chervil' },
      { substituteName: 'anise + parsley', note: 'Tiny pinch of anise for the licorice note.' },
    ],
  },
  {
    id: 'anise',
    ingredientName: 'Anise',
    substitutes: [
      { substituteName: 'fennel seed', proportion: '1:1' },
      { substituteName: 'star anise', proportion: 'use about half' },
      { substituteName: 'caraway seed', note: 'Different but shares a warm note.' },
    ],
  },
  {
    id: 'fennel',
    ingredientName: 'Fennel',
    substitutes: [
      { substituteName: 'celery', category: 'raw', note: 'Similar crunch, no anise note.' },
      { substituteName: 'anise seed', category: 'flavor' },
      { substituteName: 'bok choy', category: 'cooked' },
    ],
  },
  {
    id: 'cumin',
    ingredientName: 'Cumin',
    substitutes: [
      { substituteName: 'ground coriander', proportion: '1:1', note: 'Brighter, less earthy.' },
      { substituteName: 'caraway seed' },
      { substituteName: 'chili powder', note: 'Contains cumin plus other spices.' },
    ],
  },
  {
    id: 'coriander',
    ingredientName: 'Coriander',
    substitutes: [
      { substituteName: 'cumin', proportion: '1:1', note: 'Earthier.' },
      { substituteName: 'caraway seed' },
      { substituteName: 'fennel seed' },
    ],
  },
  {
    id: 'paprika',
    ingredientName: 'Paprika',
    substitutes: [
      { substituteName: 'cayenne', proportion: 'use much less', note: 'Far hotter.', category: 'heat' },
      { substituteName: 'chili powder', category: 'flavor' },
      { substituteName: 'smoked paprika', note: 'Adds smokiness.' },
    ],
  },
  {
    id: 'cayenne',
    ingredientName: 'Cayenne',
    substitutes: [
      { substituteName: 'red pepper flakes', proportion: '1:1' },
      { substituteName: 'hot sauce', category: 'liquid' },
      { substituteName: 'chili powder', proportion: 'use more', note: 'Milder.' },
    ],
  },
  {
    id: 'chili_powder',
    ingredientName: 'Chili powder',
    substitutes: [
      { substituteName: 'paprika + cumin + cayenne', note: 'Combine to taste.' },
      { substituteName: 'taco seasoning' },
    ],
  },
  {
    id: 'nutmeg',
    ingredientName: 'Nutmeg',
    substitutes: [
      { substituteName: 'mace', proportion: '1:1', note: 'From the same seed; very similar.' },
      { substituteName: 'allspice' },
      { substituteName: 'cinnamon', category: 'baking' },
    ],
  },
  {
    id: 'allspice',
    ingredientName: 'Allspice',
    substitutes: [
      { substituteName: 'cinnamon + nutmeg + cloves', note: 'Equal parts, to taste.' },
      { substituteName: 'pumpkin pie spice', category: 'baking' },
    ],
  },
  {
    id: 'cardamom',
    ingredientName: 'Cardamom',
    substitutes: [
      { substituteName: 'cinnamon + nutmeg', proportion: 'equal parts' },
      { substituteName: 'ground ginger + cinnamon' },
    ],
  },
  {
    id: 'saffron',
    ingredientName: 'Saffron',
    substitutes: [
      { substituteName: 'turmeric', category: 'color', note: 'For color only; flavor differs greatly.' },
      { substituteName: 'safflower', category: 'color' },
      { substituteName: 'annatto', category: 'color' },
    ],
  },
  {
    id: 'turmeric',
    ingredientName: 'Turmeric',
    substitutes: [
      { substituteName: 'curry powder', note: 'Contains turmeric plus other spices.' },
      { substituteName: 'saffron', category: 'color' },
      { substituteName: 'annatto', category: 'color' },
    ],
  },
  {
    id: 'bay_leaf',
    ingredientName: 'Bay leaf',
    substitutes: [
      { substituteName: 'dried thyme', proportion: '1/4 tsp per leaf' },
      { substituteName: 'dried oregano', proportion: '1/4 tsp per leaf' },
    ],
  },
  {
    id: 'dijon_mustard',
    ingredientName: 'Dijon mustard',
    substitutes: [
      { substituteName: 'yellow mustard', note: 'Milder and tangier.' },
      { substituteName: 'whole grain mustard' },
      { substituteName: 'dry mustard + water + vinegar' },
    ],
  },
  {
    id: 'mayonnaise',
    ingredientName: 'Mayonnaise',
    substitutes: [
      { substituteName: 'greek yogurt', proportion: '1:1' },
      { substituteName: 'sour cream', proportion: '1:1' },
      { substituteName: 'mashed avocado', category: 'spread' },
    ],
  },
  {
    id: 'soy_sauce',
    ingredientName: 'Soy sauce',
    substitutes: [
      { substituteName: 'tamari', proportion: '1:1', category: 'gluten-free' },
      { substituteName: 'coconut aminos', proportion: '1:1', note: 'Sweeter and less salty.' },
      { substituteName: 'worcestershire sauce', note: 'In a pinch.' },
    ],
  },
  {
    id: 'fish_sauce',
    ingredientName: 'Fish sauce',
    substitutes: [
      { substituteName: 'soy sauce', note: 'Less funky, but adds umami.' },
      { substituteName: 'worcestershire sauce' },
      { substituteName: 'soy sauce + miso', category: 'vegetarian' },
    ],
  },
  {
    id: 'worcestershire_sauce',
    ingredientName: 'Worcestershire sauce',
    substitutes: [
      { substituteName: 'soy sauce + a pinch of sugar' },
      { substituteName: 'fish sauce + tamarind' },
    ],
  },
  {
    id: 'hoisin_sauce',
    ingredientName: 'Hoisin sauce',
    substitutes: [
      { substituteName: 'soy sauce + molasses + peanut butter' },
      { substituteName: 'oyster sauce + sugar' },
    ],
  },
  {
    id: 'oyster_sauce',
    ingredientName: 'Oyster sauce',
    substitutes: [
      { substituteName: 'hoisin sauce' },
      { substituteName: 'soy sauce + sugar', category: 'vegetarian' },
    ],
  },
  {
    id: 'sesame_oil',
    ingredientName: 'Sesame oil',
    substitutes: [
      { substituteName: 'tahini + neutral oil' },
      { substituteName: 'peanut oil', note: 'Loses the toasted flavor.' },
    ],
  },
  {
    id: 'olive_oil',
    ingredientName: 'Olive oil',
    substitutes: [
      { substituteName: 'avocado oil', proportion: '1:1' },
      { substituteName: 'canola oil', proportion: '1:1', category: 'neutral' },
      { substituteName: 'melted butter', proportion: '1:1', category: 'baking' },
    ],
  },
  {
    id: 'vegetable_oil',
    ingredientName: 'Vegetable oil',
    substitutes: [
      { substituteName: 'canola oil', proportion: '1:1' },
      { substituteName: 'melted coconut oil', proportion: '1:1' },
      { substituteName: 'applesauce', proportion: '1:1', category: 'baking', note: 'Lowers fat; denser result.' },
    ],
  },
  {
    id: 'coconut_oil',
    ingredientName: 'Coconut oil',
    substitutes: [
      { substituteName: 'butter', proportion: '1:1', category: 'baking' },
      { substituteName: 'neutral oil', proportion: '1:1' },
    ],
  },
  {
    id: 'shortening',
    ingredientName: 'Shortening',
    substitutes: [
      { substituteName: 'butter', proportion: '1:1 plus a little', note: 'Adds flavor; slightly different texture.' },
      { substituteName: 'lard', proportion: '1:1' },
      { substituteName: 'coconut oil', proportion: '1:1' },
    ],
  },
  {
    id: 'lard',
    ingredientName: 'Lard',
    substitutes: [
      { substituteName: 'shortening', proportion: '1:1' },
      { substituteName: 'butter', proportion: '1:1' },
      { substituteName: 'coconut oil', proportion: '1:1', category: 'vegetarian' },
    ],
  },
  {
    id: 'breadcrumbs',
    ingredientName: 'Breadcrumbs',
    substitutes: [
      { substituteName: 'panko', proportion: '1:1', note: 'Lighter, crunchier.' },
      { substituteName: 'crushed crackers' },
      { substituteName: 'rolled oats', category: 'binding' },
    ],
  },
  {
    id: 'panko',
    ingredientName: 'Panko',
    substitutes: [
      { substituteName: 'breadcrumbs', proportion: '1:1', note: 'Less crunchy.' },
      { substituteName: 'crushed cornflakes' },
    ],
  },
  {
    id: 'peanut_butter',
    ingredientName: 'Peanut butter',
    substitutes: [
      { substituteName: 'almond butter', proportion: '1:1' },
      { substituteName: 'sunflower seed butter', proportion: '1:1', category: 'nut-free' },
      { substituteName: 'tahini', note: 'Less sweet, more bitter.' },
    ],
  },
  {
    id: 'almond_butter',
    ingredientName: 'Almond butter',
    substitutes: [
      { substituteName: 'peanut butter', proportion: '1:1' },
      { substituteName: 'cashew butter', proportion: '1:1' },
      { substituteName: 'sunflower seed butter', proportion: '1:1', category: 'nut-free' },
    ],
  },
  {
    id: 'tahini',
    ingredientName: 'Tahini',
    substitutes: [
      { substituteName: 'sunflower seed butter', proportion: '1:1' },
      { substituteName: 'cashew butter', note: 'Sweeter, less bitter.' },
      { substituteName: 'smooth peanut butter' },
    ],
  },
  {
    id: 'almonds',
    ingredientName: 'Almonds',
    substitutes: [
      { substituteName: 'cashews' },
      { substituteName: 'hazelnuts' },
      { substituteName: 'pecans' },
    ],
  },
  {
    id: 'walnuts',
    ingredientName: 'Walnuts',
    substitutes: [
      { substituteName: 'pecans', proportion: '1:1' },
      { substituteName: 'almonds' },
      { substituteName: 'hazelnuts' },
    ],
  },
  {
    id: 'pecans',
    ingredientName: 'Pecans',
    substitutes: [
      { substituteName: 'walnuts', proportion: '1:1' },
      { substituteName: 'almonds' },
    ],
  },
  {
    id: 'pine_nuts',
    ingredientName: 'Pine nuts',
    substitutes: [
      { substituteName: 'walnuts', category: 'pesto' },
      { substituteName: 'cashews' },
      { substituteName: 'sunflower seeds', category: 'nut-free' },
    ],
  },
  {
    id: 'brazilnut',
    ingredientName: 'Brazilnut',
    substitutes: [
      { substituteName: 'macadamia nuts' },
      { substituteName: 'almonds' },
      { substituteName: 'pecans' },
    ],
  },
  {
    id: 'cocoa_powder',
    ingredientName: 'Cocoa powder',
    substitutes: [
      { substituteName: 'unsweetened chocolate', proportion: '1 oz chocolate per 3 tbsp cocoa', note: 'Reduce fat in the recipe.' },
      { substituteName: 'carob powder', proportion: '1:1', note: 'Naturally sweeter.' },
    ],
  },
  {
    id: 'semisweet_chocolate',
    ingredientName: 'Semisweet chocolate',
    substitutes: [
      { substituteName: 'bittersweet chocolate', proportion: '1:1' },
      { substituteName: 'cocoa + sugar + butter', proportion: '3 tbsp cocoa + 1 tbsp sugar + 1 tbsp butter per oz' },
    ],
  },
  {
    id: 'gelatin',
    ingredientName: 'Gelatin',
    substitutes: [
      { substituteName: 'agar agar', proportion: '1:1', category: 'vegetarian', note: 'Sets firmer; dissolve by boiling.' },
      { substituteName: 'pectin', category: 'fruit-based' },
    ],
  },
  {
    id: 'white_rice',
    ingredientName: 'White rice',
    substitutes: [
      { substituteName: 'brown rice', note: 'Longer cook time, chewier.' },
      { substituteName: 'quinoa' },
      { substituteName: 'cauliflower rice', category: 'low-carb' },
    ],
  },
  {
    id: 'brown_rice',
    ingredientName: 'Brown rice',
    substitutes: [
      { substituteName: 'wild rice' },
      { substituteName: 'white rice', note: 'Shorter cook time.' },
      { substituteName: 'farro' },
    ],
  },
  {
    id: 'arborio_rice',
    ingredientName: 'Arborio rice',
    substitutes: [
      { substituteName: 'carnaroli rice', note: 'Holds its shape even better.' },
      { substituteName: 'short-grain sushi rice' },
      { substituteName: 'pearled barley', category: 'risotto' },
    ],
  },
  {
    id: 'quinoa',
    ingredientName: 'Quinoa',
    substitutes: [
      { substituteName: 'couscous' },
      { substituteName: 'bulgur' },
      { substituteName: 'millet' },
    ],
  },
  {
    id: 'couscous',
    ingredientName: 'Couscous',
    substitutes: [
      { substituteName: 'quinoa' },
      { substituteName: 'orzo' },
      { substituteName: 'bulgur' },
    ],
  },
  {
    id: 'bulgur',
    ingredientName: 'Bulgur',
    substitutes: [
      { substituteName: 'cracked wheat' },
      { substituteName: 'quinoa' },
      { substituteName: 'couscous' },
    ],
  },
  {
    id: 'millet',
    ingredientName: 'Millet',
    substitutes: [
      { substituteName: 'quinoa' },
      { substituteName: 'couscous' },
      { substituteName: 'bulgur' },
      { substituteName: 'amaranth' },
    ],
  },
  {
    id: 'polenta',
    ingredientName: 'Polenta',
    substitutes: [
      { substituteName: 'cornmeal', note: 'Polenta is essentially coarse cornmeal.' },
      { substituteName: 'grits' },
    ],
  },
  {
    id: 'farro',
    ingredientName: 'Farro',
    substitutes: [
      { substituteName: 'barley', proportion: '1:1' },
      { substituteName: 'wheat berries' },
      { substituteName: 'spelt' },
    ],
  },
  {
    id: 'barley',
    ingredientName: 'Barley',
    substitutes: [
      { substituteName: 'farro' },
      { substituteName: 'brown rice', category: 'gluten-free' },
      { substituteName: 'wheat berries' },
    ],
  },
  {
    id: 'lentils',
    ingredientName: 'Lentils',
    substitutes: [
      { substituteName: 'split peas' },
      { substituteName: 'chickpeas' },
      { substituteName: 'black beans' },
    ],
  },
  {
    id: 'chickpeas',
    ingredientName: 'Chickpeas',
    substitutes: [
      { substituteName: 'cannellini beans' },
      { substituteName: 'great northern beans' },
      { substituteName: 'lentils' },
    ],
  },
  {
    id: 'black_beans',
    ingredientName: 'Black beans',
    substitutes: [
      { substituteName: 'pinto beans', proportion: '1:1' },
      { substituteName: 'kidney beans' },
      { substituteName: 'lentils' },
    ],
  },
  {
    id: 'kidney_beans',
    ingredientName: 'Kidney beans',
    substitutes: [
      { substituteName: 'pinto beans', proportion: '1:1' },
      { substituteName: 'black beans' },
      { substituteName: 'cannellini beans' },
    ],
  },
  {
    id: 'tomato_paste',
    ingredientName: 'Tomato paste',
    substitutes: [
      { substituteName: 'tomato sauce reduced', proportion: '2–3 tbsp sauce per 1 tbsp paste' },
      { substituteName: 'ketchup', note: 'Sweeter and tangier; use in a pinch.' },
    ],
  },
  {
    id: 'sun-dried_tomato',
    ingredientName: 'Sun-dried tomato',
    substitutes: [
      { substituteName: 'tomato paste', note: 'For concentrated flavor.' },
      { substituteName: 'roasted red pepper' },
    ],
  },
  {
    id: 'zucchini',
    ingredientName: 'Zucchini',
    substitutes: [
      { substituteName: 'yellow summer squash', proportion: '1:1' },
      { substituteName: 'eggplant', category: 'cooked' },
      { substituteName: 'cucumber', category: 'raw' },
    ],
  },
  {
    id: 'eggplant',
    ingredientName: 'Eggplant',
    substitutes: [
      { substituteName: 'zucchini', category: 'cooked' },
      { substituteName: 'portobello mushroom', note: 'Meaty texture for grilling.' },
    ],
  },
  {
    id: 'capers',
    ingredientName: 'Capers',
    substitutes: [
      { substituteName: 'chopped green olives' },
      { substituteName: 'chopped pickles', note: 'For briny tang.' },
    ],
  },
]
