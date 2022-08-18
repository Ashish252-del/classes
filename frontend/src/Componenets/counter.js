import React, { useState } from "react"; // when we have to import more then one functionalities then we use ,
const Count = () => {
    // first element is value and second is fuction that will update the value
    const [counter, setcounter] = useState(0);
    const handleincrement = () => {
        setcounter(counter + 1);
    }
    const handledecrement = () => {
        setcounter(counter - 1);
    };
    return (
        <>
            <h1 style={{ color: "gray" }}>Current counter : <span style={{ color: "red" }}>{counter}</span></h1>
            <div style={{display:"flex"  } }>
                <div style={{padding:"20px"}}>
                    <button
                        style={{ backgroundColor: "green", color: "white" }}
                       
                 onClick={()=>handleincrement()}   
               >Increse</button>

            </div>
                <div style={{padding:"20px"}}>
                    <button
                        style={{ backgroundColor: "green", color: "white" }}
                       
                 onClick={()=>handledecrement()}   
               >Decrese</button>

            </div>
            </div>
        
        
        
        </>
    )

}
export default Count;