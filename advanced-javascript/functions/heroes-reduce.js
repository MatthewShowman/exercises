// Add the total strenghth

const heroes = [
    {name: 'Hulk', strength: 90000, sex: 'm'},
    {name: 'Spider-Man', strength: 25000, sex: 'm'},
    {name: 'Hawk Eye', strength: 136, sex: 'm'},
    {name: 'Thor', strength: 100000, sex: 'm'},
    {name: 'Black Widow', strength: 136, sex: 'f'},
    {name: 'Vision', strength: 5000, sex: 'm'},
    {name: 'Scarlet Witch', strength: 60, sex: 'f'},
    {name: 'Mystique', strength: 120, sex: 'f'},
    {name: 'Namora', strength: 75000, sex: 'f'},
];

function totalStrength(heroArray) {
    let strength =  heroArray.reduce(function(total, current) {
        return total + current.strength;
    }, 0);
    return strength;
}

console.log(totalStrength(heroes));




function totalStrengthArrow(heroArray) {
    return heroArray.reduce((total, current) => total + current.strength, 0);
}

console.log(totalStrengthArrow(heroes));



// Find the strongest hero

let strongestHero = heroes.reduce(function(strongest, contender) {
    if (contender.strength > strongest.strength) {
        return contender;
    } else {
        return strongest;
    }
}, { strength: 0 });

console.log(`The strongest hero is ${strongestHero.name} with strength of ${strongestHero.strength}`);



let strongestHeroArrow = heroes
    .reduce((strongest, contender) => (contender.strength > strongest.strength) ? contender : strongest, { strength: 0 });
console.log(strongestHeroArrow);


// Find the total strength by gender
let femaleStrength = heroes
    .filter(hero => hero.sex === 'f')
    .reduce((currentTotal, nextHero) => currentTotal + nextHero.strength, 0);
console.log(`Female stregnth is ${femaleStrength}`);



let maleStrength = heroes
    .filter(hero => hero.sex === 'm')
    .reduce((currentTotal, nextHero) => currentTotal + nextHero.strength, 0);
console.log(`Male strength is ${maleStrength}`);



// Find all the heroes with a strength greater than 500

let over500 = heroes.filter(hero => hero.strength > 500);
console.log(over500);