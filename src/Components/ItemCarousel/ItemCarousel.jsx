// Import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "../Product/Item";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import classes from "./ItemCarousel.module.css";

function ItemCarousel() {
  let arrayProductos = [
    {
      nombre: "Reloj Hombre 1",
      precio: 100,
      descuento: "10% OFF",
      initialQuantity: 1,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_708244-MLA51799505236_102022-V.webp",
    },
    {
      nombre: "Reloj Hombre 2",
      precio: 200,
      descuento: "20% OFF",
      initialQuantity: 1,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_708321-MCO44278409357_122020-V.webp",
    },
    {
      nombre: "Reloj Mujer 1",
      precio: 300,
      descuento: "30% OFF",
      initialQuantity: 1,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_764733-MCO45994355725_052021-V.webp",
    },
    {
      nombre: "Reloj Mujer 2",
      precio: 400,
      descuento: "40% OFF",
      initialQuantity: 1,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_602177-MCO48270190977_112021-V.webp",
    },
    {
      nombre: "Reloj Niño 1",
      precio: 500,
      descuento: "50% OFF",
      initialQuantity: 1,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_724291-MLA47572197956_092021-V.webp",
    },
    {
      nombre: "Reloj Niño 2",
      precio: 600,
      descuento: "60% OFF",
      initialQuantity: 1,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_607429-MLA47514448251_092021-V.webp",
    },
    {
      nombre: "Reloj Niña 1",
      precio: 700,
      descuento: "70% OFF",
      initialQuantity: 1,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_868544-MCO47117888231_082021-V.webp",
    },
    {
      nombre: "Reloj Niña 2",
      precio: 800,
      descuento: "80% OFF",
      initialQuantity: 11,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_939136-MCO47118247004_082021-V.webp",
    },
  ];
  return (
    <Swiper
      className={classes.carousel}
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      loop={true}
      breakpoints={{
        800: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      }}
    >
      {arrayProductos.map((producto, index) => {
        return (
          <SwiperSlide key={index}>
            <Item
              nombre={producto.nombre}
              precio={producto.precio}
              descuento={producto.descuento}
              imagen={producto.imagen}
              initialQuantity={producto.initialQuantity}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ItemCarousel;
