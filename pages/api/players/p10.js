import NextCors from 'nextjs-cors';


export default async function handler(req, res) {


  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });


    res.json( 


      
      {
        "id": 10,
        "name": "Gianluigi Donnarumma",
        "position": "GK",
        "points":"36",
        "stats":{
          "goals":"",
          "assists":"",
          "trophys":"Won Euro 2020"
        },
        "club": {
          "team": "Paris Saint-Germain",
          "country": "Italy",
          "city": "Bueanse Aries",
          "countryName": "ITA",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
  
        "website": "https://en.psg.fr/teams/first-team/content/gianluigi-donnarumma-joins-paris-saint-germain",
        "message": "Voted Player of the Tournament at Euro 2020, Gianluigi Donnarumma was superb for Roberto Mancini's side even before his penalty shootout heroics in the final victory over England. His summer move to Paris Saint-Germain has not quite gone to plan as yet as he shares starting duties with Keylor Navas, but time is on the 22-year-old's side."

      }
        

     

)}