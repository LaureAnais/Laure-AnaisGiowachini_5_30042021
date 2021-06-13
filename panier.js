
// faire apparaitre TOUS les teddy selectionné 

let listTeddySelected = localStorage.getItem("listTeddySelected");
if (listTeddySelected == null){
  // Récupérer l'id de mon document html
  const main = document.getElementById("basket");
  // attribuer une valeur à main ???? QUOI ???

  // Création d'une div pour montrer les éléments du panier 
  let mainDiv = document.createElement("div")
  mainDiv.className = "show_basket";
  main.appendChild(mainDiv)

  let divText = document.createElement("div")
  divText.className = "Basket_empty"
  divText.textContent = "Votre panier est vide!";
  mainDiv.appendChild(divText)
 
 // console.log("Votre panier est vide!")

} else {
    // s'il y a quelque chose dans le panier : récupérer les informations
    console.log("Il y a un produit dans le panier")
    let basket = JSON.parse(listTeddySelected);
    console.log(basket)

    let totalAccount = 0

    for(let i = 0; i < basket.length; i++){
      console.log(basket[i].productName)
      // mettre une class à ma div id basket pour rattacher domDiv

      const main = document.getElementById("basket");
      // attribuer une valeur à main ???? QUOI ???

      // Création d'une div pour montrer les éléments du panier 
      let mainDiv = document.createElement("div")
      mainDiv.className = "show_basket";
      main.appendChild(mainDiv)

      // Création d'une div pour donner les infos sur le teddy selectionné 
      divShow = document.createElement('div');
      divShow.className = "basket_info";
      mainDiv.appendChild(divShow)

      // Création d'une div image pour montrer l'image du teddy selectionné
      divImage = document.createElement("div");
      divImage.className = "image";
      mainDiv.appendChild(divImage)
      /*
      divImg = document.createElement("img")
      divImg.setAttribute("src",basket[i].image)
      divImg.setAttribute("alt",basket[i].productName)
      divImg.className = "image_teddy";
      divImage.appendChild(divImg)
      */

      // Création d'une div pour le nom du teddy selectionné
      divName = document.createElement("div")
      divName.className = "name";
      divName.textContent = basket[i].productName;  
      divShow.appendChild(divName)

      // Création d'une div pour le prix du teddy selectionné
      divPrice = document.createElement("div")
      divPrice.className = "price";
      divPrice.textContent = basket[i].price + " €";  
      totalAccount = totalAccount+Number(basket[i].price)
      divShow.appendChild(divPrice)

      // Création d'une div pour la quantité du teddy selectionné 
      divQuantity = document.createElement("div")
      divQuantity.className = "quantity";
      divQuantity.textContent = "Quantité selectionnée : " + basket[i].quantity + " "; 
      divShow.appendChild(divQuantity)

      // Création d'un bouton pour supprimer l'ourson selectionné 
      const deleteTeddy = document.createElement("button")
      deleteTeddy.className = "btn_deleted";
      deleteTeddy.textContent = "Supprimer"
      divShow.appendChild(deleteTeddy);

      deleteTeddy.name = "delete";
      
      deleteTeddy.addEventListener("click", function(event){
        console.log(i);
        basket.splice(i,1)
        localStorage.setItem("listTeddySelected",JSON.stringify(basket))
        // après la suppression -> rechercher la page
        document.location.reload()
      })  
      
    }
      // Creer une div ici pour afficher le montant total du panier 
      divTotalAccount = document.createElement('div')
      divTotalAccount.className = "Total_Basket";
      divTotalAccount.textContent = "Montant total de votre commande :  "
     // ne fonctionne pas !!!!!!!!!!!!!!! main.appendChild(divTotalAccount)
      console.log(totalAccount)


      // Création d'une div pour supprimer tout le panier 
      const DeleteAll = document.getElementsByTagName("main");

      let deleteDiv = document.createElement("div")
      deleteDiv.className = "delete_all_basket";
      deleteDiv.textContent = "Supprimer le panier"
      deleteDiv.addEventListener("click", function(event){
        console.log('vider le panier')
        localStorage.removeItem('listTeddySelected')
        // pour supprimer les éléments du panier et revenir à la page html vierge
        document.location.reload()
      })
      DeleteAll[0].appendChild(deleteDiv)
    }   

      
 /*
    
       
    // Création d'un formulaire */