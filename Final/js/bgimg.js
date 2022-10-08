const imgs = ["0.jpg","1.jpg","2.jpg","3.jpg"];

function randomImg(){
    const body = document.querySelector("body");
    body.style.width = "100%";
    body.style.height ="100%";
    const random = Math.floor(Math.random()*imgs.length);
    const img= `img/${random}.jpg`;
    body.style = `background : url(img/${random}.jpg); background-size : cover; background-repeat : no-repeat`;
}

randomImg();