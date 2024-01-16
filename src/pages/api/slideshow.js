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
    {
        "_id": 1,
        "text": "Cake Heaven",
        "image": "http://localhost:3000/image/slideshow/bakery.jpg"
    },
    {
        "_id": 1,
        "text": "All kinds of cakes",
        "image": "http://localhost:3000/image/slideshow/cakes.jpg"
    },
    {
        "_id": 1,
        "text": "From all over the world",
        "image": "http://localhost:3000/image/slideshow/world.jpg"
    }
]
  



   );
}