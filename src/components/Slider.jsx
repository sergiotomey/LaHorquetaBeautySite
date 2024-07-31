import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: "../public/pexels-shvetsa-5069454.jpg",
    p: "Tratamientos Faciales",
  },
  {
    url: "../public/Radiofrecuencia-Corporal-en-Clinica-Premium-Marbella.jpg",
    p: "Tratamientos Corporales",
  },
  //Second image url
  {
    url: "../public/pexels-polina-tankilevitch-3738359.jpg",
    p: "Tratamientos Capilares",
  },
  //Third image url
  {
    url: "../public/517a5d_31288bb1bd204b92b9a212c66da5b0ba~mv2.jpg",
    p: "Maquillaje",
  },

  //Fourth image url

  {
    url: "../public/pexels-kowalievska-1055691.jpg",
    p: "Venta de Productos",
  },
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
              <p>{imageUrl.p}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
