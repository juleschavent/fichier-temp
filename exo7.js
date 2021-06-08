// Query Selector
const container = document.querySelector('#container');
const tbody = document.querySelector('#tbody');
const inputEl = document.querySelector('#input-el');
const btnEl = document.querySelector('#btn-el');
const checkEl = document.querySelector('#check-el');
const spanEl = document.querySelector('#span-el')
const spanEl2 = document.querySelector('#span-el2')

// Array qui va servir 
let currArr = [];

// Trad type
const traduction = {
    car: "voiture",
    house: "maison",
    show: "spectacle",
    game: "jeu",
    videoGame: "jeux video"
};

///////////////////////////////////////CONTENT/////////////////////////////////////

// Défini le contenu de base de currArr égale à jsonDatas // AVANT MODIF
for (let i = 0; i < jsonDatas.length; i++) {
    currArr.push(jsonDatas[i]);
}

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


////////////////////////////////FUNCTION////////////////////////////////

//ToHTML // (a) devient un string pour fonctionner dans un .innerHTML
function toHTML(a) {
    let toHTML = "";
    a.forEach((element, index) => {
        toHTML +=
            `<tr>
            <td>${index +1}</td>
            <td>${element.name}</td>
            <td>${element.type}</td>
            <td>${element.typeTrad}</td>
            <td>${element.description}</td>
            <td>${element.price}</td>
            <td>${element.quantity}</td>
        </tr>`;
    });
    return toHTML;
};

// Tri par ordre croissant
function compareUp(a, b) {
    const priceA = a.price;
    const priceB = b.price;

    let comparison = 0;
    if (priceA > priceB) {
        comparison = 1
    } else if (priceA < priceB) {
        comparison = -1;
    }
    return comparison;
};

// Tri par ordre decroissant
function compareDown(a, b) {
    const priceA = a.price;
    const priceB = b.price;

    let comparison = 0;
    if (priceA < priceB) {
        comparison = 1
    } else if (priceA > priceB) {
        comparison = -1;
    }
    return comparison;
};

/////////////////////////////////////////ON CLICK//////////////////////////////////////

// SEARCH BUTTON // Quand Search est click, applique le text de Input pour filtrer ce qui sera affiché dans le tableau. Si rupture de stock est coché, n'affichera pas les Qty à 0. Si input est vide, affiche le tableau d'origine
btnEl.addEventListener('click', function () {
    currArr = [];
    for (let i = 0; i < jsonDatas.length; i++) {
        if (inputEl.value !== '') {
            if (jsonDatas[i].type == inputEl.value && jsonDatas[i].quantity > 0 && checkEl.checked == true) {
                currArr.push(jsonDatas[i]);
            } else if (jsonDatas[i].type == inputEl.value && checkEl.checked == false) {
                currArr.push(jsonDatas[i]);
            };
        } else {
            currArr.push(jsonDatas[i]);
        }
    };
    inputEl.value = "";
    tbody.innerHTML = toHTML(currArr);
});

// SEARCH INPUT // Quand la touche Enter est activée, applique le texte de input filter
inputEl.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault;
        btnEl.click();
    };
});

// SORT BY PRICE // 
spanEl.addEventListener('click', function () {
    currArr.sort(compareUp);
    tbody.innerHTML = toHTML(currArr);
    if (spanEl.style.display === "none") {
        spanEl.style.display = "block";
        spanEl2.style.display = "none";
    } else {
        spanEl.style.display = "none";
        spanEl2.style.display = "block";
    };
});

spanEl2.addEventListener('click', function () {
    currArr.sort(compareDown);
    tbody.innerHTML = toHTML(currArr);
    if (spanEl2.style.display === "none") {
        spanEl2.style.display = "block";
        spanEl.style.display = "none";
    } else {
        spanEl2.style.display = "none";
        spanEl.style.display = "block";
    };
});

// Applique la fonction toHTML() a currArr pour le passer en HTML
tbody.innerHTML = toHTML(currArr);




///////////////////////OLD CODE//////////////////////////
// _____________________________________________

// let newRow = "";

// jsonDatas.forEach((element, index) => {
//     newRow += 
//     `<tr>
//         <td>${index +1}</td>
//         <td>${element.name}</td>
//         <td>${element.type}</td>
//         <td>${element.typeTrad}</td>
//         <td>${element.description}</td>
//         <td>${element.price}</td>
//         <td>${element.quantity}</td>
//     </tr>`;
//     tbody.innerHTML = newRow;
// });


// // ON CLICK
// // Search et input field
// btnEl.addEventListener("click", function () {
//     if (inputEl.value !== '') {
//         newRow = "";
//         jsonDatas.forEach((element, index) => {
//             if (element.type == inputEl.value && checkEl.checked == true && element.quantity > 0) {
//                 newRow +=
//                     `<tr>
//                         <td>${index +1}</td>
//                         <td>${element.name}</td>
//                         <td>${element.type}</td>
//                         <td>${element.typeTrad}</td>
//                         <td>${element.description}</td>
//                         <td>${element.price}</td>
//                         <td>${element.quantity}</td>
//                     </tr>`;
//             } else if (element.type == inputEl.value && checkEl.checked == false) {
//                 newRow +=
//                 `<tr>
//                     <td>${index +1}</td>
//                     <td>${element.name}</td>
//                     <td>${element.type}</td>
//                     <td>${element.typeTrad}</td>
//                     <td>${element.description}</td>
//                     <td>${element.price}</td>
//                     <td>${element.quantity}</td>
//                 </tr>`;
//             }
//         });
//         inputEl.value = "";
//         tbody.innerHTML = newRow;
//     }
// })

// //SORT BY PRICE

// spanEl.addEventListener('click', function(){
//     newRow = "";
//     jsonDatas.sort(compare);
//     jsonDatas.forEach((element, index) => {
//         newRow += 
//         `<tr>
//             <td>${index +1}</td>
//             <td>${element.name}</td>
//             <td>${element.type}</td>
//             <td>${element.typeTrad}</td>
//             <td>${element.description}</td>
//             <td>${element.price}</td>
//             <td>${element.quantity}</td>
//         </tr>`;
//         tbody.innerHTML = newRow;
//     });
// })

// function compare(a, b) {
//     const priceA = a.price;
//     const priceB = b.price;

//     let comparison = 0;
//     if (priceA > priceB) {
//         comparison = 1
//     } else if (priceA < priceB) {
//         comparison = -1;
//     }
//     return comparison;
// };

//Hide quantity zero // pour chaque index de jsonDatas, si qty est plus grande que zéro alors push dans currArr
// function hideQty() {
//     currArr = [];
//     for (let i = 0; i < jsonDatas.length; i++) {
//         if (jsonDatas[i].quantity > 0) {
//             currArr.push(jsonDatas[i]);
//         }
//     };
// };

//Hide quantity zero // pour chaque index de jsonDatas, si qty est plus grande que zéro alors push dans currArr
// function hideQty(x) {
//     for (let i = 0; i < x.length; i++) {
//         if (x[i].quantity > 0) {
//             x.push(x[i]);
//         }
//     };
//     tbody.innerHTML = toHTML(x);
// };
