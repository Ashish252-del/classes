import React, { useState } from "react";
import Button from '@mui/material/Button';

const FormSubmit = () => {
    // for first type
    const [name, setname] = useState("");
    const [fullname, setfullName] = useState("");

    const onSubmit = () => {
        setfullName(name);
    }
    // for second type
    const [name2, setname2] = useState("");
   // const [fullname2, setfullName2] = useState("");

    // const onSubmit2 = () => {
    //     setfullName2();
    // }

    // for third type
    const [name3, setname3] = useState("");
    const [fullname3, setfullName3] = useState("");

    const onSubmit3 = (e) => {
        // to prevent the default behaviour of form tag
        e.preventDefault();
        setfullName3(name3);

    }
    return (
        <>   
            <h1 style={{color:"blue"}}>First way</h1>
            <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} />
            <Button variant="contained" color="success"  onClick={onSubmit}>Submit</Button>
            <h1>You have Submited {fullname}</h1>

            <hr />
            <h1 style={{ color: "blue" }}>Second way</h1>
            <p>here we are using form tag hence on submiting the page will be refresh
            and data will go in backend</p>
            <form >
            <input type="text" value={name2} onChange={(e) => { setname2(e.target.value) }} />
            <Button variant="contained" color="success"  type ="submit">Submit</Button>
            <h1>You have Submited </h1>
            </form>

            <hr />
            <h1 style={{ color: "blue" }}>Third way</h1>
            <p>we are using form tag but we are preventing the default nature of form tag</p>
            <form onSubmit={(e) => { onSubmit3(e) }}>
            <input type="text" value={name3} onChange={(e) => { setname3(e.target.value) }} />
            <Button variant="contained" color="success"  type ="submit">Submit</Button>
            <h1>You have Submitted {fullname3}</h1>
        </form>
        
        </>
   )

}
export default FormSubmit;