// Первая задача
let user = 'Alex'; 
let money = 10000;   
let account = '7777'; 

let inputName = prompt("Введите ваше имя");

let inputPassword = prompt("Введите пароль");

if (inputName === user && inputPassword === account) {
  console.log('Пароль правильный!');
  
  let amountToWithdraw = parseInt(prompt("Сколько денег хотите снять?"));

  if (money >= amountToWithdraw) {
    money -= amountToWithdraw;  
    console.log(`Вы сняли: ${amountToWithdraw}$. Осталось: ${money}$`);
  } else {
    console.log('Недостаточно средств!');
  }
} else {
  console.log('Неверное имя или пароль!');
}


// Вторая задача
let count = 0;
let numberOfPeople = parseInt(prompt("Сколько человек хочет зайти в клуб?"));  

for (let i = 0; i < numberOfPeople; i++) {
let name = prompt("Как вас зовут?");
let age = parseInt(prompt("Сколько вам лет?"));
let cash = parseInt(prompt("Сколько у вас денег?"));
  
let nameStartsWithA = name[0] === 'A' || name[0] === 'a';  
let ageOk = age > 20 && age <= 40;  
let hasMoney = cash > 100;  

if (nameStartsWithA && ageOk && hasMoney) {
console.log(name + ' прошёл в клуб');
count++;
} else {
console.log(name + ' не прошёл');
}
}
console.log('Всего зашло в клуб: ' + count);

