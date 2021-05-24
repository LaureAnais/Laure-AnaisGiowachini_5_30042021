fetch('http://localhost:3000/api/teddies')
  .then(response => response.json())
  .then(data => 
    {
      // creation  gallery pour stocker les infos de l'API / ours
        const myGallery = document.getElementById('content')
        let domNom
        console.log(data)
        for(let i=0; i <data.length; i++)
        {
         /* console.log(data[i].name)
          domNom = document.createElement("h3")
          domNom.textContent = data[i].name
          myGallery.appendChild(domNom)

          var text = element.textContent("div")
          element.textContent = "Choisissez votre ours préféré"
          console.log(text) */
          
          
          document.getElementById('content').innerHTML += `<div id="content">
        <div class="article_teddy">
            <h3 class="name_teddy">${data[i].name}<h3>
            <p class="price_teddy">${data[i].price}</p>
            <span class="image_teddy"><img src="${data[i].imageUrl}" alt"${data[i].name}"></span>
            <button class="btn"></button>
        </div>
    </div>`
        }    
        /*
        let domPrice
        console.log(data)
        for(let i=0; i <data.length; i++)
          {  console.log(data[i].price)
            domPrice = document.createElement("h4")
            domPrice.textContent = data[i].price
            myGallery.appendChild(domPrice)
          }

        let domImage
        console.log(data)
        for(let i=0; i <data.length; i++)
          {  console.log(data[i].imageUrl)
             domImage = document.createElement("h4")
             domImage.textContent = data[i].imageUrl
             myGallery.appendChild(domImage)
          } 
         */
   });


    
/*
Pourquoi sur le webinar il met le html dans le js?? 
Comment mettre en page les articles 
Avoir 
titre
prix 
bouton -> selectionner votre oursons

document.querySelector('content').innerHTML += `<div id="content">
        <div class="article_teddy">$(article.teddy)
            <h3 class="name_teddy">$(name.teddy)<h3>
            <p class="price_teddy">$(price.teddy)</p>
            <span class="image_teddy"></span>
            <button class="btn"></button>
        </div>
    </div>`
  
     
             domDiv = document.createElement("div");
                    
          console.log(data[i].name)
          domNom = document.createElement("h3")
          domNom.textContent = data[i].name
          domDiv.appendChild(domNom)
          
          domPrice = document.createElement("h4")
          domPrice.textContent = data[i].price
          domDiv.appendChild(domPrice)

         /* domImage = document.createElement("img")
          domImage.setAttribute("src",data[i].imageUrl)
          domImage.setAttribute("alt",data[i].name)
          domDiv.appendChild(domImage)
*/
          myGallery.appendChild(domDiv)      
*/