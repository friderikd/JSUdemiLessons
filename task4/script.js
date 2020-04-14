'use strict';

let money, time;

function start() {
  money = +prompt("Your monthly budget?", "");
  time = prompt("Enter date in this format YYYY-MM-DD", "");

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Your monthly budget?", "");
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses : {},
  optionalExpenses: {},
  income: [],
  savings: true,
  choseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Enter obligate expance item in this month", ''),
          b = prompt("How much will it cost?", '');
  
      if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Everyday budget: " + appData.moneyPerDay + "RUR");
  },
  detectLevel: function() {
    if(appData.moneyPerDay < 100) {
      console.log("Minimal income level");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Medium income level");
    } else if (appData.moneyPerDay > 2000) {
      console.log("High income level");
    } else {
      console.log("Error");
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Your savings total sum?", ""),
          percent = +prompt("Your savings percent?", "");
  
          appData.monthIncome = save/100/12*percent;
          alert("Your deposite monthly income: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for (let i = 1; i <= 3; i++) {
      let questionOptExpences = prompt("Not obligate expences item", "");
          appData.optionalExpenses[i] = questionOptExpences;
          console.log(appData.optionalExpences);
    }
  },
  chooseIncome: function() {
    let items = prompt("What will bring additional income? (List with a comma)", "");

    if (typeof(items) != "string" || items == "" || typeof(items) == null ) {
      console.log("You have entered wrong data or no data!");
    } else {
    appData.income = items.split(', ');
    appData.income.push(prompt("Maybe something else?", ""));
    appData.income.sort();
    }

    appData.income.forEach (function (itemmassive, i) {
      alert("Ways of additional income: " + (i+1) + " - " + itemmassive);
    });
  }
};

for (let key in appData) {
  console.log("Our programm includes data: " + key + " - " + appData[key]);
}