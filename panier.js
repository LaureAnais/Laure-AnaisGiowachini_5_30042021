/*// Récupérer l'id de mon document html
let main = document.getElementById("basket");
// attribuer une valeur à main ???? QUOI ???

// Création d'une div pour montrer les éléments du panier 
let maindiv = document.createElement("div")
maindiv.className = "show_basket";
main.appendChild(maindiv) */

// faire apparaitre TOUS les teddy selectionné 

let listTeddySelected = localStorage.getItem("listTeddySelected");
if (listTeddySelected == null){
  console.log("Votre panier est vide!")
}else {
    console.log("Il y a un produit dans le panier")
    let basket = JSON.parse(listTeddySelected);
    console.log(basket)
    for(let i=0; i < basket.length; i++){
      console.log(basket[i].productName)
      // mettre une class à ma div id basket pour rattacher domDiv

     

    }

    
}
/*
// Création d'une div pour donner les infos sur le teddy selectionné 
divShow = document.createElement('div');
divShow.className = "basket_info";
maindiv.appendChild(divShow)

// Création d'une div image pour montrer l'image du teddy selectionné
divImage = document.createElement("div");
divImage.className = "image";
maindiv.appendChild(divImage)

divImg = document.createElement("img")
divImg.setAttribute("src",basket[i].imageUrl)
divImg.setAttribute("alt",basket[i].name)
divImg.className = "image_teddy";
divImage.appendChild(divImg)

// Création d'une div pour le nom du teddy selectionné
divName = document.createElement("div")
divName.className = "name";
divShow.appendChild(divName)

// Création d'une div pour le prix du teddy selectionné
divPrice = document.createElement("div")
divPrice.className = "price";
divShow.appendChild(divPrice)

// Création d'une div pour la quantité du teddy selectionné 
divQuantity = document.createElement("div")
divQuantity.className = "quantity";
divShow.appendChild(divQuantity)

// Création d'un bouton pour supprimer l'ourson selectionné 
const deleteTeddy = document.createElement("button")
deleteTeddy.className = "btn_deleted";
deleteTeddy.textContent = "Supprimer du panier"
divShow.appendChild(deleteTeddy);

deleteTeddy.type ="submit";
deleteTeddy.name = "delete";
deleteTeddy.id ="submit";
*/