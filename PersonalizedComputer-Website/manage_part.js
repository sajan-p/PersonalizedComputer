let textValue = "";

function filter(category) {
  partFilter.forEach(part => {
    if (part.category === category) {
      part.enabled = !part.enabled;
      displayParts();
      createPart();
      addClickListeners();
    }
  })
}

function displayParts() {
  partFilter.forEach(part => {
    if (!part.enabled) document.querySelector(`#filter_${part.category}`).className = "";
    else document.querySelector(`#filter_${part.category}`).className = "active";
  })
}

function createPart() {
  document.querySelector("#parts-list").innerHTML = "";

  for (part of parts) {
    for (pf of partFilter) {
      if (part.category === pf.category) {
        let partSlice = part.productName.slice(0, textValue.length);

        if (pf.enabled && partSlice.toUpperCase() === textValue.toUpperCase()) {
          document.querySelector("#parts-list").innerHTML += `
          <a class="parts-container">
            <div>
              <img src="${part.img}">
            </div>
            <div class="parts-description">
              <h4>${part.productName}</h4>
              <p>$${part.price}</p>
            </div>
          </a>  
        `
        continue;
        }
      }
    }
  }
}

function addClickListeners() {
  const containers = document.querySelectorAll(".parts-container");
  for (container of containers) {
    let containerText = container.innerHTML;
    let productName = "";
    // Go through each letter in the HTML until you find <h4>, then put the title inside an array and then go to the parts loop and find the correct one and then link it with the localStorage
    for (let i = 0; i < containerText.length; i++) {
      if (containerText[i] + containerText[i + 1] + containerText[i + 2] === "<h4") {
        for (let j = i; j < containerText.length; j++) {
          if (containerText[j] + containerText[j + 1] + containerText[j + 2] === "</h") {
            productName = productName.slice(4);
            break;
          }
          productName += containerText[j];
        }
      } else if (productName.length > 0) {
        container.onclick = () => {
          for (part of parts) { 
            if (part.productName === productName) {
              localStorage.setItem("partClickedName", part.productName);
              localStorage.setItem("partClickedDescription", part.description);
              localStorage.setItem("partClickedImage", part.img);
              localStorage.setItem("partClickedPrice", part.price);
              localStorage.setItem("partClickedLink", part.link);
              location.href="part-preview.html";
            }
          }
        }
      }
    }
  }
}

document.querySelector(".enable-button").onclick = () => {
  for (part of partFilter) {
    part.enabled = true;
    displayParts();
    createPart();
  }
}

document.querySelector(".disable-button").onclick = () => {
  for (part of partFilter) {
    part.enabled = false;
    displayParts();
    createPart();
  }
}

console.log(document.querySelector(".search-bar input"))

createPart();
addClickListeners();

document.querySelector(".search-bar-input").addEventListener("change", () => {
  textValue = document.querySelector(".search-bar-input").value;
  createPart();
  addClickListeners();
})