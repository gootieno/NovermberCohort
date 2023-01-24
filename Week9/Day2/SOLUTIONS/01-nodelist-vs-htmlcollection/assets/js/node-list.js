export default () => {
  const bodyChildNodes = document.body.childNodes; // NodeList [text, div, text]
  console.log("body child nodes ", bodyChildNodes);

  const div = bodyChildNodes[1]; // NOT bodyChildNodes[0]

  const divChildNodes = Array.from(div.childNodes); // NodeList [text, span, text]
  console.log("div child nodes ", divChildNodes);
  const helloWorld = divChildNodes[0].textContent; // Hello World!\n
  const span = divChildNodes[1]; // <span>Yes!</span>
  // debugger

  for (let i = 0; i < divChildNodes.length; i++) {
    const li = document.createElement("li");
    div.appendChild(li);
    console.log(`ran ${i + 1} iterations`);
    if (i === 5000) break;
  }
};
