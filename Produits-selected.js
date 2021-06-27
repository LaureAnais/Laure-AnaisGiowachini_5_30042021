

  function addBasket("Teddy_info"){
    let listTeddySelected = getBasket();
    // j'ajoute un teddy dans mon panier via .push
    // ici "Teddy_info" = est l'ID de l'article selectionné
    listTeddySelected.push("Teddy_info");
    // enregistre l'article qui vient d'etre ajouter et on lui passe le tableau d'article selectionné
    saveBasket(listTeddySelected);
  }
  
  function getBasket(){
    let listTeddySelected = localStorage.getItem("listTeddySelected");
    // si listTeddySelected n'existe pas => null donc il faut retourner un tableau vide 
    if (listTeddySelected == null){
      return []
    } else 
    // si listTeddySelected existe alors je retourne un JSON.parse de la listTeddySelected      
     return JSON.parse(listTeddySelected);
  }
        
  // serialisation des données       
  function saveBasket(listTeddySelected){
    localStorage.setItem("listTeddySelected",JSON.stringify(listTeddySelected))
  }    

  