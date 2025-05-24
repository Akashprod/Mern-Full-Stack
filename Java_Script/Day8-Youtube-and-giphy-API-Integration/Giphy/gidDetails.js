let APIKEY = "yS7MzEzNZUDZe5eIVYpqYobIZdPjHQx2";

async function details() {
    let id=JSON.parse(localStorage.getItem("details"));

    try {
        let response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}`);
        let data = await response.json();
        console.log(data.data);
        append(data.data);
    } catch (error) {
        console.log(error);
    }
}

details();

function append(data){

    let home2=document.querySelector("#home2");
    home2.innerHTML="";

    let img=document.createElement("img");
    img.src = data.images.downsized.url;
    home2.append(img);
}