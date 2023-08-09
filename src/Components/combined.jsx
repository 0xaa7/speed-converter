import React from "react";

const Combined = (props) => {
 
    const onChangeHandler = (e) => {
    props.callback(parseFloat(e.target.value), parseFloat(e.target.valueMph));      
        };
     
     return(
        <div>
           <form>
              <legend>Enter speed in {props.type}</legend>
                <label ></label>
                    <input onChange={onChangeHandler} value={props.speed}/>
            </form>
        </div>
    )
}

export default Combined;