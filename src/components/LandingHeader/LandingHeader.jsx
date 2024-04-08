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
      </div>
    </div>
  );
};
