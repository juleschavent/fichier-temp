// Query Selector
const container = document.querySelector('#container');
const tbody = document.querySelector('#tbody');
const inputEl = document.querySelector('#input-el');
const btnEl = document.querySelector('#btn-el');
const checkEl = document.querySelector('#check-el');
// Trad type
const traduction = {
    car: "voiture",
    house: "maison",
    show: "spectacle",
    game: "jeu",
    videoGame: "jeux video"
};

// Pour chaque element, ajoute une clé "traduction" correspondant à sa valeure
jsonDatas.forEach(element => {
    if (element.type === "car") {
        element.typeTrad = traduction.car;
    } else if (element.type === "house") {
        element.typeTrad = traduction.house;
    } else if (element.type === "game") {
        element.typeTrad = traduction.game;
    } else if (element.type === "videoGame") {
        element.typeTrad = traduction.videoGame;
    } else if (element.type === "show") {
        element.typeTrad = traduction.show;
    };
});


// Créer une nouvelle row par entrée dans JsonDatas
let newRow = "";

jsonDatas.forEach((element, index) => {
    newRow += `
    <tr>
        <td>${index +1}</td>
        <td>${element.name}</td>
        <td>${element.type}</td>
        <td>${element.typeTrad}</td>
        <td>${element.description}</td>
        <td>${element.price}</td>
        <td>${element.quantity}</td>
    </tr>
    `;
    tbody.innerHTML = newRow;
});


// ON CLICK
// Search et input field
btnEl.addEventListener("click", function () {
    if (inputEl.value !== '') {
        newRow = "";
        jsonDatas.forEach((element, index) => {
            if (element.type == inputEl.value) {
                newRow +=
                    `<tr>
                        <td>${index +1}</td>
                        <td>${element.name}</td>
                        <td>${element.type}</td>
                        <td>${element.typeTrad}</td>
                        <td>${element.description}</td>
                        <td>${element.price}</td>
                        <td>${element.quantity}</td>
                    </tr>`;
            }
        });
        inputEl.value = "";
        tbody.innerHTML = newRow;
    }
})



//CHECKBOX QUANTITY
checkEl.addEventListener('change', function () {
    console.log("change")
    newRow = "";
    jsonDatas.forEach((element, index) => {
        if (element.quantity > 0) {
            newRow +=
                `<tr>
                        <td>${index +1}</td>
                        <td>${element.name}</td>
                        <td>${element.type}</td>
                        <td>${element.typeTrad}</td>
                        <td>${element.description}</td>
                        <td>${element.price}</td>
                        <td>${element.quantity}</td>
                    </tr>`;
        }
    });
    tbody.innerHTML = newRow;
});