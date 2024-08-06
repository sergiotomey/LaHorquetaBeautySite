import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles.css";
import { useNavigate } from "react-router-dom";
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
    url: "../public/f.elconfidencial.com_original_c68_39c_221_c6839c22103ccff94720248b14830748.jpg",
    p: "Venta de Productos",
  },
];
const Slider = () => {
  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/tratamientos?expand=${index}`);
  };

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
        {sliderImageUrl.map((imageUrl, index) => (
          <div
            className="slider"
            key={index}
            onClick={() => handleClick(index)}
          >
            <img src={imageUrl.url} alt={imageUrl.p} />
            <p>{imageUrl.p}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
