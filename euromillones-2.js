//RNG in a range
const randomNumber = (minRange, maxRange) => {
    return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
};

//console.log(randomNumber(1, 50))

let lottoNumbers = [];
let i = 0;
// numbers added in order in lottoNumbers array
do {
    i = randomNumber(1, 50);
    lottoNumbers.push(i);
    lottoNumbers.sort(function(a, b) {return a - b})
} while (lottoNumbers.length < 5);

console.log(lottoNumbers)