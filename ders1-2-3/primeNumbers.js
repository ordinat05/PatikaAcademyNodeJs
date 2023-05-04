// 1 e ve kendisine bölünecek, 1 den büyük pozitif tamsayı olacak
const argumnets = process.argv.slice(2);

function showPrimeNumbers(lownumber, highNumber) {
  for (let i = lownumber; i <= highNumber; i++) {
    let isPrime = true;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}
// showPrimeNumbers(2,9);

showPrimeNumbers(arguments[0], arguments[1]);

console.log(process.argv.slice(2));
