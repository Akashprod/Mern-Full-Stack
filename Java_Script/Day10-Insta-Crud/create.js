// import navbar from "./components/navbar.js";

// import { appendData } from "./scripts/main";

// let nav_div = document.querySelector("#navbar");
//     nav_div.innerHTML = navbar();

let image;

let submit_btn = document.querySelector("#submit_btn");
    submit_btn.disabled = "true";

  async function addPost() {
      let title = document.querySelector("#title").value;
      let send_this_data = {title,image};

      try {
        let res = await fetch("http://localhost:3000/posts",{
            method : "POST",
            body : JSON.stringify(send_this_data),
            headers : {"Content-Type" : "application/json"},
        });
        let data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
  }


  let image_API_KEY = "24309e28474427be5715456fb976e971";
  const handleImage = async(event)=>{
    let file = document.querySelector("#image");
    // console.log("1",file);
    let form = new FormData();
    // console.log("2",file.files[0]);
    form.append("image",file.files[0]);

    try {
        let response = await fetch(`https://api.imgbb.com/1/upload?key=${image_API_KEY}`,{
            method : "POST",
            body : form,
        });
    
        let data = await response.json();  
        image= data.data.display_url;
        console.log(image);
        submit_btn.disabled=false;

      } catch (error) {
       console.log(error); 
      }
  }

  async function deletePost() {
    let id = document.querySelector("#delete_id").value;
    let send_this_data = {title,image};

    try {
      let res = await fetch(`http://localhost:3000/posts/${id}`,{
          method : "DELETE",
          headers : {"Content-Type" : "application/json"},
      });
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
}

async function updatePost() {
  let title = document.querySelector("#update_title").value;
  let id = document.querySelector("#update_id").value;
  let send_this_data = {title};

  try {
    let res = await fetch(`http://localhost:3000/posts/${id}`,{
        method : "PATCH",
        body : JSON.stringify(send_this_data),
        headers : {"Content-Type" : "application/json"},
    });
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function replacePost() {
  let title = document.querySelector("#replace_title").value;
  let id = document.querySelector("#replace_id").value;
  let send_this_data = {title};

  try {
    let res = await fetch(`http://localhost:3000/posts/${id}`,{
        method : "PUT",
        body : JSON.stringify(send_this_data),
        headers : {"Content-Type" : "application/json"},
    });
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

 