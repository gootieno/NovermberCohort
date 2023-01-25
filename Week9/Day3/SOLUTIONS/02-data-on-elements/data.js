// Your code here
const buildShoppingList = () => {
  const shoppingListAdd = document.querySelector("#add");
  //   console.log("form element ", shoppingListAdd);
  shoppingListAdd.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log("event ", event);
    const input = document.getElementById("name");
    console.log("input ", input);
    const shoppingListContainer = document.getElementById("shopping-list");

    const type = document.querySelector("#type").value;

    const listItem = document.createElement("li");
    listItem.innerText = input.value;
    listItem.setAttribute("data-type", type); // giving a custom attribute to our elements

    shoppingListContainer.append(listItem);

    input.value = "";
  });
};

window.onload = buildShoppingList;
