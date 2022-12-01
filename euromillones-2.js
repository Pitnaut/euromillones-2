//RNG in a range
const randomNumber = (minRange, maxRange) => {
    return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
};

//console.log(randomNumber(1, 50))

let getLottoNumbers = [];
let i = 0;
// numbers added in lottoNumbers array
do {
    i = randomNumber(1, 50);
    getLottoNumbers.push(i);
} while (getLottoNumbers.length < 5);


console.log(getLottoNumbers)