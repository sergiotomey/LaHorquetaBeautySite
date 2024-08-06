import { useState } from "react";
import Navbar from "../components/Navbar";
import "/src/tratamientos.css";
import { useRef } from "react";

const tratamientosData = [
  {
    imageUrl: "./public/pexels-shvetsa-5069454.jpg",
    labelText: "Tratamientos Faciales",
    htmlContent: `
    <h1>Tratamientos Faciales</h1>
    <p class="tratamientos-description">Realza tu belleza natural y rejuvenece tu rostro con tratamientos faciales. Ofrecemos tratamientos como:</p>
    <ul class="tratamientos-list">
    <li>Peelings Químicos y Mecánicos</li>
    <li>Tratamientos Antiedad</li>
    <li>Tratamientos para manchas y cicatrices</li>
    <li>Tratamientos para contorno de ojos:
    <br>
    (ojeras, bolsas y arrugas)</li>
    <li>Tratamientos tensores</li>
    <li>Dermaplaning</li>
    <li>Microneedling</li>
    <li>Shock antioxidante, enzimático y multivitamínico</li>
    <li>Electrolifting</li>
    <li>Radiofrecuencia</li>
    <li>Ultrasonido focalizado</li>
    <li>Bioestimulación</li>
    <li>Tratamientos para rosácea</li>
    <li>Tratamientos para el acné</li>
    <li>Hidratación Profunda</li>
    </ul>
    <button class="turno-button"><a href="https://wa.me/541141765033" target="_blank">Reservar Turno</a></button>
  `,
  },

  {
    imageUrl:
      "./public/Radiofrecuencia-Corporal-en-Clinica-Premium-Marbella.jpg",
    labelText: "Tratamientos Corporales",
    htmlContent: `
    <h1>Tratamientos Corporales</h1>
    <p class="tratamientos-description">Realza tu belleza natural y rejuvenece tu cuerpo con tratamientos corporales. Ofrecemos tratamientos como:</p>
    <ul class="tratamientos-list">
    <li>Tratamientos para flacidez</li>
    <li>Tratamientos para estrías</li>
    <li>Tratamientos para celulitis y adiposidad localizada</li>
    <li>Textura y calidad de piel</li>
    <li>Tonificación</li>
    <li>Tratamientos despigmentantes: <br>
    (manos, codos, rodillas, zonas íntimas, cuerpo general)</li>
    <li>Tratamientos ortomoleculares con microneedling</li>
    <li>Tratamientos personalizados</li>
    </ul>
    <button class="turno-button"><a href="https://wa.me/541141765033" target="_blank">Reservar Turno</a></button>
  `,
  },
  {
    imageUrl: "./public/pexels-polina-tankilevitch-3738359.jpg",
    labelText: "Tratamientos Capilares",
    htmlContent: `
    <h1>Tratamientos Capilares</h1>
    <p class="tratamientos-description">Realza tu belleza natural y rejuvenece tu cabello con tratamientos capilares. Ofrecemos tratamientos como:</p>
    <ul class="tratamientos-list">
    <li>Cortes para hombres, mujeres y niños en todos sus estilos</li>
    <li>Peinados para toda ocasión</li>
    <li>Tratamientos para la caída del cabello</li>
    <li>Coloración:
    <br>
    Tintura y color</li>
    <li>Hidratación, nutrición, reparación y reconstrucción con productos de excelente calidad</li>
    <li>Alisados sin formol</li>
    </ul>
    <button class="turno-button"><a href="https://wa.me/541141765033" target="_blank">Reservar Turno</a></button>
  `,
  },
  {
    imageUrl: "./public/517a5d_31288bb1bd204b92b9a212c66da5b0ba~mv2.jpg",
    labelText: "Maquillaje Profesional",
    htmlContent: `
    <h1>Maquillaje</h1>
    <p class="tratamientos-description">Celebramos el maquillaje como una forma de arte. Nos dedicamos a realzar tu belleza y a descubrir el estilo que mejor te representa.</p>
    <ul class="tratamientos-list">
    <li>Eventos Sociales</li>
    <li>Clases personalizadas de automaquillaje</li>
    <li>Perfilado de cejas</li>
    <li>Permanente de pestañas</li>
    </ul>
    <button class="turno-button"><a href="https://wa.me/541141765033" target="_blank">Reservar Turno</a></button>
  `,
  },
  {
    imageUrl:
      "./public/f.elconfidencial.com_original_c68_39c_221_c6839c22103ccff94720248b14830748.jpg",
    labelText: "Venta de Productos",
    htmlContent: `
    <h1>Venta de Productos</h1>
    <p class="tratamientos-description">Asesoramiento y elaboración de fórmulas magistrales diseñadas exclusivamente para las necesidades de tu piel.</p>
    <ul class="tratamientos-list">
    <li>Free diagramación de rutina skincare</li>
    <li>Productos para rostro</li>
    <li>Productos para el cuidado de la piel: <br>
    (antiage, antiacné, rosácea, despigmentantes y renovadores)</li>
    <li>Productos para la hidratación corporal</li>
    <li>Celulitis, estrías, adiposidad localizada y flacidez</li>
    <li>Manos, pies y uñas</li>
    <li>Cuidado del cabello</li>
    <b>¡Superior calidad a mejores precios!</b>
    </ul>
    <button class="turno-button"><a href="https://wa.me/541141765033" target="_blank">Consultar Precios</a></button>
  `,
  },
];

function Tratamientos() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const aboutUsRef = useRef(null);

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar onScrollToAboutUs={scrollToAboutUs} />
      <div className="placeholder"></div>
      <div className="tratamientos-container">
        {tratamientosData.map((tratamiento, index) => (
          <div
            key={index}
            className={`tratamiento-item ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => handleExpand(index)}
          >
            <div
              className="overlay-container"
              style={{ backgroundImage: `url(${tratamiento.imageUrl})` }}
            >
              <div className="overlay-content">{tratamiento.labelText}</div>
            </div>
            <div className="tratamiento-content">
              {expandedIndex === index && (
                <div
                  dangerouslySetInnerHTML={{ __html: tratamiento.htmlContent }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tratamientos;
