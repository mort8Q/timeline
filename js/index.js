
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var newCards = cards.slice(0);
console.log(newCards)
var columnOne = document.querySelectorAll('div')
for (var element of columnOne) {
    if(element.id != 'main' && element.className != 'container') {
    shuffle(newCards);
    image = document.createElement('img');
    image.setAttribute('src', `${newCards[0]['image']}`)
    element.appendChild(image);
    }
}