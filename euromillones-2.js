const randomNumber = (minRange, maxRange) => {
    return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
};

console.log(randomNumber(1, 50))

let lottoNumbers = [];
let i = 0;

