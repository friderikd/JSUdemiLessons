'use_strict';

let btn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    mSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    ySavingsalue = document.getElementsByClassName("yearsavings-value")[0],
    expensesItem = document.getElementsByClassName("expenses-item"),
    btnExpensesItem = document.getElementsByTagName("button")[0],
    btnOptionalExpenses = document.getElementsByTagName("button")[1],
    btnCountBudget = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    checkSavings = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");