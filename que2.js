
const x = prompt('Enter a first positive integer: ');
const y = prompt('Enter a second positive integer: ');


let min = (x > y) ? x : y;

while (true) {
    if (min % x == 0 && min % y== 0) {
        console.log(`The LCM of ${x} and ${y} is ${min}`);
        break;
    }
    min++;
}