function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function filterPrimeNumbers(arr) {
    return arr.filter(num => isPrime(num));
  }
  
  // Prompt for user input
  const inputString = prompt('Enter numbers separated by commas (e.g., 1, 2, 3):');
  const inputArray = inputString.split(',').map(num => parseInt(num.trim(), 10));
  
  // Check if input is valid
  if (inputArray.some(isNaN)) {
    console.log('Please enter valid numbers separated by commas.');
  } else {
    const primeNumbers = filterPrimeNumbers(inputArray);
    console.log('Prime numbers:', primeNumbers);
  }