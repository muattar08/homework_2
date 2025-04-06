// 1.первая задача
let name = 'Alex';
let account = 7777;
let money = 10000;
let amount = 5000; 

if (name === 'Alex') {
  if (account === 7777) {
    if (money >= amount) {
      console.log('Все отлично');
      console.log('Сняли: ' + amount);
      console.log('Осталось: ' + (money - amount));
    } else {
      console.log('Недостаточно средств');
    }
  } else {
    console.log('Неверный номер счета');
  }
} else {
  console.log('Пользователь не найден, досвидули');
}

// 2.вторая задача
let people = [
    { name: 'Alex', age: 25, cash: 150 },
    { name: 'Bob', age: 30, cash: 90 },
    { name: 'Anna', age: 35, cash: 200 },
    { name: 'Andrew', age: 19, cash: 500 },
    { name: 'Alice', age: 41, cash: 120 }
  ];
  
  let count = 0;
  
  people.forEach(function(person) {
    let nameStartsWithA = person.name[0] === 'A' || person.name[0] === 'a';
    let ageOk = person.age > 20 && person.age <= 40;
    let hasMoney = person.cash > 100;
  
    if (nameStartsWithA && ageOk && hasMoney) {
      console.log(person.name + ' прошёл в клуб');
      count++;
    } else {
      console.log(person.name + ' не прошёл');
    }
  });
  
  console.log('Всего зашло в клуб: ' + count);
  



















