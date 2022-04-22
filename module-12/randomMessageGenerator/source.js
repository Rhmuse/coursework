// This should print a random message to the console based on this format "Oh no, HERONAME! Your MCGUFFIN is in another LOCATION!". 

const heroNameArr = ['Link', 'Mario', 'Luigi', 'Samus', 'Banjo', 'Donkey Kong', 'Cloud'];
const mcguffinArr = ['princess', 'metroid', 'triforce', 'puzzle piece', 'star', 'banana', 'flower girl', 'shine sprite'];
const locationArr = ['dungeon', 'castle', 'temple', 'trial', 'painting', 'pirate base', 'level'];

const randomIndex = arr => Math.floor(Math.random() * arr.length);

const selectNoun = arr => arr[randomIndex(arr)];

const giveRandomMessage = () => `Oh no, ${selectNoun(heroNameArr)} ! Your ${selectNoun(mcguffinArr)} is in another ${selectNoun(locationArr)}!`;

console.log(giveRandomMessage());