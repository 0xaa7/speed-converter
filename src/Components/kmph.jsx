import React from "react";

const Kmph = (props) => {

    const HandleKmph = (e) => {
        const speed = parseInt(e.target.value);
        props.callback(speed);        
    };

    return (
        <div>
           <form>
              <legend>Kmph to Mph</legend>
                <label >Kmph</label>
                    <input onChange={HandleKmph} value={props.speed}/>
            </form>
        </div>
    )
}

export default Kmph;
