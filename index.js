fetch('http://localhost:3000/api/teddies')
  .then(response => response.json())
  .then(data => 
    {
      // creation  gallery pour stocker les infos de l'API / ours
        const myGallery = document.getElementById('content')
                
        for(let i=0; i < data.length; i++){  
          myGallery.appendChild(createBlockTeddy(data[i]))
        }    
      
    })
    
  .catch(error => {
     document.getElementById('content').textContent='Erreur avec le serveur'
   });

   function createBlockTeddy (teddy) {
    let doma
    let domDiv
    let domNom
    let domPrice
    let domDiv2
    let domImage 
    doma = document.createElement("a");
    doma.setAttribute("href", "produits.html?id=" + teddy._id);
              
    domDiv = document.createElement("section");
    domDiv.className = "class_teddy";
    doma.appendChild(domDiv)
              
    domDiv2 = document.createElement("figure");
    domDiv2.className = "class_photo";
    domDiv.appendChild(domDiv2)

    domDiv3 = document.createElement("div");
    domDiv3.className = "class_info";
    domDiv.appendChild(domDiv3)
  
    domNom = document.createElement("h2")
    domNom.className = "name_teddy";
    domNom.textContent = teddy.name
    domDiv3.appendChild(domNom)
    
    domPrice = document.createElement("h3")
    domPrice.textContent = teddy.price / 100 + " €"
    domPrice.className = "price_teddy";
    domDiv3.appendChild(domPrice)

    domImage = document.createElement("img")
    domImage.setAttribute("src",teddy.imageUrl)
    domImage.setAttribute("alt",teddy.name)
    domImage.className = "image_teddy";
    domDiv2.appendChild(domImage)
    return(doma)
   }
