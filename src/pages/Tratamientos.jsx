import Navbar from "../components/Navbar";
import "/src/tratamientos.css";
import Tratamiento from "../components/Tratamiento";
function Tratamientos() {
  return (
    <>
      <Navbar></Navbar>
      <Tratamiento
        imageUrl={"./public/pexels-shvetsa-5069454.jpg"}
        labelText={"Tratamientos Faciales"}
      ></Tratamiento>
      <Tratamiento
        imageUrl={
          "./public/Radiofrecuencia-Corporal-en-Clinica-Premium-Marbella.jpg"
        }
        labelText={"Tratamientos Corporales"}
      ></Tratamiento>
      <Tratamiento
        imageUrl={"./public/pexels-polina-tankilevitch-3738359.jpg"}
        labelText={"Tratamientos Capilares"}
      ></Tratamiento>
      <Tratamiento
        imageUrl={"./public/517a5d_31288bb1bd204b92b9a212c66da5b0ba~mv2.jpg"}
        labelText={"Maquillaje Profesional"}
      ></Tratamiento>
    </>
  );
}

export default Tratamientos;
