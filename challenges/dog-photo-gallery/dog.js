/*
Let's make a randomized dog photo gallery!

Write a function that makes an API call to `https://dog.ceo/api/breeds/image/random`. It should trigger after clicking a button in your webpage. Every time the button is clicked it should append a new dog image to the DOM.

- Create an `index.html` file that will display your random image
- Add 2 `<button>` and 1 `<ul>` element, either in the HTML or through JavaScript
- When the button is clicked it should make an API call to `https://dog.ceo/api/breeds/image/random`
- After receiving the data, append to the `<ul>` a `<li>` that contains an `<img>` element with the dog image
- Incorporate error handling


*/

let listEl = document.querySelector('.dogImageList')
let addEl = document.querySelector('.addDog')
let delEl = document.querySelector('.deleteDog')
let url = "https://dog.ceo/api/breeds/image/random"

addEl.addEventListener('click', (e) => {
    let img = document.createElement('img');
    img.className = 'image'
    listEl.append(img)

    // add fetch next
})

