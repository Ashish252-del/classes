import React, { useContext } from "react";
import { firstName,lastName } from "./parent";
const Child2 = () => {
    const fname = useContext(firstName);
    const lname = useContext(lastName);
    return (
        <>
            <h1>HEllo this is child2 and here we have used useContex
                to get the message from parent 
                the message is<span style={{color:"green"}}> {fname} and {lname}</span> 
            </h1>
        </>
    )
}
 export default Child2;