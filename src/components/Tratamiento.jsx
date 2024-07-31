function Tratamiento({ imageUrl, labelText }) {
  return (
    <div
      className="overlay-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="overlay-content">
        <h1>{labelText}</h1>
      </div>
    </div>
  );
}

export default Tratamiento;
