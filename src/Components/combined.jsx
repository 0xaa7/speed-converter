import React from "react";

const Combined = (props) => {
 
    const onChangeHandler = (e) => {
            const speed = parseInt(e.target.value);
            props.callback(speed);        
        };
     
     return(
        <div>
           <form>
              <legend>Enter speed in {props.type}</legend>
                <label >Kmph</label>
                    <input onChange={onChangeHandler} value={props.speed}/>
            </form>
        </div>
    )
}

export default Combined;