import productsJson from "../data/dataProducts.json";
export function returnSingleItem(id) {
  //   const itemResult = fetch("./src/data/dataProducts.json")
  //     .then((res) => res.json())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log(error));
  let result = productsJson.find((item) => item.id === parseInt(id));

  return result;
}

export function returnAllItem() {
  let result = productsJson;
  return result;
}

export function returnItemsByCategory(idCategory) {
  let result = productsJson.filter(
    (item) => item.idCategoria === parseInt(idCategory)
  );
  return result;
}

// fetch(
//   "https://example.com?" +
//     new URLSearchParams({
//       foo: "value",
//       bar: 2,
//     })
// );
