import { createContext, useState, useEffect, useCallback } from "react";

export const cartContext = createContext();

export function CartContextProvider(props) {
  let [itemsInCart, setItemsInCart] = useState([]);
  let [numberOfItems, setNumberOfItems] = useState(0);
  let [totalBuy, setTotalBuy] = useState(0);

  const calculateTotalBuy = useCallback(() => {
    const arrayTotalBuy = itemsInCart.map((item) => item.count * item.precio);
    let totalBuy = arrayTotalBuy.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
    return `$ ${totalBuy}`;
  }, [itemsInCart]);

  const sumAllItems = useCallback(() => {
    const arrayCount = itemsInCart.map((item) => item.count);
    let totalCount = arrayCount.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
    return totalCount;
  }, [itemsInCart]);

  useEffect(() => {
    setNumberOfItems(sumAllItems());
    setTotalBuy(calculateTotalBuy());

    console.log("me ejecuto", itemsInCart);
  }, [itemsInCart]);

  function addItemToCart(product) {
    const arrayNuevo = [...itemsInCart];
    const indexProductoEnArray = findProductIndex(product.id);

    console.log(indexProductoEnArray);
    if (indexProductoEnArray != -1) {
      arrayNuevo[indexProductoEnArray].count += product.count;
    } else {
      arrayNuevo.push(product);
    }

    setItemsInCart(arrayNuevo);
    // setNumberOfItems(sumAllItems());
    // setTotalBuy(calculateTotalBuy());
  }

  function showItemsInCart() {
    console.log(itemsInCart);
  }

  function removeItemInCart(id) {
    const arrayNuevo = itemsInCart.filter((item) => item.id != id);
    setItemsInCart(arrayNuevo);
  }

  // function sumAllItems() {
  //     const arrayCount = itemsInCart.map((item) => item.count);
  //     let totalCount = arrayCount.reduce((previousValue, currentValue) => {
  //       return previousValue + currentValue;
  //     }, 0);
  //     return totalCount;
  //   };

  // function calculateTotalBuy() {
  //   const arrayTotalBuy = itemsInCart.map((item) => item.count * item.precio);
  //   let totalBuy = arrayTotalBuy.reduce((previousValue, currentValue) => {
  //     return previousValue + currentValue;
  //   }, 0);
  //   return `$ ${totalBuy}`;
  // }

  function clearCart() {
    setItemsInCart([]);
    // setNumberOfItems(sumAllItems());
    // setTotalBuy(calculateTotalBuy());
  }

  function findProductIndex(id) {
    return itemsInCart.findIndex((item) => item.id == id);
  }

  function sumOneToItem(id) {
    const arrayNuevo = [...itemsInCart];
    const itemIndex = findProductIndex(id);

    if (arrayNuevo[itemIndex].count + 1 <= 10) arrayNuevo[itemIndex].count += 1;

    setItemsInCart(arrayNuevo);
    // setNumberOfItems(sumAllItems());
    // setTotalBuy(calculateTotalBuy());
  }

  function susOneToItem(id) {
    const arrayNuevo = [...itemsInCart];
    const itemIndex = findProductIndex(id);

    if (arrayNuevo[itemIndex].count - 1 >= 1) arrayNuevo[itemIndex].count -= 1;

    setItemsInCart(arrayNuevo);
    // setNumberOfItems(sumAllItems());
    // setTotalBuy(calculateTotalBuy());
  }

  const context = {
    itemsInCart,
    numberOfItems,
    totalBuy,
    sumAllItems,
    clearCart,
    removeItemInCart,
    addItemToCart,
    showItemsInCart,
    susOneToItem,
    sumOneToItem,
  };

  return (
    <cartContext.Provider value={context}>
      {props.children}
    </cartContext.Provider>
  );
}
