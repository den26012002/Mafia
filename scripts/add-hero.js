var dict = {
    "Мирный житель": "Citizen",
    "Мафия": "Mafia",
    "Комиссар": "Commissar"
}

var select = document.getElementById("hero-select");

for (const [key, _] of Object.entries(dict)) {
    var option = document.createElement("option");
    option.innerText = key;
    select.appendChild(option);
}

function saveToLocalStorage(name, amount) {
    var heroes = [];
    if (typeof localStorage["heroes"] !== "undefined") {
        heroes = JSON.parse(localStorage["heroes"]);
    }

    var hero = {"name": name, "amount": amount}
    heroes.push(hero);
    localStorage["heroes"] = JSON.stringify(heroes);
}

function changLocalStorage(index, name, amount) {
    var heroes = JSON.parse(localStorage["heroes"]);
    heroes[index].name = name;
    heroes[index].amount = amount;
    localStorage["heroes"] = JSON.stringify(heroes);
}

function addHero(name, amount) {
    var divImg = document.createElement("div");
    divImg.setAttribute("class", "table__element table__element_picture");
    var img = document.createElement("img");
    img.setAttribute("src", `../img/heroes/circles/${dict[name]}.png`);
    img.setAttribute("class", "table__image");
    divImg.appendChild(img);

    var divText = document.createElement("div");
    divText.setAttribute("class", "table__element text");
    divText.innerText = name;

    var divInput = document.createElement("div");
    divInput.setAttribute("class", "table__element text");
    var input = document.createElement("input");
    input.setAttribute("class", "text table-cell__number-input number-input");
    input.setAttribute("type", "number");
    input.setAttribute("min", "0");
    input.setAttribute("max", "99");
    input.setAttribute("value", amount);
    input.onchange = () => 
        changLocalStorage(JSON.parse(localStorage["heroes"]).length - 1, name, input.value);
    divInput.appendChild(input);

    select.parentElement.before(divImg);
    select.parentElement.before(divText);
    select.parentElement.before(divInput);


}

var heroes = [];
if (typeof localStorage["heroes"] !== "undefined") {
    heroes = JSON.parse(localStorage["heroes"])
}

for (var i = 0; i < heroes.length; ++i) {
    addHero(heroes[i].name, heroes[i].amount);
}

var button = document.getElementById("add-hero-button")
button.onclick = () => {
    saveToLocalStorage(select.options[select.selectedIndex].text, 1);
    addHero(select.options[select.selectedIndex].text, 1);
}