import React from "react";

const Mph = (props) => {

const HandleMph = (e) => {
    const speed = parseInt(e.target.value);
    props.callback(speed);         
     };

    return (
        <div>
             <form>
                <label >Mph</label>
                    <input onChange={HandleMph} value={props.speed}/> 
             </form>
        </div>
    )
}

export default Mph;
