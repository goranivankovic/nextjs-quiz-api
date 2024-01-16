import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });

   // Rest of the API logic
   res.json(
[
    "chocolate",
    "caramel",
    "fondant cream",
    "sponge cake",
    "cream",
    "food colouring",
    "apple",
    "yeasty dough",
    "vanilla custard",
    "beer",
    "flour",
    "butter",
    "eggs",
    "cocoa powder",
    "sugar",
    "crushed biscuits",
    "soft cheese",
    "crackers",
    "whipped cream",
    "milk",
    "carabao mangoes",
    "savoiardi",
    "egg yolks",
    "mascarpone",
    "cocoa",
    "coffee",
    "almond meringue",
    "buttercream",
    "buttermilk",
    "cream cheese",
    "beetroot",
    "apricot jam",
    "cinnamon",
    "clove",
    "mace",
    "anise",
    "nut meringue",
    "cherry liquor",
    "apples",
    "puff pastry",
    "eggwhite",
    "hazelnuts",
    "lemon",
    "kirsch",
    "almonds",
    "pastry",
    "chantilly cream"
]



   );
}


