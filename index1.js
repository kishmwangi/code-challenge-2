//Swap Case Function
function swap(str) {
    let newTxt = '';
    str.split('').map(e => {
        if (e == e.toUpperCase()) {
            newTxt += e.toLowerCase();
        } else {
            newTxt += e.toUpperCase();
        }
    });
    return newTxt;
}
// Prompt for user input
const userInput = prompt('Enter a string:');
const swappedString = swapCase(userInput);
console.log(swappedString);
console.log(swap('The Quick Brown Fox')); // tHE qUICK bROWN fOX
