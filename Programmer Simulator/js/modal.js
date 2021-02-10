function createLiElements(items) {
    return Object.values(items).map(item => (
        `<li class="modal__item item">
      <div class="item__column">
          <img src="${item.img}" alt="Image">
          <div class="modal__text">
            <p class="modal__name">${item.name}</p>
            <p class="modal__gainer">+ ${item.perClick} за клик</p>
          </div>
      </div>
      <div class="item__column">
         <button class="modal__button">${item.cost}</button>
      </div>
    </li>
   `
    )).join('');
}

function createModal(options) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.insertAdjacentHTML("afterbegin", `
        <div class="modal__body">
            <div class="modal__header">
                <p class="modal__title">${options.header}</p>
                <div class="modal__close" onclick="modalClose()">X</div>
            </div>
            <div class="modal__body">
                <ul class="modal__list">
                    ${createLiElements(options.items)}
                </ul>
            </div>
        </div>
    `);

    document.body.appendChild(modal);
}

function modalClose() {
    document.querySelector(".modal").style.display = "none";
}

const studyingBtn = document.getElementById("studying-modal");
const softwareBtn = document.getElementById("software-modal");
const earningsBtn = document.getElementById("earnings-modal");

studyingBtn.addEventListener("click", function () {
    createModal({
        header: "Изучение языков",
        items: {
            item1: {img: "img/languages/pascal.png", name: "Pascal", perClick: 0, cost: "Куплено"},
            item2: {img: "img/languages/visual-basic.png", name: "Visual Basic", perClick: 2, cost: 900},
            item3: {img: "img/languages/html.png", name: "HTML", perClick: 5, cost: 5100},
            item4: {img: "img/languages/css.png", name: "CSS", perClick: 12, cost: 31000},
            item5: {img: "img/languages/php.png", name: "PHP", perClick: 25, cost: 90000},
            item6: {img: "img/languages/javascript.png", name: "Javascript", perClick: 100, cost: 380000},
            item7: {img: "img/languages/c++.png", name: "C++", perClick: 224, cost: 970000},
            item8: {img: "img/languages/delphi.png", name: "Delphi", perClick: 700, cost: 5000000},
            item9: {img: "img/languages/python.png", name: "Python", perClick: 1680, cost: 12000000},
            item10: {img: "img/languages/java.png", name: "Java", perClick: 3640, cost: 59000000}
        }
    });
});

softwareBtn.addEventListener("click", function () {
    createModal({
        header: "Покупка софта",
        items: {
            item1: {img: "img/software/notebook.png", name: "Блокнот", perClick: 0, cost: "Куплено"},
            item2: {img: "img/software/pascalabc.net.png", name: "PascalABC.net", perClick: 2, cost: 900},
            item3: {img: "img/software/delphi.png", name: "Delphi", perClick: 5, cost: 5100},
            item4: {img: "img/software/notepad++.png", name: "Notepad++", perClick: 12, cost: 31000},
            item5: {img: "img/software/sublime-text.png", name: "Sublime Text", perClick: 25, cost: 90000},
            item6: {img: "img/software/phpstorm.png", name: "Phpstorm", perClick: 100, cost: 380000},
            item7: {img: "img/software/idea.png", name: "IntelliJ Idea", perClick: 224, cost: 970000},
            item8: {img: "img/software/visual-studio.png", name: "Visual Studio", perClick: 700, cost: 5000000},
            item9: {img: "img/software/pycharm.png", name: "Pycharm", perClick: 1680, cost: 12000000},
            item10: {img: "img/software/eclipse.png", name: "Eclipse", perClick: 3640, cost: 59000000}
        }
    });
});

earningsBtn.addEventListener("click", function () {

});