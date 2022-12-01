// Import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState, useCallback } from "react";

//COMPONENTS
import Item from "./Item";

// IMPORT SWIPER STYLES
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//STYLES
import classes from "./ItemCarousel.module.css";

//SERVICES
// import { returnAllItem } from "../../Services/returnProducts";
import { returnAllItem } from "../../Services/firestore";
import LoaderPulse from "../Loaders/LoaderPulse";

function ItemCarousel(props) {
  const [arrayProductos, setArrayProductos] = useState([]);

  const callProductsService = useCallback(async () => {
    const result = await returnAllItem();
    setArrayProductos(result);
  }, []);

  useEffect(() => {
    callProductsService();
  }, [callProductsService]);

  return (
    <>
      {arrayProductos.length <= 0 ? (
        <LoaderPulse className={classes.textCenter} />
      ) : (
        <>
          <h2 className={classes.title}>{props.titleCarousel}</h2>
          <Swiper
            className={classes.carousel}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            loop={true}
            breakpoints={{
              800: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {arrayProductos.map((producto) => {
              return (
                <SwiperSlide key={producto.id}>
                  <Item
                    id={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    descuento={producto.descuento}
                    imagen={producto.imagen}
                    categoria={producto.categoria}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      )}
    </>
  );
}

export default ItemCarousel;
