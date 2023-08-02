import React, { useState } from "react";
// import Kmph from "./kmph";
// import Mph from "./mph";
import Combined from "./combined";

const initialState = {
  Kmph: 0,
  Mph: 0,
};

const Main = () => {
  const [speedObject, setSpeedObject] = useState(initialState);

  const callbackKmph = (speed) => {
    speed = parseInt(speed);
    setSpeedObject({
      Kmph: speed,
      Mph: speed * 0.621371, 
    });
  };

  const callbackMph = (speed) => {
    speed = parseInt(speed);
    setSpeedObject({
      Kmph: speed / 0.621371, 
      Mph: speed,
    });
  };

  return (
    <div>
      <Combined type="Kmph" speed={speedObject.Kmph} callback={callbackKmph} />
      <Combined type="Mph" speed={speedObject.Mph} callback={callbackMph} />
    </div>
  );
};

export default Main;
