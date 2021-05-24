fetch('http://localhost:3000/api/teddies')
  .then(response => response.json())
  .then(data => 
    {
      // creation  gallery pour stocker les infos de l'API / ours
        const myGallery = document.getElementById('content')
        let doma
        let domNom
        let domPrice
        let domDiv2
        let domImage
        console.log(data)
        for(let i=0; i <data.length; i++)
        {      
          /*
          doma = document.createElement("a")
        Comment créer une balise a qui pointe vers le href du nounours / lié à la page produits.html
        je créer une balise a 
        le href est de la produit.html?id=id du nounours data[i]id //vérifier// 
        DomDiv => appendchild sur le lien
        le lien est en appendchild sur myGallery a rajouter à la fin via 
        doma.appendChild(a)*/
          doma = document.createElement("a");
        
          domDiv = document.createElement("div");
          domDiv.className = "class_teddy";
         /* doma.appendChild(domDiv) */
        
          
          domDiv2 = document.createElement("div");
          domDiv2.className = "class_photo";
          domDiv.appendChild(domDiv2)

          domDiv3 = document.createElement("div");
          domDiv3.className = "class_info";
          domDiv.appendChild(domDiv3)

          domDiv4 = document.createElement("div");
          domDiv4.className = "class_choise";
          domDiv.appendChild(domDiv4)
         
          console.log(data[i].name)
          domNom = document.createElement("h3")
          domNom.className = "name_teddy";
          domNom.textContent = data[i].name
          domDiv3.appendChild(domNom)
          
          
          domPrice = document.createElement("h4")
          domPrice.textContent = data[i].price
          domPrice.className = "price_teddy";
         /* domPrice.textContent = '\u20ac'*/
          domDiv3.appendChild(domPrice)

          domImage = document.createElement("img")
          domImage.setAttribute("src",data[i].imageUrl)
          domImage.setAttribute("alt",data[i].name)
          domImage.className = "image_teddy";
          domDiv2.appendChild(domImage)

          myGallery.appendChild(domDiv)
        }    
        
        
   });


    