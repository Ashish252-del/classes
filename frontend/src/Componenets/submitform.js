import React, { useState } from "react";
import Button from '@mui/material/Button';

const FormSubmit = () => {
    const [name, setname] = useState("");
    const [fullname, setfullName] = useState("");

    const onSubmit = () => {
        setfullName(name);
    }
    return (
        <>
            <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} />
            <Button variant="contained" color="success"  onClick={()=>onSubmit()}>Submit</Button>
            <h1>You have Submited {fullname}</h1>
        
        
        </>
   )

}
export default FormSubmit;