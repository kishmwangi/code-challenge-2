//Generate Array Function
function generateArray(start, end) {
    let array = [];
    
    if (start <= end) {
      for (let i = start; i <= end; i++) {
        array.push(i);
      }
    } else {
      for (let i = start; i >= end; i--) {
        array.push(i);
      }
    }
    
    return array;
  }

// Prompt for user input
const startNum = parseInt(prompt('Enter the start number:'));
const endNum = parseInt(prompt('Enter the end number:'));

// Check if both inputs are valid numbers
if (!isNaN(startNum) && !isNaN(endNum)) {
  const resultArray = generateArray(startNum, endNum);
  console.log(resultArray);
} else {
  console.log('Please enter valid numbers.');
}

  
