const movies = [
    {
      name: "RRR",
      rating: 8,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7642/1307642-v-3d3b6c61f97e",
    },
    {
      name: "Goodluck Jerry	",
      rating: 7,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/901/1310901-v-e9763c24f44d",
    },
    {
      name: "MSD",
      rating: 8.5,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
    },
    {
      name: "Doctor Strange",
      rating: 9,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40",
    },
    {
      name: "Ford vs Ferrari",
      rating: 8.7,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3150/813150-v",
    },
    {
      name: "Masaan",
      rating: 8.8,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/7441/1000087441/1000087441-v",
    },
    {
      name: "The lion king",
      rating: 8.4,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v",
    },
  ];
  
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

  function appendMovies(data){
    let data_div = document.querySelector("#basic");
    data_div.innerHTML = "";
    data_div.id = "movies";

    data.forEach((element)=>{
        let div = document.createElement("div");

        let p_name = document.createElement("p");
        p_name.innerHTML = `Name : ${element.name}`;

        let p_rating = document.createElement("p");
        p_rating.innerHTML = `Rating : ${element.rating}`;

        let image = document.createElement("img");
        image.id = "poster"
        image.src = element.img;

        div.append(image,p_name,p_rating);
        data_div.append(div);
    });
    
  }

let myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     let data = movies;
     if(data != null){
        resolve(data);
     }
     else{
        reject("Data not found");
     }
    },3000)
});

async function main () {
    try{
        let response = await myPromise;
        appendMovies(response);
    }
    catch{
        console.log("error",error);
    }
};

main();