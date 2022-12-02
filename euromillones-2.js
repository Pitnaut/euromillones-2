//RNG in a range
const randomNumber = (minRange, maxRange) => {
    return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
};

// numbers added in order in lottoNumbers array
let nsNumbers = new Set()

while (nsNumbers.size < 5)
    nsNumbers.add(randomNumber(1, 50))
let lottoNumbers = [...nsNumbers].sort((a, b) => a - b)

//numbers added in order in starNumbers array
let nsStars = new Set()

while (nsStars.size < 2)
    nsStars.add(randomNumber(1, 12))
let starsNumbers = [...nsStars].sort((a, b) => a - b)


console.log(lottoNumbers)
console.log(starsNumbers)