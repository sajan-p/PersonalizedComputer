function displayBuild() {
  document.querySelector("#parts-list").innerHTML = "";
  for (part of parts) {
    if (localStorage.getItem("buildClicked") === part.build) {
      switch (part.build) {
        case "gaming":
          document.querySelector("#introduction-parts").innerHTML = `
            <h1>Gaming Enthusiast</h1>`;
          break;
        case "student":
          document.querySelector("#introduction-parts").innerHTML = `
            <h1>Budget Student</h1>`;
          break;
        case "pgve":
          document.querySelector("#introduction-parts").innerHTML = `
            <h1>Photographer/Video Editing</h1>`;
          break;
      }

      const span = document.createElement("span");
      span.innerHTML = `
        <a class="parts-container">
          <div>
            <img src="${part.img}">
          </div>
          <div class="parts-description">
            <h4>${part.productName}</h4>
            <p>$${part.price}</p>
          </div>
        </a>  
      `;

      // console.log(span);

      // span.addEventListener("click", () => {
      //   console.log(span);
      //   localStorage.setItem("partClickedName", part.productName);
      //   localStorage.setItem("partClickedDescription", part.description);
      //   localStorage.setItem("partClickedImage", part.img);
      //   console.log(localStorage.getItem("partClickedName"));
      // });

      // console.log(part);

      document.querySelector("#parts-list").appendChild(span);
    }
  }
}

function displaySoftware() {
    switch(localStorage.getItem("buildClicked")) {
      case "student":
        document.querySelector("#software-list").innerHTML = studentSoftware;
        break;
      case "gaming":
        document.querySelector("#software-list").innerHTML = gamingSoftware;
        break;
      case "pgve":
        document.querySelector("#software-list").innerHTML = videoEditingSoftware;
        break;
    }
}

function addClickListeners() {
  const containers = document.querySelectorAll(".parts-container");
  console.log(containers[0].innerHTML);
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

// 1, 453.19

displayBuild();
displaySoftware();
addClickListeners();
