import 'bootstrap/dist/css/bootstrap.min.css';

function Resumen() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Resumen del Texto</h1>
      <div className="d-flex justify-content-center">
        <iframe
          src="/pdfs/resumen.pdf"
          width="80%"
          height="600px"
          style={{ border: "none" }}
          title="Resumen PDF"
        ></iframe>
      </div>
    </div>
  );
}

export default Resumen;
