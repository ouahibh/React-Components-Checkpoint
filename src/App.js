import "./App.css";
import React from "react";
import ProfilPhoto from "./components/profile/profilPhoto";
import FullName from "./components/profile/fullName";
import Adress from "./components/profile/address";
const App = () => {
  return (
    <div className={"contenairGlobal"}>
      <ProfilPhoto />
      <FullName />
      <Adress />
    </div>
  );
};

export default App;
