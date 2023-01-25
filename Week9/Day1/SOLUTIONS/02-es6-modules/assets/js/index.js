import Game from "./game.js";
import { sayHi } from "./utilities.js";

// import file      export file
// bananable        export {}

window.onload = () => {
  const game = new Game();
  game.start();
};
