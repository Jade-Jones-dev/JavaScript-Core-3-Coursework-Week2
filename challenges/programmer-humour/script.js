let url = 'https://xkcd.now.sh/?comic=latest'

function programmerHumour() {
  fetch(url)
		.then((response) => {
			if (response.status > 199 && response.status < 300) {
				return response.json();
			} else {
				throw new Error("Error ${response.status} ${response.statusText}");
			}
		})
		.then((data) => {
			let imageContainerEl = document.querySelector(".image-container");
			let img = document.createElement("img");
			img.src = data.img;
			imageContainerEl.appendChild(img);
		})
		.catch((error) => console.log(error));
}

programmerHumour();

// still need to add button when have time to change image 