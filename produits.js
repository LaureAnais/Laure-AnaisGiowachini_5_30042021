
let params = (new URL(document.location)).searchParams;
let id = params.get('id'); 
console.log(id)

// utiliser cette méthode pour aller chercher le bon id du nounours

// ajouter le bon teddy suivant le choix de l'utilisateur 
       
let url = 'http://localhost:3000/api/teddies/' +id; 
console.log(url)

fetch(url)
  .then(response => response.json())
  .then(data => 
    {
    document.getElementById(teddy_info).innerHTML += `<id class="Selected_teddy">
                                                        <div class="Picture">
                                                            <img src="${data.imageUrl}" alt="${data.name}"></src>
                                                        </div>
                                                        <div class="data_teddy">
                                                            <div class="info">
                                                                <h2 class="name">${data.name}</h2>
                                                                <span>${data.price}</span>
                                                            </div>
                                                            <div class="color_choice">
                                                                        <label for="color_option"${data.colors}>Choix de la couleur</label>
                                                                        <select name="color" id="color_selected" required aria-invalid="false">
                                                                            <option disabled value="" selected>Choix de la couleur</option>
                                                                        </select>
                                                                    </div>
                                                            <div class="quantity">
                                                                        <label for="quantity_ted"${data.quantity}>Quantité souhaitée</label>
                                                                        <select name="quantity" id="quantity_selected">
                                                                            <option value="">Merci de choisir la quantité souhaitée</option>
                                                                            <option value="1">1</option>
                                                                            <option value="2">2</option>
                                                                            <option value="3">3</option>
                                                                            <option value="4">4</option>
                                                                            <option value="5">5</option>
                                                                            <option value="6">6</option>
                                                                        </select>
                                                                    </div>

                                                                    <div class="description"${data.description}></div>
                                                            
                                                            <button class="btn">Ajoutez au panier</button>

                                                        </div>
                                                    </id>`

        
        // afficher le bouton pour ajouter au panier 
        // envoyer la liste des l'identifiant / pas d'envoi de la quantité / la couleur ... 
    });
