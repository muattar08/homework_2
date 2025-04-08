<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Банкомат и Клуб</title>
</head>
<body>
  <script>
    // Первая задача — Банкомат
    const userData = {
      username: "Alex",
      password: "7777",
      balance: 10000,
    };

    const inputName = prompt("Введите ваше имя");
    const inputPassword = prompt("Введите пароль");

    if (inputName === userData.username && inputPassword === userData.password) {
      alert("Пароль правильный!");
      const amount = parseInt(prompt("Сколько денег хотите снять?"));

      if (!isNaN(amount) && amount > 0 && amount <= userData.balance) {
        userData.balance -= amount;
        alert("Вы сняли " + amount + "$. Осталось: " + userData.balance + "$.");
      } else {
        alert("Недостаточно средств или введена неверная сумма!");
      }
    } else {
      alert("Неверное имя или пароль!");
    }

    // Вторая задача — Клуб
    let passedCount = 0;
    const totalPeopleRaw = prompt("Сколько человек хочет зайти в клуб?");
    const totalPeople = parseInt(totalPeopleRaw);

    if (!isNaN(totalPeople) && totalPeople > 0) {
      for (let i = 0; i < totalPeople; i++) {
        const name = prompt("Как вас зовут?");
        const age = parseInt(prompt("Сколько вам лет?"));
        const cash = parseInt(prompt("Сколько у вас денег?"));

        let nameStartsWithA = false;
        if (typeof name === "string" && name.length > 0) {
          const firstLetter = name.charAt(0);
          nameStartsWithA = firstLetter === "A" || firstLetter === "a";
        }

        const ageOk = !isNaN(age) && age > 20 && age <= 40;
        const moneyOk = !isNaN(cash) && cash > 100;

        if (nameStartsWithA && ageOk && moneyOk) {
          alert(name + " прошёл в клуб!");
          passedCount++;
        } else {
          alert((name ? name : "Неизвестный") + " не прошёл.");
        }
      }

      alert("Всего зашло в клуб: " + passedCount);
    } else {
      alert("Ошибка: вы не ввели число людей или оно неверное!");
    }
  </script>
</body>
</html>
