// Récupération Id de la commande (panier.js)
let orderId = localStorage.getItem('orderValidated');
console.log(orderId);

// Récupération du prix total de la commande 
let totalAccount = localStorage.getItem('totalAccount');
console.log(totalAccount);

// Page confirmation de la commande 
let divMain = document.getElementById('confirmation');
let divText = document.createElement('div');
divMain.appendChild(divText);
divText.className = "confirmation_order";

let hThanks = document.createElement('h1');
divMain.appendChild(hThanks);
hThanks.className = "thanks_order";
hThanks.textContent = "Orinoco vous remercie pour votre commande." ;

let divOrder = document.createElement('div');
divMain.appendChild(divOrder);
divOrder.className = "Order";


// Récap de la commande 
let divNumOrder = document.createElement('h2');
divOrder.appendChild(divNumOrder);
divNumOrder.className = "Num_Order";
divNumOrder.textContent = "Votre numéro de commande : " + orderId;

let divTotalOrder = document.createElement('h3');
divOrder.appendChild(divTotalOrder);
divTotalOrder.className = "Total_Order";
divTotalOrder.textContent = "Le montant total de votre commande : " + totalAccount + " €";

let pGoodBye = document.createElement('p');
divMain.appendChild(pGoodBye);
pGoodBye.className = "GoodBye";
pGoodBye.textContent = "En espérant vous revoir bientôt chez Orinoco ! <br /> Toute l'équipe d'orinoco vous souhaite une belle journée."

// Effacer les données ?? après la commande??
