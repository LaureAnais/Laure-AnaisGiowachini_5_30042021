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
          console.log(data[i].name)
          domNom = document.createElement("h3")
          domNom.textContent = data[i].name
          myGallery.appendChild(domNom)
        
  
          domNom = document.createElement("h4")
          domNom.textContent = data[i].price
          myGallery.appendChild(domNom)
          console.log(data[i].price)
        }
    });

