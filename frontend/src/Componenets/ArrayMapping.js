import React from "react";
const ArrayMapping = () => {
    const testarray = ["Ashu", "Ashish", "Abhay", "Aditya"];
    return (
        <>
            { // bracket because we are writing java-script
                testarray.map((candidate) => {
                    return (<h1 style={{color:"red"}}>Developer {candidate }</h1>)
                     
                })
            }
        </>
    );
};
export default ArrayMapping;