import React, { useEffect, useState } from "react";
import Greating from "./Greating";

export const Reloj =()=> {
  const [time, changeTime] = useState(new Date().toLocaleTimeString());
  /*const ap = ( time < 12) ? "<span>AM</span>":"<span>PM</span>";*/

  useEffect(function () {
    setInterval(() => {
      changeTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      {/* <h1>Reloj Digital</h1> */}
      <Greating text={time} />
    </>
  );
}
