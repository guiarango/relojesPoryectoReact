import { createContext, useState, useEffect, useCallback } from "react";

export const cartContext = createContext();

export function CartContextProvider(props) {
  let [itemsInCart, setItemsInCart] = useState([]);
  let [numberOfItems, setNumberOfItems] = useState(0);
  let [totalBuy, setTotalBuy] = useState(0);

  //Calcular total de la compra en el carrito
  const calculateTotalBuy = useCallback(() => {
    const arrayTotalBuy = itemsInCart.map((item) => item.count * item.precio);
    let totalBuy = arrayTotalBuy.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
    return `$ ${totalBuy}`;
  }, [itemsInCart]);

  //Calcular total de unidades en el carrito
  const sumAllItems = useCallback(() => {
    const arrayCount = itemsInCart.map((item) => item.count);
    let totalCount = arrayCount.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
    return totalCount;
  }, [itemsInCart]);

  //Actualizar total compra y unidades en carrito
  useEffect(() => {
    setNumberOfItems(sumAllItems());
    setTotalBuy(calculateTotalBuy());
  }, [itemsInCart, calculateTotalBuy, sumAllItems]);

  //Agregar un item al carrito
  function addItemToCart(product) {
    const arrayNuevo = [...itemsInCart];
    const indexProductoEnArray = findProductIndex(product.id);

    if (indexProductoEnArray !== -1) {
      arrayNuevo[indexProductoEnArray].count += product.count;
    } else {
      arrayNuevo.push(product);
    }
    setItemsInCart(arrayNuevo);
  }

  //Mostrar todos los items del carrito
  // function showItemsInCart() {
  //   console.log(itemsInCart);
  // }

  //Remover un item del carrito
  function removeItemInCart(id) {
    const arrayNuevo = itemsInCart.filter((item) => item.id !== id);
    setItemsInCart(arrayNuevo);
  }

  //Limpiar el carrito
  function clearCart() {
    setItemsInCart([]);
  }

  //Encontrar el index de un producto en el carrito
  function findProductIndex(id) {
    return itemsInCart.findIndex((item) => item.id === id);
  }

  //Sumar una unidad a un item del carrito
  function sumOneToItem(id) {
    const arrayNuevo = [...itemsInCart];
    const itemIndex = findProductIndex(id);

    if (arrayNuevo[itemIndex].count + 1 <= 10) arrayNuevo[itemIndex].count += 1;

    setItemsInCart(arrayNuevo);
  }
  //Restar una unidad a un item del carrito
  function susOneToItem(id) {
    const arrayNuevo = [...itemsInCart];
    const itemIndex = findProductIndex(id);

    if (arrayNuevo[itemIndex].count - 1 >= 1) arrayNuevo[itemIndex].count -= 1;

    setItemsInCart(arrayNuevo);
  }

  const context = {
    itemsInCart,
    numberOfItems,
    totalBuy,
    clearCart,
    removeItemInCart,
    addItemToCart,
    susOneToItem,
    sumOneToItem,
  };

  return (
    <cartContext.Provider value={context}>
      {props.children}
    </cartContext.Provider>
  );
}
