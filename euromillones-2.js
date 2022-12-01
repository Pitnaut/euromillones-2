//RNG in a range
const randomNumber = (minRange, maxRange) => {
    return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
};

// numbers added in order in lottoNumbers array
let lottoNumbers = [];
let i = 0;

do {
    i = randomNumber(1, 50);
    lottoNumbers.push(i);
    lottoNumbers.sort(function(a, b) {return a - b});
} while (lottoNumbers.length < 5);

//numbers added in order in starNumbers array
let starNumbers = []
let j = 0;

do {
    j = randomNumber(1, 12);
    starNumbers.push(j);
    starNumbers.sort(function(a, b) {return a - b});
} while (starNumbers.length < 2);



console.log(lottoNumbers)
console.log(starNumbers)