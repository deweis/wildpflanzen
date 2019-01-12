let drawings = 0; // Show drawings (1) or photographs (0) as default picture

/**************************************************************************************************
 * Helper Function to format the edible months according to the plant properties resp.
 * section on the card (I.e. plant, flower, fruit etc.)
 */
function formatMonths(addClass, edibleMonths) {
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  let edible = months.map((x, i) =>
    edibleMonths.includes(i + 1)
      ? `<span class="${addClass}">${x}&nbsp;</span>`
      : `${x}&nbsp;`
  );
  return edible.join('');
}

/**************************************************************************************************
 * Helper Function to get next image of the array of images per plant
 * I.e. loop through the array
 */
function nextImage(plantId, imageDiv, indexImage) {
  const imageSrc = imageDiv.children[0].src; // get the current image source
  const myRegexp = /img\/(.*)/;
  const imgName = myRegexp.exec(imageSrc)[1]; // extract the img name from the full source
  const thePlantImages = plants.find(x => x.id === plantId).images;

  let nextImg = thePlantImages.findIndex(x => x === imgName); // get the next image from the plants images

  if (indexImage) {
    nextImg = indexImage;
  } else {
    nextImg = nextImg === thePlantImages.length - 1 ? 0 : nextImg + 1; // start from the first again if at last
  }

  return (imageDiv.children[0].src = `img/${thePlantImages[nextImg]}`);
}

/**************************************************************************************************
 * Change Pictures to drawings and vice versa upon title click
 */
