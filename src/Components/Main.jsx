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

  const callBack = (Kmph, Mph) => {
   
    if(Kmph){
        Kmph = parseInt(Kmph);
        setSpeedObject({
       Kmph: Kmph,
       Mph: Kmph * 0.621371, 
     });
    } 
    else if (Mph) {
        Mph = parseInt(Mph);
        setSpeedObject({
       Kmph: Mph / 0.621371, 
       Mph: Mph,
     });
    }
  }

  
// CODE USED BEFORE 


//   const callbackKmph = (speed) => {
//     speed = parseInt(speed);
//     setSpeedObject({
//       Kmph: speed,
//       Mph: speed * 0.621371, 
//     });
//   };

//   const callbackMph = (speed) => {
//     speed = parseInt(speed);
//     setSpeedObject({
//       Kmph: speed / 0.621371, 
//       Mph: speed,
//     });
 

  return (
    <div>
      <Combined type="Kmph" speed={speedObject.Kmph} callback={callBack} />
      <Combined type="Mph" speed={speedObject.Mph} callback={callBack} />


       {/* CODE USED BEFORE */}

     { /* <Combined type="Kmph" speed={speedObject.Kmph} callback={callbackKmph} />
      <Combined type="Mph" speed={speedObject.Mph} callback={callbackMph} /> */}
    </div>
  );
};

export default Main;
