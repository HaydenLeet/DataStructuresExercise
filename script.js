// 1a
const jedi = [];

// 1b
jedi[jedi.length] = "Luke";

// 1c
jedi.push("Obi-Wan_Kenobi");

// 1d
jedi.unshift("Yoda");

// 1e
console.log(jedi[1]);

// 1f
jedi.splice(2);

// 1g
jedi.splice(0, 1);

// 2a
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"]

// 2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"]

// 2c
const starWarsVillians = sithLords.concat(imperialOfficers);

// 2d
console.log(starWarsVillians.slice(0, 2));

// 3a
const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
};

// 3b
console.log(droids["astromech"]);

// 3c
console.log(droids.protocol);

// 3d
droids.assassin = 'IG-11'

// BONUS
// 4
console.log(starWarsVillians[0][6]);

// 5
console.log(sithLords.slice(-2, -1));

// 6a
const starWarsMovies = [
    {
        episodeOne: 'The Phantom Menace',
        episodeTwo: 'Attack of the Clones',
        episodeThree: 'Revenge of the Sith'
    },
    {
        episodeFour: 'A New Hope',
        episodeFive: 'The Empire Strikes Back',
        episodeSix: 'Return of the Jedi'
    },
    {
        episodeSeven: 'The Force Awakens',
        episodeEight: 'The Last Jedi',
        episodeNine: 'The Rise of Skywalker'
    }
];

// 6b
starWarsMovies.splice(1, 0, {soloMovie: 'Solo', roughOne: 'Rough One'})
console.log(starWarsMovies);