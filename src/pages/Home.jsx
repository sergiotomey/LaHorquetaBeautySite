import Navbar from "../components/Navbar";
import "react-multi-carousel/lib/styles.css";
import Slider from "../components/Slider";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
function Home() {
  const aboutUsRef = useRef(null);
  const location = useLocation();

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Scroll to the "about-us" section if the URL contains the hash
    if (location.hash === "#about-us") {
      if (aboutUsRef.current) {
        aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <Navbar onScrollToAboutUs={scrollToAboutUs}></Navbar>
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
      <section className="bottom-half">
        <section ref={aboutUsRef} className="sobre-nosotros-container">
          <div className="contact-picture"></div>
          <div className="sobre-nosotros">
            <h1 id="about-us" className="sobre-title">
              Nuestra Mision
            </h1>
            <p className="sobre-description">
              <b> La Horqueta Beauty</b>, nuestra misión es proporcionar un
              servicio integral de estética que celebre la belleza individual y
              promueva el bienestar general. Nos especializamos en:
              <br />
              <br />
              <p>
                <b>Cosmiatría:</b> Nos apasiona el cuidado de la piel y nos
                esforzamos por ofrecer tratamientos personalizados que
                revitalicen y embellezcan. Creemos que una piel saludable es la
                base de una belleza duradera.
              </p>
              <br />
              <p>
                <b>Estilismo:</b> Desde nuestra infancia, el amor por el
                estilismo ha sido parte de nosotros. Transformamos y realzamos
                el cabello con la convicción de que es el accesorio más versátil
                y poderoso para expresar la personalidad.
              </p>
              <br />
              <p>
                <b>Maquillaje:</b> El maquillaje es un arte que resalta la
                belleza única de cada persona. Nosotros, nos comprometemos a
                crear looks que reflejen lo mejor de cada paciente.
              </p>
              <br />
              <p>
                Amamos lo que hacemos y creemos firmemente que trabajar en lo
                que nos apasiona no es solo una ocupación, sino una forma de
                disfrutar y vivir plenamente. Nuestra meta es garantizar que
                cada visita a nuestro centro sea una experiencia de felicidad y
                satisfacción, ayudando a cada cliente a sentirse en armonía
                consigo mismo. En La Horqueta Beauty, nuestra mayor recompensa
                es ver a nuestros clientes radiantes y contentos, sabiendo que
                hemos contribuido a su bienestar y autoestima.
              </p>
            </p>
          </div>
        </section>
      </section>
      <section id="contact-info" className="contact-info">
        <div className="contact-content">
          <div className="contact-card">
            <img
              className="logo-contact"
              src="./public/a637dffc-6c33-4e48-b4eb-b25913179ade 1111(1).png"
              alt=""
            />
            <div className="turno">
              <div className="social-pages">
                <div className="social-picture-div">
                  <a href="https://wa.me/541141765033" target="_blank">
                    <img
                      className="social-images"
                      src="./public/social.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="social-picture-div">
                  <a
                    href="https://www.instagram.com/la_horquetabeauty/"
                    target="_blank"
                  >
                    <img
                      className="social-images"
                      src="./public/icons8-instagram-48.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="social-picture-div">
                  <a
                    href="https://www.facebook.com/profile.php?id=100054599373767&sk=about"
                    target="_blank"
                  >
                    <img
                      className="social-images"
                      src="./public/icons8-facebook-48.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <p className="author">2024 SergioTomey</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
