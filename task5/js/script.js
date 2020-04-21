let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    menuItemLi = document.createElement("li"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    userQuestion = prompt("Ваше отношение к технике Apple?"),
    userAnswer = document.getElementById("prompt");

menu.insertBefore(menuItem[2], menuItem[1]);
menuItemLi.classList.add("menu-item");
menuItemLi.textContent = "Пятый элемент";
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('img/apple_true.jpg')"; 

title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

userAnswer.textContent = userQuestion;



