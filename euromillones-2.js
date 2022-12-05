//RNG in a range
const randomNumber = (minRange, maxRange) => {
    return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
};

// numbers added in order in lottoNumbers array
let nsNumbers = new Set()

while (nsNumbers.size < 5)
    nsNumbers.add(randomNumber(1, 50))
let getLottoNumbers = [...nsNumbers].sort((a, b) => a - b)

let lottoNumbers = getLottoNumbers.join(', ')


//numbers added in order in starNumbers array
let nsStars = new Set()

while (nsStars.size < 2)
    nsStars.add(randomNumber(1, 12))
let getStarsNumbers = [...nsStars].sort((a, b) => a - b)

let starsNumbers = getStarsNumbers.join(', ')



/* const motSent = () => {
    if (starsNumbers.includes(7)) {
        console.log ("Good luck number, don't buy more tickets")
    } else {
        console.log("Buy another one")
    }
}*/

 let yourName = 'Pit'   

 const yourLottoTicket = () => {
    console.log(`Hello ${yourName}, here is your lotto numbers: ${lottoNumbers}. Your stars are: ${starsNumbers}. ¡Good luck!`)
 }
 
 yourLottoTicket()