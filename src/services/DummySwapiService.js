export default class DummySwapiService {
  _people = [
    {
      id: 1,
      name: 'Bilbo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown',
    },

    {
      id: 2,
      name: 'Frodo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown',
    },
  ];

  _planets = [
    {
      id: 1,
      name: 'Earth [TEST DATA]',
      population: '7.530.000.000',
      rotationPeriod: '23 hours 56 seconds',
      diameter: '12.742 km',
    },
    {
      id: 2,
      name: 'Venus [TEST DATA]',
      population: 'not known',
      rotationPeriod: '243 days',
      diameter: '12.104 km',
    },
  ];

  _starships = [
    {
      id: 1,
      name: 'USS Enterprise [TEST DATA]',
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      costInCredits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100,
    },
  ];

  getAllPeople = async () => this._people;

  getPerson = async () => this._people[0];

  getAllPlanets = async () => this._planets;

  getPlanet = async () => this._planets[0];

  getAllStarships = async () => this._starships;

  getStarship = async () => this._starships[0];

  getPersonImage = () => 'https://placeimg.com/400/500/people';

  getStarshipImage = () => 'https://placeimg.com/600/400/tech';

  getPlanetImage = () => 'https://placeimg.com/400/400/nature';
}
