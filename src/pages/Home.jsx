import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <section className="hero">
        <div className="hero-content">
          <h1>Descubre tu Belleza Interior:</h1>
          <h3>Tratamientos Avanzados con Cosmética Natural</h3>
          <a href="#" className="btn">
            Tratamientos
          </a>
        </div>
        <div className="hero-image"></div>
      </section>
      <section className="contact-info">
        <div className="contact-picture"></div>
        <div className="contact-content">
          <h1>Comunícate con nosotros</h1>
          <div className="social-icons">
            <div className="social-icons-divs">
              <img src="./public\social.png" alt="Icono Whatsapp" />
              <a href="https://wa.me/541141765033">
                Pida su turno por Whatsapp: 011 4176-5033
              </a>
            </div>
            <div className="social-icons-divs">
              <img
                src="./public\icons8-instagram-48.png"
                alt="Icono Instagram"
              />
              <a href="https://www.instagram.com/la_horquetabeauty/">
                Seguinos en Instagram
              </a>
            </div>
            <div className="social-icons-divs">
              <img src="./public/icons8-facebook-48.png" alt="Icono Facebook" />
              <a href="https://www.facebook.com/profile.php?id=100054599373767&sk=about">
                Seguinos en Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
