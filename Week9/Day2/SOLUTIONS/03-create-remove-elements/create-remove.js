/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");

console.log("add button ", add);

add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image

    // log out everything
    console.log("url ", url);

    const urlParts = url.split("/");
    console.log("url parts ", urlParts);

    const dogBreed = urlParts[4];
    console.log("dog breed ", dogBreed);

    const ul = document.querySelector(".gallery > ul");

    // adding styles
    ul.style.display = "flex";

    const listItem = document.createElement("li");

    listItem.style.border = "2px solid red";

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    /*
    <li>
        <figure>
            <img src="https://images.dog.ceo/breeds/labrador/n02099712_7605.jpg" />
            <figcaption>labrador</figcaption>
        </figure>
    </li>

    */

    img.setAttribute("src", url);
    figcaption.innerText = dogBreed;

    figure.append(img, figcaption);

    listItem.appendChild(figure);

    ul.append(listItem);
    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
  const galleryUl = document.querySelector(".gallery ul");

  const firstDog = galleryUl.children[0];

  firstDog.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
  const allCards = document.querySelectorAll("ul > li");
  const lastCard = allCards[allCards.length - 1];

  lastCard.remove();
});