document.getElementById('clickableTitle').addEventListener('click', function() {
  drawings = drawings === 0 ? 1 : 0; // Change default of picture type shown
  const imageNodes = document.querySelectorAll('.card-image');

  imageNodes.forEach(node => {
    nextImage(node.parentNode.id, node, drawings);
  });
});

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
      src="img/${plants[i].images[drawings]}"
      alt="${plants[i].latin}"
      id="${plants[i].images[drawings]}"
    />
    <span class="card-title">${plants[i].name}</span>
    `;
    // switch to the next image upon click
    cardImage.addEventListener('click', function() {
      return nextImage(plants[i].id, this);
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
    const edibleLi = document.createElement('li');
    edibleLi.innerHTML = `
    <div class="collapsible-header">
      <i class="fas fa-utensils"></i>${formatMonths(
        'edible',
        plants[i]['months-edible']
      )}
    </div>
    `;
    cardContentList.appendChild(edibleLi);

    const edibleDiv = document.createElement('div');
    edibleDiv.setAttribute('class', 'collapsible-body food-collapsible');
    edibleDiv.innerHTML = `
      <span class="taste">${plants[i].taste}</span>
    `;
    edibleLi.appendChild(edibleDiv);

    const edibleUl = document.createElement('ul');
    edibleUl.setAttribute('class', 'collapsible');
    edibleUl.setAttribute('data-collapsible', 'accordion');
    edibleDiv.appendChild(edibleUl);

    /*******************
     * Section EDIBLE - FLOWERS
     */
    if (plants[i]['months-flowers'].length > 0) {
      const edibleFlowers = document.createElement('li');
      edibleFlowers.setAttribute('class', 'edibleItem');
      edibleFlowers.innerHTML = `
      <div class="collapsible-header">
        <i class="fas fa-haykal"></i></i>${formatMonths(
          'edible-flowers',
          plants[i]['months-flowers']
        )}
      </div>
      <div class="collapsible-body">
        <span>
          ${plants[i].flowers}</span
        >
      </div>
      `;
      edibleUl.appendChild(edibleFlowers);
    }

    /*******************
     * Section EDIBLE - LEAVES
     */
    if (plants[i]['months-leaves'].length > 0) {
      const edibleLeaves = document.createElement('li');
      edibleLeaves.setAttribute('class', 'edibleItem');
      edibleLeaves.innerHTML = `
      <div class="collapsible-header">
        <i class="fas fa-leaf"></i></i>${formatMonths(
          'edible-leaves',
          plants[i]['months-leaves']
        )}
      </div>
      <div class="collapsible-body">
        <span>
          ${plants[i].leaves}</span
        >
      </div>
      `;
      edibleUl.appendChild(edibleLeaves);
    }

    /*******************
     * Section EDIBLE - FRUITS
     */
    if (plants[i]['months-fruits'].length > 0) {
      const edibleFruits = document.createElement('li');
      edibleFruits.setAttribute('class', 'edibleItem');
      edibleFruits.innerHTML = `
      <div class="collapsible-header">
        <i class="fas fa-apple-alt"></i></i>${formatMonths(
          'edible-fruits',
          plants[i]['months-fruits']
        )}
      </div>
      <div class="collapsible-body">
        <span>
          ${plants[i].fruits}</span
        >
      </div>
      `;
      edibleUl.appendChild(edibleFruits);
    }

    /*******************
     * Section EDIBLE - ROOTS
     */
    if (plants[i]['months-roots'].length > 0) {
      const edibleRoots = document.createElement('li');
      edibleRoots.setAttribute('class', 'edibleItem');
      edibleRoots.innerHTML = `
      <div class="collapsible-header">
        <i class="fas fa-carrot"></i></i>${formatMonths(
          'edible-roots',
          plants[i]['months-roots']
        )}
      </div>
      <div class="collapsible-body">
        <span>
          ${plants[i].roots}</span
        >
      </div>
      `;
      edibleUl.appendChild(edibleRoots);
    }

    /********************************************
     * Section MEDICINAL
     */
    const medicinalLi = document.createElement('li');
    medicinalLi.innerHTML = `
      <div class="collapsible-header">
        <i class="fas fa-medkit"></i>Als Medizin
      </div>
      <div class="collapsible-body">
        <span>${plants[i].medicinal}</span>
      </div>
    `;
    cardContentList.appendChild(medicinalLi);

    /********************************************
     * Section INDICATOR
     */
    const indicatorLi = document.createElement('li');
    let ellenberg = '';
    let lightIndicator = '';
    let moistIndicator = '';
    let acidIndicator = '';
    let nitrogenIndicator = '';
    let lifeFormIndicator = '';
    let leafInduranceIndicator = '';
    let arrEllenberg = [];

    if (plants[i].ellenberg !== undefined) {
      // indicator overview
      Object.keys(plants[i].ellenberg).forEach(function(key) {
        arrEllenberg.push(`${key}:${plants[i].ellenberg[key]}`);
      });
      ellenberg = arrEllenberg.join(' | ');

      // get Ellenberg Details (from ellenberg.js)
      lightIndicator = getEllenberg(
        Object.keys(plants[i].ellenberg)[0],
        plants[i].ellenberg['L']
      );

      moistIndicator = getEllenberg(
        Object.keys(plants[i].ellenberg)[3],
        plants[i].ellenberg['F']
      );

      acidIndicator = getEllenberg(
        Object.keys(plants[i].ellenberg)[4],
        plants[i].ellenberg['R']
      );

      nitrogenIndicator = getEllenberg(
        Object.keys(plants[i].ellenberg)[5],
        plants[i].ellenberg['N']
      );

      lifeFormIndicator = getEllenberg(
        Object.keys(plants[i].ellenberg)[7],
        plants[i].ellenberg['LF'][0] // NOTE: only the first taken.. Fix: should loop through and add all!
      );

      leafInduranceIndicator = getEllenberg(
        Object.keys(plants[i].ellenberg)[8],
        plants[i].ellenberg['LF_B']
      );
    }

    indicatorLi.innerHTML = `
      <div class="collapsible-header">
        <i class="far fa-hand-point-right"></i>Als Zeiger
      </div>
      <div class="collapsible-body">
        <span
          >${plants[i].indicator}</span
        ><br><br>
        <div class="Ellenberg"><b>Ellenberg: </b>
        <br>${plants[i].ellenberg === undefined ? 'n/a' : ellenberg}</div>
        ${
          plants[i].ellenberg === undefined
            ? ''
            : '<br><u><b>Licht</b> (' +
              arrEllenberg[0] +
              ')</u><br>' +
              lightIndicator
        }
        ${
          plants[i].ellenberg === undefined
            ? ''
            : '<br><br><u><b>Feuchtigkeit</b> (' +
              arrEllenberg[3] +
              ')</u><br>' +
              moistIndicator
        }
        ${
          plants[i].ellenberg === undefined
            ? ''
            : '<br><br><u><b>Säure</b> (' +
              arrEllenberg[4] +
              ')</u><br>' +
              acidIndicator
        }
        ${
          plants[i].ellenberg === undefined
            ? ''
            : '<br><br><u><b>Stickstoff</b> (' +
              arrEllenberg[5] +
              ')</u><br>' +
              nitrogenIndicator
        }
        ${
          plants[i].ellenberg === undefined
            ? ''
            : '<br><br><u><b>Lebensform</b> (' +
              arrEllenberg[7] +
              ')</u><br>' +
              lifeFormIndicator
        }
        ${
          plants[i].ellenberg === undefined
            ? ''
            : '<br><br><u><b>Blattausdauer</b> (' +
              arrEllenberg[8] +
              ')</u><br>' +
              leafInduranceIndicator
        }
      </div>
    `;
    cardContentList.appendChild(indicatorLi);
  }
};

showPlants();
