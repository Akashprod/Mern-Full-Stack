let container  = document.querySelector("main");

const getData = async () => {
    try {
        let response = await fetch('http://localhost:3000/posts');
        let data =  await response.json();

    console.log(data);
    } catch (error) {
        console.log(error);
    }   
}

getData();

const postData = async () => {
    let newData = {id: '3', title: 'my title', views: 300};
    try {
        let response = await fetch('http://localhost:3000/posts',{
            method : "POST",
            body : JSON.stringify(newData),
            headers : {
                "Content-Type":"application/json"
            }
        })
    } catch (error) {
        console.log(error);
    }
}