import navbar from "./components/navbar.js";
import { appendData } from "./scripts/main.js";

let post_div = document.querySelector("#post");
let nav_div = document.querySelector("#navbar");
    nav_div.innerHTML = navbar();

    const getData = async() => {
        let response = await fetch(`http://localhost:3000/posts`);
            let data = await response.json();
            // console.log(data);
            appendData(data,post_div);
    }
    getData();

