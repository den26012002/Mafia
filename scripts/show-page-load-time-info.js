(function() {
    startTime = new Date().getTime();
    document.addEventListener('DOMContentLoaded', () => {
        endTime = new Date().getTime();
        footerDl = document.getElementsByClassName("footer")[0].childNodes[1];
        pageLoadInfo = document.createElement("p");
        pageLoadInfo.setAttribute("class", "text");
        pageLoadInfo.innerText = `Время загрузки страницы:  ${((endTime - startTime) / 1000)} с`;
        footerDl.appendChild(pageLoadInfo);
    });
})();