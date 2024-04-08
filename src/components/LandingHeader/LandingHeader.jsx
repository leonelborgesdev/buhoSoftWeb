import "./LandingHeader.css";

export const LandingHeader = () => {
  return (
    <div className="LandingHeader" id="Home">
      <div className="text_landing">
        <h2>We are</h2>
        <h2>
          <span style={{ "--i": "0" }} data-text={" Coders."}>
            Coders.
          </span>
          <span style={{ "--i": "1" }} data-text={" FullStackDevelopers."}>
            FullStackDevelopers.
          </span>
          <span style={{ "--i": "2" }} data-text={" Developers."}>
            Developers.
          </span>
        </h2>
        <h3>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.
        </h3>
      </div>
    </div>
  );
};
