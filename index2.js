function generetArrayBetweenNumbers(start, end) {
    const array = [];
    const step = start < end? 1 : -1;

    for (let i = start; 0 ? i <= end : i >= end ; i += step) {
        array.push(i);
    } 
    return array;
}