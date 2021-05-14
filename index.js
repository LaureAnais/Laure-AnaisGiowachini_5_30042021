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
          console.log(data[i].price)
          domNom = document.createElement("h2")
          domNom.textContent = data[i].name
          myGallery.appendChild(domNom)
        }
    });

