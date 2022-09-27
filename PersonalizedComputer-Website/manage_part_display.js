
document.querySelector("#introduction-preview").innerHTML =`
  <h1>${localStorage.getItem("partClickedName")}</h1>
` 

/*

  <section id="introduction-preview">

    <h1>Part Preview</h1>

  </section>


*/

document.querySelector("#product-information").innerHTML = `
<div class="info-left">
<p>${localStorage.getItem("partClickedDescription")}</p></p>
<div>
  <h3>$${localStorage.getItem("partClickedPrice")}</h3>
  <p>Tax and shipping included</p>
</div>
</div>

<div class="info-right">
<img src="${localStorage.getItem("partClickedImage")}">
<a href=${localStorage.getItem("partClickedLink")} target=”_blank”><button>Add to cart</button></a>
</div>
`
