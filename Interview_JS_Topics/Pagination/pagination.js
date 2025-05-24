const mainSection = document.getElementById("data-list-wrapper");
const paginationWrapper = document.getElementById("pagination-wrapper");

function fetchAndRenderUsers(pageNumber){
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`)
    .then((res)=>{

        let totalPosts = res.headers.get("X-Total-Count");
        let totalButtons = Math.ceil(totalPosts/10);
        paginationWrapper.innerHTML=null;

        for(let i=1;i<=totalButtons;i++){
            paginationWrapper.append(getAsButtons(i,i));
        }

        return res.json();
    })
    .then((data)=>{
        console.log(data);
        mainSection.innerHTML=null;
        let cardList = appendingCardList(data);
        mainSection.append(cardList);
    })
    .catch((error)=>{
        console.log(error);
    });
}

fetchAndRenderUsers(1);
console.log(fetchAndRenderUsers);

function appendingCardList(data){
    const cardList = document.createElement("div");
    cardList.classList.add("card-list");

    data.forEach(item => {
        let card = getCard(item.id,item.title,item.body,null);
        cardList.append(card);
    });
    return cardList;
}


function getCard(userId,fullName,body,imageUrl){

    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id",userId);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = userId;

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-item");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = fullName;

    const cardDescription = document.createElement("div");
    cardDescription.innerHTML = body;
    cardDescription.classList.add("card-description");
    cardDescription.classList.add("card-item");

    card.append(cardBody,cardTitle,cardDescription);
    return card;
}

function getAsButtons(text,dataId){

    let btn = document.createElement("button");
    btn.innerHTML = text;
    btn.setAttribute("data-id",dataId);
    btn.style.cursor="pointer";

    btn.addEventListener("click",function(e){
        fetchAndRenderUsers(e.target.dataset.id);
    })
    return btn;
}