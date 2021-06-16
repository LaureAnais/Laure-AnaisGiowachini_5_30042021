fetch('http://localhost:3000/api/teddies')
  .then(response => response.json())
  .then(data => 
    {
      // creation  gallery pour stocker les infos de l'API / ours
        const myGallery = document.getElementById('content')
        
        let doma
        let domDiv
        let domNom
        let domPrice
        let domDiv2
        let domImage 
        // let domChoice
        console.log(data)
        for(let i=0; i < data.length; i++)
        {  
          doma = document.createElement("a");
          doma.setAttribute("href", "produits.html?id=" + data[i]._id);
                    
          domDiv = document.createElement("div");
          domDiv.className = "class_teddy";
          doma.appendChild(domDiv)
                    
          domDiv2 = document.createElement("div");
          domDiv2.className = "class_photo";
          domDiv.appendChild(domDiv2)

          domDiv3 = document.createElement("div");
          domDiv3.className = "class_info";
          domDiv.appendChild(domDiv3)

          domDiv4 = document.createElement("div");
          domDiv4.className = "class_choice";
          domDiv.appendChild(domDiv4)
         
          console.log(data[i].name)
          domNom = document.createElement("h3")
          domNom.className = "name_teddy";
          domNom.textContent = data[i].name
          domDiv3.appendChild(domNom)
          
          domPrice = document.createElement("h4")
          domPrice.textContent = data[i].price / 100 + " €"
          domPrice.className = "price_teddy";
          domDiv3.appendChild(domPrice)

          domImage = document.createElement("img")
          domImage.setAttribute("src",data[i].imageUrl)
          domImage.setAttribute("alt",data[i].name)
          domImage.className = "image_teddy";
          domDiv2.appendChild(domImage)
          
          myGallery.appendChild(doma)
        }    

      
   })
   .catch(error => {
     document.getElementById('content').textContent='Erreur avec le serveur'
   });

