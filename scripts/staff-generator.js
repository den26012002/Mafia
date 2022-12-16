!function () {
    const header =
        "<header>" +
        "   <img src = \"../img/logo.png\" class = \"main-image\" />\n" +
        "   <h1 class = \"main-title\">МАФИЯ</h1>\n" +
        "   <figure class = \"quota\">\n" +
        "   <q class=\"text\">Ты приходишь и просишь что-то у меня, но ты просишь без уважения</q>,\n" +
        "    <figcaption class=\"text\"> &ndash; Дон Вито Корлеоне</figcaption>\n" +
        "   </figure>\n" +
        "</header >\n";

    const nav =
        "<nav>\n" +
        "<dl>\n" +
        "   <dt>Играть:</dt>\n" +
        "   <dd><a href=\"game-settings.html\">Создать</a></dd>\n" +
        "   <dd><a href=\"join-the-game.html\">Присоединиться</a></dd>\n" +

        "   <dt>Об игре:</dt>\n" +
        "   <dd><a href=\"rules.html\">Правила</a></dd>\n" +
        "   <dd><a href=\"heroes-description.html\">Персонажи</a></dd>\n" +
        "</dl>\n" +
        "</nav>"
    const headerAndNav = 
    "<div class=\"header-and-nav\">\n" +
        "<header>\n"+
            "<img src=\"../img/logo.png\" class=\"main-image\" />\n" +
            "<h1 class=\"main-title\">Мафия</h1>\n" +
            "<figure class = \"quota\">\n" +
                "<q class=\"text\">Ты приходишь и просишь что-то у меня, но ты просишь без уважения</q>,\n" +
                "<figcaption class=\"text\"> &ndash; Дон Вито Корлеоне</figcaption>\n" +
            "</figure>\n" +
        "</header>\n" +
        "<nav>\n" +
            "<dl>\n" +
                "<dt>Меню</dt>\n" +
                "<dd>\n" +
                    "<dl>\n" +
                        "<dt>Играть:</dt>\n"
                        "<dd><a href=\"pages/game-settings.html\">Создать</a></dd>\n" +
                        "<dd><a href=\"pages/join-the-game.html\">Присоединиться</a></dd>\n" +

                        "<dt>Об игре:</dt>\n" +
                        "<dd><a href=\"pages/rules.html\">Правила</a></dd>\n" +
                        "<dd><a href=\"pages/heroes-description.html\">Персонажи</a></dd>\n" +
                    "</dl>\n" +
                "</dd>\n" +
            "</dl>\n" +
        "</nav>\n" +
    "</div>"

    

    function createLayout() {
        document.body.innerHTML = header + nav + document.body.innerHTML
        var ev = new Event("layoutCreated")
        document.dispatchEvent(ev);
    }

    document.addEventListener('DOMContentLoaded', _ => createLayout())
}();