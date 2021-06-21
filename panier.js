
//************************ CREATION DE LA PAGE PANIER - FAIRE APPARAITRE TOUS LES TEDDY SELECTIONNES ****************************************


let listTeddySelected = localStorage.getItem("listTeddySelected");
if (listTeddySelected == null){
  // Récupérer l'id de mon document html
  const main = document.getElementById("basket");

  // Création d'une div pour montrer les éléments du panier 
  let mainDiv = document.createElement("div")
  mainDiv.className = "show_basket";
  main.appendChild(mainDiv)

  let divText = document.createElement("div")
  divText.className = "Basket_empty"
  divText.textContent = "Votre panier est vide!";
  mainDiv.appendChild(divText)
 
  console.log("Votre panier est vide!")

} else {
    // s'il y a quelque chose dans le panier : récupérer les informations
    console.log("Il y a un produit dans le panier")
    let basket = JSON.parse(listTeddySelected);
    console.log(basket)

    let totalAccount = 0

  //***************************** LE PANIER CONTIENT DES TEDDY -  CREATION DES ELEMENTS DU PANIER ****************************************

    for(let i = 0; i < basket.length; i++){
      console.log(basket[i].productName)
      products = basket[i].idproduct;
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
      divImg = document.createElement("img")
      divImg.setAttribute("src",basket[i].image)
      divImg.setAttribute("alt",basket[i].productName)
      divImg.className = "image_teddy";
      divShow.appendChild(divImg)
    
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

      //************************************* CALCUL MONTANT TOTAL PANIER  ****************************************

     // Creer une div ici pour afficher le montant total du panier 
     const TotalAccount = document.getElementsByTagName("main");
     
     divTotalAccount = document.createElement('div')
     divTotalAccount.className = "Total_Basket";
     divTotalAccount.textContent = "Montant total de votre commande :  " + totalAccount + " €";
     TotalAccount[0].appendChild(divTotalAccount)
     console.log(totalAccount)

     //************************************* CREATION DES BOUTONS DU PANIER  ****************************************

      // Création d'une div pour englober les boutons du panier 
      const ButtonBasket = document.getElementsByTagName("main");

      let divButton = document.createElement("div")
      divButton.className = "basket_button";
      ButtonBasket[0].appendChild(divButton)
     
      // Création d'une div pour supprimer tout le panier 
      let deleteDiv = document.createElement("div")
      divButton.appendChild(deleteDiv)
      deleteDiv.className = "delete_all_basket";
      deleteDiv.textContent = "Supprimer le panier"
      deleteDiv.addEventListener("click", function(event){
        console.log('vider le panier')
        localStorage.removeItem('listTeddySelected')
        // pour supprimer les éléments du panier et revenir à la page html vierge
        document.location.reload()
      })

      //************************************* CREATION DU FORMULAIRE ****************************************
    
       // Création d'un formulaire 
       const form = document.getElementsByTagName("main");

       let divForm = document.createElement("form");
       divForm.id = "order_form";
       form[0].appendChild(divForm)

      let formTitle = document.createElement("h2");
      formTitle.textContent = "Afin de valider votre commande, merci de remplir ce formulaire : "
      divForm.appendChild(formTitle)
      
      // Formulaire - Ajout du prénom 
      let divFirstName = document.createElement("div");
      divFirstName.className = "form_firsname";
      divFirstName.textContent = "Votre prénom : ";
      divFirstName.setAttribute("for","prénom")
      divForm.appendChild(divFirstName)

      let firstName = document.createElement("input");
      divFirstName.appendChild(firstName);
      firstName.setAttribute('type', 'text');
      firstName.setAttribute('id', 'firstname');
      firstName.name = "Prénom"
      firstName.required = true;


      // vérification des informations enregistrées - prénom
      let pfirstname = document.createElement('p')
      pfirstname.setAttribute('id', 'pfirstname');
      divFirstName.appendChild(pfirstname);
      
     
      firstName.addEventListener('change', function(){
       validFirstName(this);
     });
     
      const validFirstName = function (inputFirstName) {
        console.log(inputFirstName)
      let firstnameRegExp = new RegExp(
        '^([a-zA-Z\u0080-\u024F]+(?:. |-| |))*[a-zA-Z\u0080-\u024F]*$', 'g')

          // Test expression régulière
          let testFirstName = firstnameRegExp.test(inputFirstName.value);
          let small = document.getElementById('pfirstname')
          if (testFirstName) {
            small.innerHTML = 'Prénom valide';
            small.classList.remove('text-danger');
            small.classList.add('text-success');
          } else {
            small.innerHTML = "Merci de vérifier les informations remplies, aucun chiffre ou symbole n'est autorisé";
            small.classList.remove('text-success');
            small.classList.add('text-danger');
          }
     };     
      
      // Formulaire - Ajout du nom
      let divLastName = document.createElement("div");
      divLastName.className = "form_lastname";
      divLastName.textContent = "Votre nom : ";
      divLastName.setAttribute("for","nom")
      divForm.appendChild(divLastName)

      let lastName = document.createElement("input");
      divLastName.appendChild(lastName);
      lastName.setAttribute('type', 'text');
      lastName.setAttribute('id', 'lastname');
      lastName.name = "Nom"
      lastName.required = true;


      // vérification des informations enregistrées - nom
            
      let plastname = document.createElement('p')
      plastname.setAttribute('id', 'plastname');
      divLastName.appendChild(plastname);
      
     
     lastName.addEventListener('change', function(){
       validLastName(this);
     });
     
      const validLastName = function (inputLastName) {
        console.log(inputLastName)
      let lastnameRegExp = new RegExp(
        '^([a-zA-Z\u0080-\u024F]+(?:. |-| |))*[a-zA-Z\u0080-\u024F]*$', 'g')

          // Test expression régulière
          let testLastName = lastnameRegExp.test(inputLastName.value);
          let small = document.getElementById('plastname')
          if (testLastName) {
            small.innerHTML = 'Nom de famille valide';
            small.classList.remove('text-danger');
            small.classList.add('text-success');
          } else {
            small.innerHTML = "Merci de vérifier les informations remplies, aucun chiffre ou symbole n'est autorisé";
            small.classList.remove('text-success');
            small.classList.add('text-danger');
          }
     };  

      // Formulaire - Ajout de l'adresse 
      let divAddress = document.createElement("div");
      divAddress.className = "form_adresse";
      divAddress.textContent = "Votre adresse : ";
      divAddress.setAttribute("for","adresse")
      divForm.appendChild(divAddress)

      let address = document.createElement('textarea');
      divAddress.appendChild(address);
      address.setAttribute('type', 'text');
      address.setAttribute('id', 'address');
      address.name = "Adresse"
      address.required = true;


      // vérification des informations enregistrées - adresse  
      
      let paddress = document.createElement('p')
      paddress.setAttribute('id', 'paddress');
      divAddress.appendChild(paddress);
      
     
     address.addEventListener('change', function(){
       validAdress(this);
     });
     
      const validAdress = function (inputAddress) {
          console.log(inputAddress)
        let addressRegExp = new RegExp(
          '(?<h>^[\d]+[ ])(?<s>.+$)|')

          // Test expression régulière
          let testAddress = addressRegExp.test(inputAddress.value);
          let small = document.getElementById('paddress')
          if (testAddress) {
            small.innerHTML = 'Adresse valide';
            small.classList.remove('text-danger');
            small.classList.add('text-success');
          } else {
            small.innerHTML = "Merci de vérifier les informations remplies, aucun chiffre ou symbole n'est autorisé";
            small.classList.remove('text-success');
            small.classList.add('text-danger');
          }
     };

      // Formulaire - Ajout de la ville 
      let divCity = document.createElement("div");
      divCity.className = "form_city";
      divCity.textContent = "Votre ville : ";
      divCity.setAttribute("for","ville")
      divForm.appendChild(divCity)

      let city = document.createElement("input");
      divCity.appendChild(city);
      city.setAttribute('type', 'text');
      city.setAttribute('id', 'city');
      city.name = "Ville"
      city.required = true;
      
      // vérification des informations enregistrées - city
      
      let pcity = document.createElement('p')
      pcity.setAttribute('id', 'pcity');
      divCity.appendChild(pcity);
      
     
     city.addEventListener('change', function(){
       validCity(this);
     });
     
      const validCity = function (inputCity) {
        console.log(inputCity)
          let cityRegExp = new RegExp(
            '^([a-zA-Z\u0080-\u024F]+(?:. |-| |))*[a-zA-Z\u0080-\u024F]*$', 'g')

            // Test expression régulière
            let testCity = cityRegExp.test(inputCity.value);
            let small = document.getElementById('pcity')
            if (testCity) {
              small.innerHTML = 'Adresse valide';
              small.classList.remove('text-danger');
              small.classList.add('text-success');
            } else {
              small.innerHTML = "Merci de vérifier les informations remplies, aucun chiffre ou symbole n'est autorisé";
              small.classList.remove('text-success');
              small.classList.add('text-danger');
            }
     };

      // Formulaire - Ajout de l'email 
      let divEmail = document.createElement("div");
      divEmail.className = "form_email";
      divEmail.textContent = "Votre email : ";
      divEmail.setAttribute("for","email")
      divForm.appendChild(divEmail)

      let email = document.createElement("input");
      divEmail.appendChild(email);
      email.setAttribute('type', 'email');
      email.setAttribute('id', 'email');
      email.name = "Email"
      email.required = true;

      let pemail = document.createElement('p')
      pemail.setAttribute('id', 'pemail');
      divEmail.appendChild(pemail);
      
      // vérification des informations enregistrées - @
     email.addEventListener('change', function(){
       validEmail(this);
     });
     
      const validEmail = function (inputEmail) {
        console.log(inputEmail)
          let emailRegExp = new RegExp(
            '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g')

            // Test expression régulière
            let testEmail = emailRegExp.test(inputEmail.value);
            let small = document.getElementById('pemail')
            if (testEmail) {
              small.innerHTML = 'Adresse valide';
              small.classList.remove('text-danger');
              small.classList.add('text-success');
            } else {
              small.innerHTML = 'Merci de vérifier les informations remplies, votre adresse est invalide';
              small.classList.remove('text-success');
              small.classList.add('text-danger');
            }
     };

 //************************************* CREATION BOUTON VALIDATION PANIER ************************************** 

      // Création d'un bouton validation du panier 
      let validateDiv = document.createElement("div")
      divForm.appendChild(validateDiv)
      validateDiv.id = "validate_basket";
      validateDiv.textContent = "Envoyer la commande"

     
 //************************************* ENVOI DES INFORMATIONS A L'API  ****************************************
      
      // Selection du bouton envoyer le formulaire 
      const ButtonSendForm = document.querySelector("#validate_basket");
    

      // Add event listener sur le bouton d'envoie du formulaire

      // au click ou submit?? 
      ButtonSendForm.addEventListener("click", (e)=> {
        e.preventDefault();
     
        const contact = {
            firstName: document.querySelector("#firstname").value,
            lastName: document.querySelector("#lastname").value,
            address: document.querySelector("#address").value,
            city: document.querySelector("#city").value,
            email: document.querySelector("#email").value
        };

        
     
        console.log('contact');
        console.log(contact);
     
        const send = {
          contact,
          products
        }; 
        
        console.log('send');
        console.log(send);
        console.log(typeof products)
         
        // Mettre contact  dans localStorage
       // localStorage.setItem("send", JSON.stringify({contact, products})); 

        const options = {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json' 
            },
            body: JSON.stringify({
              contact, 
              products
            })
        }
     
        fetch('http://localhost:3000/api/teddies/order', options)

        // 1er then => gère s'il y a une erreur // si il y a une erreur, cette erreur sera convertie en réponse json
            .then(function(response) {
              console.log('coucou')
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function(value) {
                localStorage.setItem("OrderID ", value.orderId);
                window.location = "confirmation_commande.html";
                console.log("Order ID : ", JSON.stringify(value.orderId));

                
            console.log('send')
            console.log(send)
            })
            .catch(function(error) {
                console.log(error);
                console.log('error')
            })

    });
    };