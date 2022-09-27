let randomBuild = Math.floor(Math.random() * 3);

switch(randomBuild) {
  case 0:
    document.querySelector(".container-a").innerHTML = `
    <a class="featured-build" href="build-parts.html"><img src="https://m.media-amazon.com/images/I/51N2BQA3cBL.jpg"></a>`
    localStorage.setItem("buildClicked", "student");
    break;
  case 1:
    document.querySelector(".container-a").innerHTML = `
    <a class="featured-build" href="build-parts.html"><img src="https://cdna.pcpartpicker.com/static/forever/images/product/604fef5ac9874dffa927a3db98c1188d.256p.jpg"></a>`
    localStorage.setItem("buildClicked", "gaming");
    break;
  case 2:
    document.querySelector(".container-a").innerHTML = `
    <a class="featured-build" href="build-parts.html"><img src="https://cdna.pcpartpicker.com/static/forever/images/product/1ee4eb7d40aaf6bb43c86b4865407c2d.256p.jpg"></a>`
    localStorage.setItem("buildClicked", "pgve");
    break;
}

let randomPart = Math.floor(Math.random() * (parts.length - 1));
randomPart[0]

document.querySelector(".container-b").innerHTML = `
<a href="part-preview.html"><img src=${parts[randomPart].img}></a>
`

localStorage.setItem("partClickedName", parts[randomPart].productName);
localStorage.setItem("partClickedDescription", parts[randomPart].description);
localStorage.setItem("partClickedImage", parts[randomPart].img);
localStorage.setItem("partClickedPrice", parts[randomPart].price);
localStorage.setItem("partClickedLink", parts[randomPart].link);

