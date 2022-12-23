function loadPeople() {
    var form = document.getElementsByClassName("join-the-game-form")[0];
    form.setAttribute("class", form.getAttribute("class") + " join-the-game-form_hidden");

    var inputFieldGameCode = document.getElementById("field-input-game-code");
    var inputFieldName = document.getElementById("field-input-name");

    var img = document.getElementsByClassName("placeholder-image")[0];
    img.setAttribute("class", "placeholder-image");

    var main = document.getElementsByClassName("main")[0];

    fetch('http://jsonplaceholder.typicode.com/posts/1/comments')
        .then((response) => response.json())
        .then((comments) => {
            var filterNumber = Math.floor(Math.random() * 3) + 1;
            var filterCondition = Math.random() < 0.5 ? "less" : "greater"
        
            var from, to;
            if (filterCondition == "less") {
                from = 0;
                to = filterNumber;
            } else {
                from = filterNumber
                to = comments.length;
            }
            var div = document.createElement("div");
            div.setAttribute("class", "main-banner");
            
            var h2 = document.createElement("h2");
            h2.setAttribute("class", "text text_accent text_center main-banner__title");
            h2.innerText = `Привет, ${inputFieldName.value}. Вы находитесь в игровой комнате ${inputFieldGameCode.value}`;
            div.appendChild(h2);

            var p = document.createElement("p");
            p.setAttribute("class", "text text_center main-banner__description");
            p.innerText = "Уже присоединились:";

            for (var i = from; i < to; i++) {
                var pChild = document.createElement("p");
                pChild.setAttribute("class", "text text_center");
                pChild.innerText = comments[i]["email"];
                p.appendChild(pChild);
            }
            img.setAttribute("class", img.getAttribute("class") + " placeholder-image_hidden");
            div.appendChild(p);
            
            main.appendChild(div);            
        })
        .catch(err => {
            console.log(err);
            var div = document.createElement("div");
            div.setAttribute("class", "main-banner");
            
            var h2 = document.createElement("h2");
            h2.setAttribute("class", "text text_accent text_center main-banner__title");
            h2.innerText = "А всё, кина не будет";
            div.appendChild(h2);
            main.appendChild(div);
        });
}

var button = document.getElementById("join-the-game-button");
button.onclick = () => { loadPeople(); };

document.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        button.click();
    }
});