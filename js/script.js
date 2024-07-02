// Definiamo la lista della spesa
let shoppingList = ["pane", "latte", "uova", "frutta", "verdure"];

// Troviamo l'ul nell'HTML (a cui ho dato un ID)
let ul = document.getElementById("shopping-list");

// Contatore while
let i = 0;
// Iniziamo un ciclo 'while' che va avanti finché 'i' è inferiore alla lunghezza della lista della spesa
while (i < shoppingList.length) {
    // Creiamo un nuovo elemento 'li' (list item) per la lista
    let li = document.createElement("li");
    // Assegniamo al nuovo elemento 'li' il testo dell'elemento attuale della lista degli acquisti
    li.textContent = shoppingList[i];
    
    // Aggiungiamo l'elemento 'li' come figlio dell'elemento 'ul'
    ul.appendChild(li);

    // Incremento contatore
    i++;
}