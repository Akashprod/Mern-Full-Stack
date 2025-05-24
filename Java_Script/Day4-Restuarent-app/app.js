const tables = [
    {id : "table1", name : "Table-1", total : 0, items : {} },
    {id : "table2", name : "Table-2", total : 0, items : {} },
    {id : "table3", name : "Table-3", total : 0, items : {} }
];

const menuItems = [
    {id : "item1", name : "Biryani", price : 250.00, type : "main course"},
    {id : "item2", name : "Pizza", price : 200.00, type : "main course"},
    {id : "item3", name : "Panner Tikka", price : 150.00, type : "starter"}
];

document.addEventListener("DOMContentLoaded",() => {
    renderMenu(menuItems);
    renderTables(tables);
});

function renderMenu(menuItems){

    const menuContainer = document.querySelector("#menu-container");
          menuContainer.innerHTML="";

    menuItems.forEach(function (item){
        const menuItem = document.createElement("div");
        menuItem.className="menu-item";
        menuItem.id=item.id;
        menuItem.draggable=true;
        menuItem.dataset.name=item.name;
        menuItem.dataset.type=item.type;
        menuItem.dataset.price=item.price;

        menuItem.innerHTML=`
        <h4>${item.name}</h4>
        <p>${item.price.toFixed(2)} - ${item.type}</p>
        `
        // const itemName = document.createElement("h4");
        // itemName.innerHTML = item.name;

        // const itemPrice = document.createElement("p");
        // itemPrice.innerHTML = item.price;

        // menuItem.append(itemName,itemPrice);

        menuContainer.append(menuItem);
        menuItem.addEventListener("dragstart",dragStart);
    });
}

function renderTables(tables){
    const tableContainer = document.querySelector("#table-container");
    tableContainer.innerHTML="";

    tables.forEach(function (table){
        const tableCard = document.createElement("div");
        tableCard.className = "table-card";
        tableCard.id=table.id;

        tableCard.innerHTML=`
        <h4>${table.name}</h4>
        <p>Total : ${table.total.toFixed(2)}</p>
        <p>Item :${Object.values(table.items).reduce((a,b)=>a+b.quantity,0)} </p>
        `
        tableCard.addEventListener("click",( )=>showOrderDetails(table.id));

        tableContainer.append(tableCard);
        tableCard.addEventListener("dragover",dragOver);
        tableCard.addEventListener("drop",dropItem);
    });

}
function dragStart(e){
    e.dataTransfer.setData("text/plain",e.target.id);
}
function dragOver(e){
    e.preventDefault();
}
function dropItem(e){
    e.preventDefault();
    // console.log("dropped");

    const itemId = e.dataTransfer.getData("text");
    const itemElement = document.getElementById(itemId);

    const itemName = itemElement.dataset.name;
    const itemPrice = parseFloat(itemElement.dataset.price);
    const tableId = e.target.id;

    if(itemName && itemPrice && tables.find((table)=>table.id===tableId)){
        addItemToTable(tableId,itemName,itemPrice);
    }
}

function addItemToTable(tableId,itemName,itemPrice){
const table = tables.find((table)=>table.id===tableId);
    
    if(!table.items[itemName]){
        table.items[itemName]={quantity : 0,price : itemPrice};
    }

    table.items[itemName].quantity++;
    table.total = table.total+itemPrice;

    //update table Card UI
    const tableCard = document.getElementById(tableId);
    tableCard.querySelector("p").textContent=`Total : ${table.total.toFixed(2)}`;
    tableCard.querySelector("p:nth-of-type(2)").innerText=`items:${Object.values(table.items).reduce((a,b)=>a+b.quantity,0)}`;
}

function showOrderDetails(tableId){
    const table = tables.find(table=>table.id===tableId);

    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = "";

    Object.keys(table.items).forEach((itemName)=>{
        const item = table.items[itemName];
        const itemPrice = item.price;

        modalBody.innerHTML = modalBody.innerHTML+`
        <div class="order-item">
        <p> ${itemName}
        <input type="number" value="${item.quantity}" min=0 onchange="updateItemQuantity('${tableId}','${itemName}',this.value)">
         $${itemPrice.toFixed(2)} each
        </p>
        <button onclick="deleteItem('${tableId}','${itemName}')">Delete</button>

        </div>
        `
    });
    modalBody.innerHTML += `<h3>Total : $${table.total.toFixed(2)}</h3>`
    document.querySelector("#order-modal").style.display="flex";
}

document.querySelector(".close-button").addEventListener("click",()=>{
    document.getElementById("order-modal").style.display="none";
})

function updateItemQuantity(tableId,itemName,newQuantity){
    const table = tables.find(table=>table.id===tableId);
    const item = table.items[itemName];
    const oldQuantity = item.quantity;
    const quantityDifference = newQuantity - oldQuantity;
    item.quantity = parseInt(newQuantity);
    table.total += quantityDifference * item.price;

    if(item.quantity<=0){
        deleteItem(tableId,itemName);
    }else{
        //update UI
        const tableCard = document.getElementById(tableId);
        tableCard.querySelector("p").textContent = `Total : $${table.total.toFixed(2)}`
        tableCard.querySelector("p:nth-of-type(2)").innerText=`items:${Object.values(table.items).reduce((a,b)=>a+b.quantity,0)}`;
    }
    //update modal
    showOrderDetails(tableId);
}

function deleteItem(tableId,itemName){
    const table = tables.find(table=>table.id===tableId);
    if(table.items[itemName]){
    const item = table.items[itemName];
    table.total -= item.quantity * item.price;
    delete table.items[itemName];
    }
     //update UI
     const tableCard = document.getElementById(tableId);
     tableCard.querySelector("p").textContent = `Total : $${table.total.toFixed(2)}`
     tableCard.querySelector("p:nth-of-type(2)").innerText=`items:${Object.values(table.items).reduce((a,b)=>a+b.quantity,0)}`;
 
     //update modal
    showOrderDetails(tableId);
}

function filterTable(){
    const searchText = document.getElementById("table-search").value.toLowerCase();
    const filterTables = tables.filter((table)=>table.name.toLowerCase().includes(searchText));
    renderTables(filterTables);
}

function filterMenu(){
    const searchText = document.getElementById("menu-search").value.toLowerCase();
    const filterMenu = menuItems.filter((table)=>table.name.toLowerCase().includes(searchText));
    renderMenu(filterMenu);
}