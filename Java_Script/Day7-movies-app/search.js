let slideShowArray = [
    "https://image-resizer-cloud-api.akamaized.net/image/F1DE08EE-79B3-44CC-90D9-0303FE935BCC/0-3x1.jpg?width=2000&updatedTime=2024-08-30T14:33:20Z&dt=Web",
    "https://image-resizer-cloud-api.akamaized.net/image/3D24C9D0-A513-488B-9CAF-50D4BF2D13C3/0-3x1.jpg?width=2000&updatedTime=2024-08-30T14:37:12Z&dt=Web",
    "https://image-resizer-cloud-api.akamaized.net/image/2CD58353-24C9-4F51-9279-C8E1746D5C1F/0-3x1.jpg?width=2000&updatedTime=2024-08-31T12:12:14Z&dt=Web",
  ];

  function slideShow (){

    let i=0;

    let div = document.querySelector("#carousel");
    let img = document.createElement("img");
    img.src = slideShowArray[0];

    div.append(img);

    setInterval(()=>{
        if (i == slideShowArray.length){
            i=0;
        }
        img.src = slideShowArray[i];
        i++;
      },3000);  
  }

  slideShow();

  //fetching the movies from omdb api

  async function searchMovies() {
    try{
        let loader_div = document.querySelector("#loader_div");
        loader_div.style.display = "block";

        let query = document.querySelector("#query").value;
        
        let response = await fetch(`http://www.omdbapi.com/?apikey=7ae1c82f&s=${query}`);
       
        let data = await response.json();
        console.log(data.Search);
        appendMovies(data.Search);
    }
    catch(error){
        console.log("fetching error",error);
    }
  }

  function appendMovies(data){
    let loader_div = document.querySelector("#loader_div");
        loader_div.style.display = "none";

        let data_movies = document.querySelector("#movies");
        data_movies.innerHTML = "";
        data_movies.id = "movies";

    data.forEach (function (element){
         let div = document.createElement("div");

         let p_title = document.createElement("p");
         p_title.id = "title";
         p_title.innerHTML = `Title : ${element.Title}`;

         let p_year = document.createElement("p");
         p_year.innerHTML = `Year : ${element.Year}`;
         p_year.id="year";

         let p_poster = document.createElement("img");
         p_poster.src = element.Poster;
         p_poster.id = "poster";

         div.append(p_poster,p_title,p_year);
         data_movies.append(div);

         
    });
  }

