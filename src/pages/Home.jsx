import Navbar from "../components/Navbar";
import "react-multi-carousel/lib/styles.css";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <section className="hero">
        <div className="hero-content">
          <h1>Descubre tu Belleza Interior:</h1>
          <h3>Tratamientos Avanzados con Cosmética Natural</h3>
          <Link to="/tratamientos" className="btn">
            Tratamientos
          </Link>
        </div>
        <div className="hero-image"></div>
      </section>
      <section className="carousel-section">
        <div>
          <h1>Contamos con una amplia gama de tratamientos</h1>
          <h3>especializados para el cuidado de su belleza integral.</h3>
        </div>
        <Slider></Slider>
      </section>
      <section id="contact-info" className="contact-info">
        <div className="contact-picture"></div>
        <div className="contact-content">
          <h1>Comuníquese con nosotros</h1>
          <div className="social-icons">
            <div className="social-icons-divs">
              <img src="./public\social.png" alt="Icono Whatsapp" />
              <a href="https://wa.me/541141765033">
                Solicite su turno a través de WhatsApp al número (011) 4176-5033
              </a>
            </div>
            <div className="social-icons-divs">
              <img
                src="./public\icons8-instagram-48.png"
                alt="Icono Instagram"
              />
              <a href="https://www.instagram.com/la_horquetabeauty/">
                Síganos en Instagram para actualizaciones y noticias.
              </a>
            </div>
            <div className="social-icons-divs">
              <img src="./public/icons8-facebook-48.png" alt="Icono Facebook" />
              <a href="https://www.facebook.com/profile.php?id=100054599373767&sk=about">
                Conéctese con nosotros en Facebook.
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
