let shoppingList = ["pane", "latte", "uova", "frutta", "verdure"];

let ul = document.getElementById("shopping-list");

let i = 0;
while (i < shoppingList.length) {
    let li = document.createElement("li");
    li.textContent = shoppingList[i];
    
    ul.appendChild(li);

    i++;
}