
const [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for  ( let i = 2, sqrtNum - Math.sqrt(num); i <= sqrtNum; i++) {
        if (num % i === 0) {
            return false; //found a divisor, not prime
        }
    }
    return true; //no divisor found, num is prime
}

function filterPrimes(array) {
    return array.filter(isPrime);
}