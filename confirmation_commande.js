// Récupération Id de la commande (panier.js)
let orderId = localStorage.getItem('OrderID');

// Page confirmation de la commande 
let divMain = document.getElementById('confirmation');
let divText = document.createElement('section');
divMain.appendChild(divText);
divText.className = "confirmation_order";

let hThanks = document.createElement('h2');
divText.appendChild(hThanks);
hThanks.className = "thanks_order";
hThanks.textContent = "Orinoco vous remercie pour votre commande." ;

// Récap de la commande 
let divNumOrder = document.createElement('h3');
divText.appendChild(divNumOrder);
divNumOrder.className = "Num_Order";
divNumOrder.textContent = "Votre numéro de commande : " + orderId;

let pGoodBye = document.createElement('p');
divText.appendChild(pGoodBye);
pGoodBye.className = "GoodBye";
pGoodBye.textContent = "En espérant vous revoir bientôt chez Orinoco ! Toute l'équipe d'orinoco vous souhaite une belle journée. "

// Effacer les données du local Storage 
localStorage.clear();
