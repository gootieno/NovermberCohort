const select = () => {

  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  const seeded = document.getElementsByClassName("seed");
  console.log("seeded ", seeded);
  // 2. Get all seedless fruit elements
  // Your code here
  const seedless = document.getElementsByClassName("seedless");
  console.log("seedless ", seedless);

  // 3. Get first seedless fruit element
  // Your code here
  const firstSeedless = document.getElementsByClassName("seedless")[0];
  console.log("first seedless ", firstSeedless);
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here

  const span = document.querySelector("#wrapper span");
  console.log("you span ", span);
  // 5. Get all children of element "wrapper"
  // Your code here

  const wrapperChildren = document.getElementById("wrapper").children;
  console.log("wrapper children ", wrapperChildren);
  // 6. Get all odd number list items in the list
  // Your code here
  const oddItems = document.getElementsByClassName("odd");
  console.log("odd items ", oddItems);
  // 7. Get all even number list items in the list
  // Your code here
  const evens = document.querySelectorAll("ol > :not(.odd)");
  console.log("evens ", evens);

  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const classLess = document.getElementById("three").querySelectorAll("a")[0];
  console.log("classless ", classLess);
  // 9. Get "Amazon" list element
  // Your code here
  const amazon = document.getElementById("three");
  console.log("amazon ", amazon.children[1].children[2]);
  console.log("amazon ", amazon.children[1].children[2].innerText);
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const unicornImages = document.querySelectorAll(".unicorn");

  unicornImages.forEach((unicorn) => {
    console.log("unicorns 1 ", unicorn.closest("li"));
  });

  const unicorns = document.querySelectorAll("#three > ul")[0].children;
  console.log("unicorns 2 ", unicorns);
};

window.onload = select;
