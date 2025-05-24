let APIKEY = "yS7MzEzNZUDZe5eIVYpqYobIZdPjHQx2";

async function main() {
 try {
    let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}`);
    let data = await response.json();
    // console.log(data.data);
    append(data.data);
 } catch (error) {
    console.log(error);
 }   
}

function append(data){
    let main = document.querySelector("#main");
    // let gif = document.querySelector("#gif");
    // let sticker = document.querySelector("#sticker");
    main.innerHTML="";
    // gif.innerHTML="";
    // sticker.innerHTML="";

    data.forEach(element => {
        let img = document.createElement("img");
        img.src= element.images.downsized.url;
        img.style.cursor="pointer";
        img.addEventListener("click",()=>{
            detailed_gif(element.id);
        })
        main.append(img);
    });
}
main();

function detailed_gif(id){
    localStorage.setItem("details",JSON.stringify(id));
    window.location.href="./gifDetails.html"
}

async function gif() {
    let query = document.querySelector("#search").value;
    if(query===""){
        alert("please enter input");
    }else{
        try {
            let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${query}`);
            let data = await response.json();
            // console.log(data.data);
            append(data.data);
            } catch (error) {
             console.log(error);   
            }
    }

}

async function sticker() {
    let query = document.querySelector("#search").value;

    if(query===""){
        alert("Please enter input");
    }else{
        try {
            let response = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=${APIKEY}&q=${query}`);
            let data = await response.json();
            console.log(data.data);
            append(data.data);
        } catch (error) {
            console.log(error);
        }
    }
}