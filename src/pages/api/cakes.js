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
        "name": "Amandine",
        "ingredients": "chocolate, caramel, fondant cream",
        "description": "Amandine is a Romanian chocolate layered cake filled with chocolate with caramel and fondant cream.Almond cream is sometimes used. As most Romanian cakes, they can be cut and served in 1-serving miniature cakes or as a big cake. These cakes are among the most traditional sweetshop cakes in Romania. The original recipe has layers of chocolate sponge cake soaked in rum flavored caramel syrup. The cream filling is a combination of chocolate buttercream mixed with fondant. The assembled layers are glazed with a combination of fondant with chocolate and rum or rum essence, poured over the cake while still slightly liquid. These cakes have also a traditional decoration on top with a little bit of the cream and a diamond-shaped piece of thin chocolate.",
        "origin": "Romania"
    },
    {
        "_id": 2,
        "name": "Angel cake",
        "ingredients": "sponge cake, cream, food colouring",
        "description": "Angel cake is a type of layered sponge cake dessert that originated in the United Kingdom, and first became popular in the late 19th century. Made with butter, caster sugar, eggs, vanilla extract, self-raising flour, baking powder, and red and yellow food colouring, it consists of two or three layers of sweet sponge cake which are often coloured white, pink and yellow. It is traditionally iced with a thin layer of white icing. To serve, long bars or small rectangular slices are usually cut. The largest recorded Angel cake was 1 metre in length and 50 centimetres in width, which was baked in the English town of Bakewell.",
        "origin": "United Kingdom"
    },
    {
        "_id": 3,
        "name": "Apple cake",
        "ingredients": "apple, caramel",
        "description": "Apple cakes are cakes in which apples feature as a main flavour and ingredient. Such cakes incorporate apples in a variety of forms, including diced, pureed, or stewed, and can include common additions like raisins, nuts, and 'sweet' spices such as cinnamon or nutmeg. They are a common and popular dessert worldwide, thanks to millennia of apple cultivation in Asia and Europe, and their widespread introduction and propagation throughout the Americas during the Columbian Exchange and colonisation. As a result, apple desserts, including cakes, have a huge number of variations. Apples are also used in other cakes to add moisture and sweetness, often as a partial substitute for refined sugar.",
        "origin": "Germany"
    
    },
    {
        "_id": 4,
        "name": "Aranygaluska",
        "ingredients": "yeasty dough, vanilla custard",
        "description": "Aranygaluska is a traditional Hungarian dessert consisting of balls of yeast dough (galuska). The balls are rolled in melted butter, and then rolled in a mixture of sugar and crushed nuts (traditionally, walnuts), assembled into layers, before being baked till golden. Arany means gold or golden; galuska refers to the dumpling nature of the balls of dough. Aranygaluska may be served with vanilla custard.",
        "origin": "Hungary"
    },
    {
        "_id": 5,
        "name": "Beer cake",
        "ingredients": "chocolate, beer",
        "description": "Beer cake is a cake prepared using beer as a primary ingredient, and other typical cake ingredients. Chocolate beer cakes may include stout and chocolate stout beer, and some gingerbread cakes include beer in their preparation. The Rabha tribe in India uses a type of beer cake prepared with rice to create rice beer and fotika, a liquor. Beer cake variations exist, such as root beer cake.",
        "origin": "Ireland"
    },
    {
        "_id": 6,
        "name": "Brownie",
        "ingredients": "flour, butter, eggs, chocolate, cocoa powder, sugar",
        "description": "Brownie is a square or rectangular chocolate baked confection. Brownies come in a variety of forms and may be either fudgy or cakey, depending on their density. Brownies often, but not always, have a glossy skin on their upper crust. They may also include nuts, frosting, cream cheese, chocolate chips, or other ingredients. A variation made with brown sugar and vanilla rather than chocolate in the batter is called a blond brownie or blondie. The brownie was developed in the United States at the end of the 19th century and popularized there during the first half of the 20th century. They are typically eaten by hand, often accompanied by milk, served warm with ice cream (a la mode), topped with whipped cream, or sprinkled with powdered sugar and fudge. In North America, they are common homemade treats and they are also popular in restaurants and coffeehouses.",
        "origin": "United States"
    },
    {
        "_id": 7,
        "name": "Cheesecake",
        "ingredients": "crushed biscuits, soft cheese, eggs, sugar",
        "description": "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese (typically cottage cheese, cream cheese or ricotta), eggs, and sugar. If there is a bottom layer, it most often consists of a crust or base made from crushed cookies (or digestive biscuits), graham crackers, pastry, or sometimes sponge cake. Cheesecake may be baked or unbaked (and is usually refrigerated). Cheesecake is usually sweetened with sugar and may be flavored in different ways. Vanilla, spices, lemon, chocolate, pumpkin, or other flavors may be added to the main cheese layer. Additional flavors and visual appeal may be added by topping the finished dessert with fruit, whipped cream, nuts, cookies, fruit sauce, chocolate syrup, or other ingredients.",
        "origin": "Ancient Greece"
    },
    {
        "_id": 8,
        "name": "Mango float",
        "ingredients": "crackers, whipped cream,  milk, carabao mangoes",
        "description": "Mango float or crema de mangga is a Filipino icebox cake dessert made with layers of ladyfingers (broas) or graham crackers, whipped cream, condensed milk, and ripe carabao mangoes. It is chilled for a few hours before serving, though it can also be frozen to give it an ice cream-like consistency. It is a modern variant of the traditional Filipino crema de fruta cake. It is also known by various other names like mango refrigerator cake, mango graham float, mango royale, and mango icebox cake, among others. Crema de mangga is another version that additionally uses custard and gulaman (agar) or gelatin, as in the original crema de fruta.",
        "origin": "Philippines"
    },
    {
        "_id": 9,
        "name": "Tiramisu",
        "ingredients": "savoiardi, egg yolks, mascarpone, cocoa, coffee",
        "description": "Tiramisu from tirami su, ‘pick me up’ or ‘cheer me up’) is a coffee-flavoured Italian dessert. It is made of ladyfingers (savoiardi) dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa. The recipe has been adapted into many varieties of cakes and other desserts.  Its origins are often disputed among Italian regions Veneto and Friuli Venezia Giulia. ",
        "origin": "Italy"
    },
    {
        "_id": 10,
        "name": "Esterházy torte",
        "ingredients": "almond meringue, buttercream",
        "description": "Esterházy torta is a Hungarian cake (torta) named after Prince Paul III Anton Esterházy de Galántha (1786–1866), a member of the Esterházy dynasty and diplomat of the Austrian Empire. It was invented by Budapest confectioners in the late 19th century and soon became one of the most famous cakes in the lands of the Austro-Hungarian Monarchy. Esterházy torta consists of buttercream spiced with cognac or vanilla, sandwiched between four and five layers of almond meringue (macaroon) dough. The torte is iced with a fondant glaze and decorated with a characteristic chocolate striped pattern. There are, however, many different recipe variations. In Hungary, the original almonds have been entirely replaced by walnuts. ",
        "origin": "Hungary"
    },
    {
        "_id": 11,
        "name": "Prinzregententorte",
        "ingredients": "sponge cake, buttercream, chocolate",
        "description": "Prinzregententorte is a Bavarian torte consisting of at least six, usually seven, thin layers of sponge cake interlaid with chocolate buttercream. The exterior is covered in a dark chocolate glaze. The Prinzregententorte is very popular in Bavaria, Germany, available in cake shops all year round. The Prinzregententorte appeared in series 12, episode 5 of the Great British Bake Off, as the technical challenge.",
        "origin": "Germany"
    },
    {
        "_id": 12,
        "name": "Red velvet cake",
        "ingredients": "flour, buttermilk, butter, cocoa powder, cream cheese, beetroot",
        "description": "Red velvet cake is traditionally a red, red-brown, crimson, or scarlet-colored chocolate layer cake, layered with ermine icing. Traditional recipes do not use food coloring, with the red color due to non-Dutched, anthocyanin-rich cocoa. Common ingredients include buttermilk, butter, cocoa, vinegar, and flour. Beetroot or red food coloring may be used for the color. ",
        "origin": "United States"
    },
    {
        "_id": 13,
        "name": "Sachertorte",
        "ingredients": "chocolate sponge cake, apricot jam",
        "description": "Sachertorte is a chocolate cake, or torte of Austrian origin, invented by Franz Sacher, supposedly in 1832 for Prince Metternich in Vienna. It is one of the most famous Viennese culinary specialties. According to Franz Sacher's son Eduard, Sachertorte was invented by Franz, when he was an apprentice under Chancellor Metternich's chef, one maître Chambellier. The story goes that Franz was required to create a novel cake when the chef was ill. The Metternich connection was probably invented by Eduard many years later, to appeal to ‘Viennese nostalgic for their imperial past’. Sachertorte remains popular in Austria and worldwide. The cake consists of a dense chocolate cake with a thin layer of apricot jam in between two halves, coated in dark chocolate icing on the top and sides. It is traditionally served with unsweetened whipped cream.",
        "origin": "Austria"
    },
    {
        "_id": 14,
        "name": "Spekkoek",
        "ingredients": "cinnamon, clove, mace, anise",
        "description": "Spekkoek (kue lapis legit or spekuk in Indonesian) is a type of Indonesian layer cake. It was developed during colonial times in the Dutch East Indies. The firm-textured cake is an Indo (Dutch-Indonesian) version of the European multi-layered spit cake. However it is not baked on a rotating spit, and contains a mix of Indonesian spices, such as cardamom, cinnamon, clove, mace and anise. The cake is made of flour and yolk and is rich in butter or margarine. Spekkoek is popular in Indonesia and is served as a holiday treat, especially for natal, imlek, and lebaran. It is also served or given as gifts during many local festivities such as at birthday parties and weddings. In the Netherlands, the sliced cake is traditionally served for dessert in rijsttafel. It is also a very popular dessert in Hadhramout.",
        "origin": "Indonesia"
    },
    {
        "_id": 15,
        "name": "Zuger Kirschtorte",
        "ingredients": "sponge cake, nut meringue, butter cream, cherry liquor",
        "description": "Zuger Kirschtorte is a layer cake from Switzerland that consists of layers of nut-meringue, sponge cake and butter cream, and is flavoured with the cherry brandy kirschwasser. Pastry chef Heinrich Höhn invented the cake 1921 in the city Zug. It won gold medals in pastry exhibitions in Lucerne in 1923 and 1928 and in London in 1930. In peak times Heinrich Höhn and his successor Jacques Treichler manufactured up to 100,000 of these cakes per year. The Conditorei Treichler has continued manufacturing and shipping the cakes up to the present day. The name is, however, not protected, so variations of the cake are also manufactured by other pastry shops in the region.",
        "origin": "Switzerland"
    },
    {
        "_id": 16,
        "name": "Tarte Tatin",
        "ingredients": "apples",
        "description": "The tarte Tatin named after the Tatin sisters who invented it and served it in their hotel as its signature dish, is a pastry in which the fruit (usually apples) is caramelized in butter and sugar before the tart is baked. It originated in France but has spread to other countries over the years. The tarte Tatin was created accidentally at the Hôtel Tatin in Lamotte-Beuvron, south of Paris, in the 1880s. The hotel was run by two sisters, Stéphanie and Caroline Tatin. There are conflicting stories concerning the tart's origin, but the most common is that Stéphanie Tatin, who did most of the cooking, was overworked one day. She started to make a traditional apple pie but left the apples cooking in butter and sugar for too long. Smelling the burning, she tried to rescue the dish by putting the pastry base on top of the pan of apples, quickly finishing the cooking by putting the whole pan in the oven. After turning out the upside down tart, she was surprised to find how much the hotel guests appreciated the dessert. ",
        "origin": "France"
    },
    {
        "_id": 17,
        "name": "Tompouce",
        "ingredients": "puff pastry, cream",
        "description": "A tompoes or tompouce is a pastry in The Netherlands. It is the local variety of the mille-feuille or Napoleon, introduced by an Amsterdam pastry baker and named after Admiraal Tom Pouce, the stage name of the Frisian dwarf Jan Hannema. In the Netherlands, the tompoes is iconic, and the market allows little variation in form, size and colour. It must be rectangular, with two layers of puff pastry. The icing is smooth and pink, or occasionally white. For many years however, the top layer has been orange on Koningsdag (King's Day), and a few days before. It may also be orange-coloured when the national football team plays in large international tournaments; this dates from about 1990. The filling is invariably sweet, yellow pastry cream. Tompouces are sometimes topped with whipped cream. Variations with different fillings or with jelly are comparatively rare and are not called tompoes.",
        "origin": "Netherlands"
    },
    {
        "_id": 18,
        "name": "Pavlova",
        "ingredients": "egg white, sugar",
        "description": "Pavlova is a meringue-based dessert named after the Russian ballerina Anna Pavlova. It has a crisp crust and soft, light inside, usually topped with fruit and whipped cream. The dessert is believed to have been created in honour of the dancer either during or after one of her tours to Australia and New Zealand in the 1920s. The nationality of its creator has been a source of argument between the two nations for many years. 'The pav' is a popular dish and an important part of the national cuisine of both Australia and New Zealand, and with its simple recipe, is frequently served during celebratory and holiday meals. It is a dessert most identified with the summer time, and popularly eaten during that period, including at Christmas time; however, it is also eaten all year round in many Australian and New Zealand homes. ",
        "origin": "Australia"
    },
    {
        "_id": 19,
        "name": "Dobos cake",
        "ingredients": "sponge cake, buttercream, caramel",
        "description": "Dobos torte also known as Dobosh, is a Hungarian sponge cake layered with chocolate buttercream and topped with caramel. The layered pastry is named after its inventor, Hungarian chef József C. Dobos, a delicatessen owner in Budapest. In the late 1800s, he decided to create a cake that would last longer than other pastries in an age when cooling techniques were limited. The round sides of the cake are coated with ground hazelnuts, chestnuts, walnuts, or almonds, and the hardened caramel top helps to prevent drying out, for a longer shelf life. Dobos torte was first introduced at the National General Exhibition of Budapest in 1885; Emperor Franz Joseph I and Empress Elisabeth were among the first to taste it. The cake soon became popular throughout Europe, both for its durability through shipping and for its unique appearance. With its flat, shiny, caramel glazed top, it was simple but elegant, as opposed to the more intricate cakes of the age.",
        "origin": "Hungary"
    },
    {
        "_id": 20,
        "name": "Carrot cake",
        "ingredients": "hazelnuts, lemon, kirsch, almonds",
        "description": "Carrot cake is cake that contains carrots mixed into the batter. Most modern carrot cake recipes have a white cream cheese frosting. Sometimes nuts such as walnuts or pecans are added into the cake batter, as well as spices such as cinnamon, ginger and ground mixed spice. Fruit including pineapple, raisins and shredded coconut can also be used to add a natural sweetness. The origins of carrot cake are disputed. Published in 1591, there is an English recipe for ‘pudding in a Carret  root’ that is essentially a stuffed carrot with meat, but it includes many elements common to the modern dessert: shortening, cream, eggs, raisins, sweetener (dates and sugar), spices (clove and mace), scraped carrot, and breadcrumbs (in place of flour). Many food historians believe carrot cake originated from such carrot puddings eaten by Europeans in the Middle Ages, when sugar and sweeteners were expensive and many people used carrots as a substitute for sugar.",
        "origin": "United Kingdom"
    },
    {
        "_id": 21,
        "name": "Cremeschnitte",
        "ingredients": "pastry, chantilly cream, custard cream",
        "description": "A cremeschnitte also known as vanilla slice or custard slice, is a custard and chantilly cream cream cake dessert commonly associated with the former Austro-Hungarian Monarchy. However, its exact origin is unknown. This dish remains popular across Central Europe and the Balkans in various variations, all of which include a puff pastry base and custard cream. In Slovenia, kremna rezina is commonly associated with the town of Bled, an Alpine tourist destination in northwestern Slovenia. The recipe cake was brought to the local Hotel Park in 1953 by Ištvan Lukačević , chef of the hotel's confectionery store. He came to Bled from Serbia where a similar cake was already known. In Serbia, Bosnia and Herzegovina, and Montenegro, the dish is known as krempita 'cream pie'. It is usually prepared with puff pastry dough. The filling is usually pure thick custard, less commonly combined with meringue (whipped egg whites and sugar) creme. ",
        "origin": "Slovenia"
    }
]  

   );
}