
// Récupérer Id de l'ourson selectionné 
let params = (new URL(document.location)).searchParams;
let id = params.get('id'); 
console.log(id)
       
let url = 'http://localhost:3000/api/teddies/' +id; 
console.log(url)

fetch(url)
  .then(response => response.json())
  .then(data => 
    {
        const showTeddy = document.getElementById("Teddy_info")
        
        // Création div de l'ourson 
        const DivGlobal = document.createElement("div");
        DivGlobal.className ="Show_Teddy"
        showTeddy.appendChild(DivGlobal)
        
        // Création de la div pour afficher l'image de l'ourson 
        const domImage = document.createElement("div");
        domImage.className="Teddy_Image"
        DivGlobal.appendChild(domImage)

        const domImg = document.createElement("img");
        domImg.className="Teddy_Img"
        domImg.setAttribute("src",data.imageUrl)
        domImg.setAttribute("alt",data.name)
        domImage.appendChild(domImg)
        
        // Création de la div avec l'ensemble des informations sur l'ourson 
        const DataGlobal = document.createElement("div");
        DataGlobal.className="Teddy_info"
        DivGlobal.appendChild(DataGlobal)

        // Création de la div pour englober le nom et prix de l'ourson 
        const domData = document.createElement("div")
        domData.className="Info"
        DataGlobal.appendChild(domData)

        const domNom = document.createElement("h3");
        domNom.className="Teddy_Name"
        domNom.textContent=data.name
        domData.appendChild(domNom)

       const domPrice = document.createElement("span")
       domPrice.className="Teddy_Price"
       domPrice.textContent=data.price / 100 + " €";
       domData.appendChild(domPrice)

       // Création div pour le choix de couleur de l'ourson 
       const domForm = document.createElement("form")
       DataGlobal.appendChild(domForm)
       
       const domColour = document.createElement("div")
       domColour.className="Teddy_Colour"
       domForm.appendChild(domColour)
        
       // Création d'un label pour indiquer le choix de couleur de l'ourson
        const domlabel = document.createElement("label")
        domColour.appendChild(domlabel)
        domlabel.textContent = "Choissisez sa couleur : ";
        domlabel.setAttribute('for' , "Choix de la couleur de " + data.name)

        // Création d'un selecteur pour choisir la couleur de l'ourson   
        const mySelect = document.createElement("select");
        domColour.appendChild(mySelect) 
        mySelect.className="select_colour"

        // Affichage des couleurs et choix de la couleur préférée
        // Création d'une boucle avec plusieurs options

        const colors = data.colors;

        for (i = 0; i < colors.length; i++) {
          let myOption = document.createElement("option");
          mySelect.appendChild(myOption);
          myOption.textContent = colors[i];
          myOption.setAttribute("value", colors[i]);
        }

       // Création d'une div pour la description de l'ourson (texte)   
       const domInfo = document.createElement("div")
       domInfo.className="Teddy_Description"
       domInfo.textContent=data.description
       DataGlobal.appendChild(domInfo)

       // Création d'un bouton pour ajouter l'ourson au panier 
       const addTeddy = document.createElement("button")
       addTeddy.className = "btn_like";
       addTeddy.textContent = "Ajoutez au panier"
       domForm.appendChild(addTeddy);

       addTeddy.type = "submit";
       addTeddy.name = "add";
       addTeddy.id = "submit";
      
       
        
       // Lier le bouton au panier 
       // addEvenListener => créer un évent sur mon bouton 
       addTeddy.addEventListener("click", function(event){
         // si l'event n'est pas traité, l'event continue à se propager 
          event.preventDefault();

          // Mettre le choix du formulaire dans une variable (id=submit)
          let teddySelected = {
            productName: data.name,
            idproduct: data._id,
            colors: data.colors,
            quantity: 1,
            price: data.prix / 100
          }
      // data ou submit ou Teddy_info ?? submit = l'id du nounours selectionné 
        })
       
       // Stocker les données des ou du teddy choisi => dans local storage
       
     

    /*
       // Créer une variable Basket qui contient les éléments de mon panier
      function addBasket("submit"){
        let listTeddySelected = getBasket();
        // j'ajoute un teddy dans mon panier via .push
        // ici "Teddy_info" = est l'ID de l'article selectionné
        listTeddySelected.push("submit");
        // enregistre l'article qui vient d'etre ajouter et on lui passe le tableau d'article selectionné
        saveBasket(listTeddySelected);
      }
      
      function getBasket(){
        let listTeddySelected = localStorage.getItem("listTeddySelected");
        // si listTeddySelected n'existe pas => null donc il faut retourner un tableau vide 
        if (listTeddySelected == null){
          return []
        } else 
        // si listTeddySelected existe alors je retourne un JSON.parse de la listTeddySelected      
        return JSON.parse(listTeddySelected);
      }
            
      // serialisation des données       
      function saveBasket(listTeddySelected){
        localStorage.setItem("listTeddySelected",JSON.stringify(listTeddySelected))
      }    

      function clearBasket(listTeddySelected){
        localStorage.clear();
      }


      
    // Faire un popup pour informé que le produit a bien été ajouté au panier
     const confirmationOrder = () => {
       if() {
         // confirmation
       } else {
         // retour à la page produit ("échec de la selection")
       }

     }
      */
    }); 
    


        