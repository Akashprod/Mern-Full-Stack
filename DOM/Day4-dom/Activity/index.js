console.log("akash");

document.querySelector("form").addEventListener("submit",myList);

function myList(){
    event.preventDefault();

    let name=document.querySelector("#name").value;
    let td1=document.createElement("td");
    td1.innerText=name;

    let quantity=document.querySelector("#qty").value;
    let td2=document.createElement("td");
    td2.innerText=quantity;

    let priority=document.querySelector("#prt").value;
    let td3=document.createElement("td");
    td3.innerText=priority;

    let tr=document.createElement("tr");
    tr.append(td1,td2,td3);

    document.querySelector("tbody").append(tr);
    document.querySelector("#name").value="";
    document.querySelector("#qty").value="";

}