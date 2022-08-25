import React from "react";
//import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Child = ({ name }) => {
    return (
        <>
            <Button className="btn"  style={{ backgroundColor: "green", color: "white" }}  onClick={() => { name(); }}>Click Here</Button>   
        </>
    )


}
export default Child;