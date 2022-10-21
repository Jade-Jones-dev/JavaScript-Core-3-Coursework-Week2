let url = 'https://xkcd.now.sh/?comic=latest'
let imageContainerEl = document.querySelector('.image-container')
let newImageEl = document.querySelector('.new-image')


imageContainerEl.className = Image

fetch(url)
.then((response) => response.json())
.then((data) => console.log(data));
imageContainerEl = <img src = "${data.meassage"/>