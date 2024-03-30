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
console.log(swap('The Quick Brown Fox')); // tHE qUICK bROWN fOX
