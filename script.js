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