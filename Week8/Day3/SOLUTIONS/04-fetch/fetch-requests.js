/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here

fetch("/products")
  .then(res => console.log(res.status));

(async function () {
  const res = await fetch("/products");
  console.log(res.status);
})();

const productFetch = async () => {
  const response = await fetch('/products');
  console.log(response);
  console.log(response.status);
  return response;
}


/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here
fetch("/products")
  .then(res => console.log(res.ok));

// using async/await
(async function () {
  const res = await fetch("/products");
  console.log(res.ok);
})();

const productFetch = async () => {
  const response = await fetch('/products');
  console.log(response.status);
  console.log(response.ok);
  return response;
}


/* =================== 3. Print the Content-Type Header =================== */

// Your code here
fetch("/products")
  .then(res => console.log(res.headers.get('Content-Type')));

// using async/await
(async function () {
  const res = await fetch("/products");
  res.headers.get('Content-Type');
})();

const productFetch = async () => {
  const response = await fetch('/products');
  console.log(response.status);
  console.log(response.ok);
  console.log(response.headers.get('Content-Type'));
  return response;
}


/* ============== 4. Print the body of the response as text =============== */

// Your code here
fetch("/products")
  .then(res => res.text())
  .then(resBody => console.log(resBody));

// using async/await
(async function () {
  const res = await fetch("/products");
  const resBody = await res.text();
  console.log(resBody);
})();

const productFetch = async () => {
  const response = await fetch('/products');
  const body = await response.text();
  console.log(body);
  return response;
}
