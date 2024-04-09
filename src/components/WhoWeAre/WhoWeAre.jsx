import React from "react";
import teamProgramers from "../../assets/teamProgramers.jpg";
import { WhoWeAreParagra } from "../../utils/data";

const WhoWeAre = () => {
  return (
    <div>
      <div>
        <img src={teamProgramers} alt="" />
      </div>
      <div>
        <span className="secondaryText">Quienes Somos</span>
        <span className="primaryText">Somos Desarrolladores Web</span>
        {WhoWeAreParagra.map((paragraph, i) => {
          <span className="secondaryText" key={i}>
            {paragraph}
          </span>;
        })}
      </div>
    </div>
  );
};

export default WhoWeAre;
