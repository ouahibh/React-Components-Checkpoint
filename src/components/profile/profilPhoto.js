import "./profilPhoto.css";
import React from "react";
import photo from "../../assets/Ayoub.jpg";
const ProfilPhoto = () => {
  return (
    <div className={"imgContenair"}>
      <img src={photo} alt="Ayoub" width="303" height="391" />
    </div>
  );
};

export default ProfilPhoto;
