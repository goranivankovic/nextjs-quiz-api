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
    {
        qustions:[
          'Name the currency used in Japan?',
          'In which country is the Leaning Tower of Pisa located?',
          'Name the fictional city Batman calls home?',
          'Who wrote Hamlet?',
          'In what year did World War II end?',
          'What is a supernova?',
          'How are bats able to fly in the dark?',
          "What'is the technical term for a lie detector?",
          'Which of these is NOT the name of a Michael Jackson song?',
          'Babe Ruth is a legend of which sport?',
          "What's the smallest country in the world?",
          'Where is Mount Everest located?',
          'Who is officially credited with the invention of the light bulb?',"What's the capital of Kenya?",
          "Which of the following countries is closest to the South Pole?",
          'What was the official name of Thailand before 1939?',
          'Which philosopher said, "I think, therefore I am"?',
          "What's the Spanish word for fox?",
          "How many bones are there in an elephant's trunk?",
          'In Greek mythology, who is the Goddess of Agriculture?'

  ],

  answers:
  [
          
[
["Dinar",false],
["Dolar",false],
["Yen",true],
["Rubalj",false]
],
[
["Italy",true],
["Sweden",false],
["Germany",false],
["Denemark",false]
],

[
["Star City",false],
["Gotham",true],
["Springfield",false],
["Metropolis",false]
],

[
["William Shakespeare",true],
["Leonardo da Vinci",false],
["Franz Kafka",false],
["Walt Whitman",false]
],



[
["1942",false],
["1943",false],
["1947",false],
["1945",true]
],

[
["An intense lightning storm",false],
["The explosion of a star",true],
["An underwater volcano",false],
["The eye of a tornado",false]
],


[
["X-ray vision",false],
["Sixth sense",false],
["Echolocation",true],
["Inter-species communication",false]
],


[
["Poligraph",true],
["Seismograph",false],
["Telegraph",false],
["Omnigraph",false]
],



[
["Smooth Criminal",false],
["Remember the Time",false],
["Earth Song",false],
["I Will Always Love You",true]
],


[
["Baseball",true],
["Football",false],
["Soccer",false],
["Basketball",false]
],


[
["Monaco",false],
["Vatican City",true],
["Liechtenstein",false],
["San Marino",false]
],

[
["Tibet",false],
["Nepal",false],
["between Tibet and Nepal",true],
["Switzerland",false]
],


[
["Alexandr Graham Bell",false],
["Thomas Edison",true],
["Henry Ford",false],
["Samuel Morse",false]
],


[
["Asmara",false],
["Dakar",false],
["Nairobi",true],
["Johannesburg",false]
],


[
["Libya",false],
["Finland",false],
["Mexico",false],
["South Africa",true]
],


[
["Ankara",false],
["Siam",true],
["Burma",false],
["Ceylon Africa",false]
],


[
["Friedrich Nietzsche",false],
["John Locke",false],
["Immanuel Kant",false],
["Rene Descartes",true]
],


[
["Perro",false],
["Zorro",true],
["Lobo",false],
["Ballena",false]
],


[
["0",true],
["12",false],
["42",false],
["144",false]
],


[
["Rha",false],
["Persephone",false],
["Demeter",true],
["Hygiela",false]
]


  ]





    }

   );
}