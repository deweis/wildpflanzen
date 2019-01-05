/**************************************************************************************************
 * Helper Function to format the edible months according to the plant properties resp.
 * section on the card (I.e. plant, flower, fruit etc.)
 */
function formatMonths(addClass, edibleMonths) {
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  let edible = months.map((x, i) =>
    edibleMonths.includes(i + 1)
      ? `<span class="${addClass}">${x}</span>&nbsp;`
      : `${x}&nbsp;`
  );
  return edible.join('');
}

/**************************************************************************************************
 * Go through the plants object (from plants.js) and add one card per plant
 */
const showPlants = () => {
  const plantsContainer = document.getElementById('plant-container');

  for (let i = 0; i < plants.length; i++) {
    // Create and append the card
    const card = document.createElement('div');
    card.setAttribute('id', `${plants[i].id}`);
    card.setAttribute('class', 'card');
    plantsContainer.appendChild(card);

    /********************************************
     * Create and append the CARD IMAGE
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
    // switch to the next image upon click
    cardImage.addEventListener('click', function() {
      const myString = this.children[0].src; // get the current image source
      const myRegexp = /img\/(.*)/;
      const imgName = myRegexp.exec(myString)[1]; // extract the img name from the full source

      let nextImage = plants[i].images.findIndex(x => x === imgName); // get the next image from the plants images
      nextImage = nextImage === plants[i].images.length - 1 ? 0 : nextImage + 1;
      this.children[0].src = `img/${plants[i].images[nextImage]}`;
    });
    card.appendChild(cardImage);

    /********************************************
     * Add the card content section - I.e. the wrapper
     */
    const cardContent = document.createElement('div');
    cardContent.setAttribute('class', 'card-content');
    card.appendChild(cardContent);

    const cardContentList = document.createElement('ul');
    cardContentList.setAttribute('class', 'collapsible');
    cardContentList.setAttribute('data-collapsible', 'accordion');
    cardContent.appendChild(cardContentList);

    /********************************************
     * Section LATIN NAME / FAMILY NAME / PLANT DESCRIPTION
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

    /********************************************
     * Section EDIBLE
     */
    const cardBodyLi = document.createElement('li');
    cardBodyLi.innerHTML = `
    <div class="collapsible-header">
      <i class="fas fa-utensils"></i>${formatMonths(
        'edible',
        plants[i]['months-edible']
      )}
    </div>
    `;
    cardContentList.appendChild(cardBodyLi);

    const edibleDiv = document.createElement('div');
    edibleDiv.setAttribute('class', 'collapsible-body food-collapsible');
    edibleDiv.innerHTML = `
      <span class="taste">${plants[i].taste}</span>
    `;
    cardBodyLi.appendChild(edibleDiv);

    /*******************
     * Section EDIBLE - FLOWERS
     */

    /********************************************
     * Section MEDICINAL
     */

    /********************************************
     * Section INDICATOR
     */
  }
};

showPlants();
