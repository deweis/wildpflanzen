const showPlants = () => {
  const plantsContainer = document.getElementById('plant-container');

  // Add one card per plant in the plants object (from plants.js)
  for (let i = 0; i < plants.length; i++) {
    // Create and append the card
    const card = document.createElement('div');
    card.setAttribute('id', `${plants[i].id}`);
    card.setAttribute('class', 'card');
    plantsContainer.appendChild(card);

    /**
     * Create and append the card image
     */
    const cardImage = document.createElement('div');
    cardImage.setAttribute('id', `${plants[i].id}Image`);
    cardImage.setAttribute('class', 'card-image');
    cardImage.innerHTML = `
    <img
      src="img/${plants[i].images[0]}"
      alt="${plants[i].latin}"
      id="${plants[i].images[0]}"
    />
    <span class="card-title">${plants[i].name}</span>
    `;
    cardImage.addEventListener('click', function() {
      const myString = this.children[0].src; // get the current image source
      const myRegexp = /img\/(.*)/;
      const imgName = myRegexp.exec(myString)[1]; // extract the img name from the full source

      let nextImage = plants[i].images.findIndex(x => x === imgName); // get the next image from the plants images
      nextImage = nextImage === plants[i].images.length - 1 ? 0 : nextImage + 1;
      this.children[0].src = `img/${plants[i].images[nextImage]}`;
    });
    card.appendChild(cardImage);

    /**
     * Add the card content section
     */
    const cardContent = document.createElement('div');
    cardContent.setAttribute('class', 'card-content');
    card.appendChild(cardContent);

    const cardContentList = document.createElement('ul');
    cardContentList.setAttribute('class', 'collapsible');
    cardContentList.setAttribute('data-collapsible', 'accordion');
    cardContent.appendChild(cardContentList);

    /**
     * Add the card content header
     */
    const cardHeader = document.createElement('li');
    cardHeader.innerHTML = `
    <div class="collapsible-header">
      <b>${plants[i].latin} - ${plants[i]['family-latin']} (${
      plants[i]['family-name']
    })</b>
    </div>
    <div class="collapsible-body">
      ${plants[i].description}
    </div>
    `;
    cardContentList.appendChild(cardHeader);

    // Add the edible section
    // Add the medicinal section
    // Add the indicator section
  }
};

showPlants();
