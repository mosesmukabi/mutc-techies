import React from "react";
import Tittle from "../../components/Tittle/Tittle";
import Tracksdetais from "../../components/Tracks/Tracks";
import Enroll from "../../components/Enroll/Enroll";
function Tracks() {
  return (
    <>
      <Tittle mainTittle="tracks offered by MUTC." />
      <Tracksdetais />
      <Enroll/>
    </>
  );
}

export default Tracks;
