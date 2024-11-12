const date = new Date();
const day = date.getDate();

let currentDay = 1;
switch (day) {
  case 12:
    currentDay = 1;
    break;
  case 16:
    currentDay = 2;
    break;
  default:
    currentDay = 0;
    break;
}

console.log(currentDay);
