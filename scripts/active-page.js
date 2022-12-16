function setActiveIfCorrectLocation(hyperlink, neededValueOfLocation) {
    if (document.location.href.includes(neededValueOfLocation)) {
        hyperlink.setAttribute("class", hyperlink.getAttribute("class") + " hyperlink_active")
    }
}

menu_hyperlinks = document.getElementsByClassName("hyperlink_menu");
for (let i = 0; i < menu_hyperlinks.length; ++i) {
    switch (menu_hyperlinks[i].innerText) {
        case "Создать":
            setActiveIfCorrectLocation(menu_hyperlinks[i], "game-settings.html")
            break
        case "Присоединиться":
            setActiveIfCorrectLocation(menu_hyperlinks[i], "join-the-game.html")
            break
        case "Правила":
            setActiveIfCorrectLocation(menu_hyperlinks[i], "rules.html")
            break
        case "Персонажи":
            setActiveIfCorrectLocation(menu_hyperlinks[i], "heroes-description.html")
            break
    }
}