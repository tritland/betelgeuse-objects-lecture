console.log('script.js has been sourced')
//[name, favorite animal]
var people = [
    ['Canin', 'Uniflitten'],
    ['Charlie','Angler Fish'],
    ['Bobby','Liger'],
    ['Luke','Killer Whale']
];

console.log(people);

//log {person}'s favorite animal is the {favoriteAnimal}
//log for Canin: Canin's favorie animal is the Uniflitten

for (var i = 0; i < people.length; i++) {
    var childrens = people[i]
    console.log(childrens[0] + '\'s favorite animal is the ' + childrens[1]);
    
}