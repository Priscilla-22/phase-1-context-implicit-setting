const byronPoodle = {
  name: 'Byron',
  ageInYears: 2,
  warn: function () {
    console.log(`Bark bark bark`);
    console.log(this);
  },
};
byronPoodle.warn();

const blakeDoodle = {
  name: 'Blake',
  breed: 'Labradoodle',
  sonicAttack: 'ear-rupturing atomic bark',
  mostHatedThing: 'noises in the apartment hallway',
  warn: function () {
    console.log(
      `${this.name} the ${this.breed} issues an ${this.sonicAttack} when he hears ${this.mostHatedThing}`
    );
  },
};

blakeDoodle.warn();

const frog = { name: 'Kermit' };
const pig = { name: 'Miss Piggy' };
const speak = function () {
  return `It ain't easy being ${this.name}`;
};
frog.speak = speak;
// pig.speak = speak;
// frog.speak === pig.speak;
console.log(frog.speak()); 
