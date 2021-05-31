
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
        domDivGlobal = document.createElement("div");
        domDivGlobal.className ="Show_Teddy"
        showTeddy.appendChild(domDivGlobal)
        
        // Création de la div pour afficher l'image de l'ourson 
        domImage = document.createElement("div");
        domImage.className="Teddy_Image"
        domDivGlobal.appendChild(domImage)

        domImg = document.createElement("img");
        domImg.className="Teddy_Img"
        domImg.setAttribute("src",data.imageUrl)
        domImg.setAttribute("alt",data.name)
        domImage.appendChild(domImg)
        
        // Création de la div avec l'ensemble des informations sur l'ourson 
        domDataGlobal = document.createElement("div");
        domDataGlobal.className="Teddy_info"
        domDivGlobal.appendChild(domDataGlobal)

        // Création de la div pour englober le nom et prix de l'ourson 
        domData = document.createElement("div")
        domData.className="Info"
        domDataGlobal.appendChild(domData)

        domNom = document.createElement("h3");
        domNom.className="Teddy_Name"
        domNom.textContent=data.name
        domData.appendChild(domNom)

       domPrice = document.createElement("span")
       domPrice.className="Teddy_Price"
       domPrice.textContent=data.price / 100 + " €";
       domData.appendChild(domPrice)

       // Création div pour le choix de couleur de l'ourson 
       domColour = document.createElement("div")
       domColour.className="Teddy_Color"
       domDataGlobal.appendChild(domColour)
        
       // Création d'un label pour indiquer le choix de couleur de l'ourson
        const label = document.createElement("label");
        domColour.appendChild(label)
        label.textContent = "Choissisez sa couleur : ";
        label.setAttribute('for' , "Choix de la couleur de " + data.name)

        // Création d'un selecteur pour choisir la couleur de l'ourson   
        const mySelect = document.createElement("select");
        domColour.appendChild(mySelect) 

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
       domInfo = document.createElement("div")
       domInfo.className="Teddy_Description"
       domInfo.textContent=data.description
       domDataGlobal.appendChild(domInfo)

       // Création d'un élément bouton pour ajouter l'ourson au panier 
       domChoice = document.createElement("button")
       domChoice.className = "btn_like";
       domChoice.textContent = "Ajoutez au panier"
       domDataGlobal.appendChild(domChoice)

       // ajouter lien sur btn pour envoyer vers le panier. Meme méthode que pour avoir le bon nounours
       // méthode push?

       // attention dans le panier si on ajoute 2 produits (local storage??) que le 2nd écrase pas le 1er

    }); 
    


        