import React, { useEffect, useState } from "react";
import axios from "axios";
    // passing object in useState

const Submitreactform3 = () => {
    const [fullname, setfullname] = useState({ fname: "", lname: "" })
    const [user, setuser] = useState([])
    
    const fatchuser = async () => {
        const response = await axios.get("/specific")// calling api 
        console.log(response);
        // see in the specific api why here I  have written response.data.success===true
        if (response.data.success == true) {
            setuser(response.data.data);
            console.log(setuser);
        }
        else {console.log("server issu")}
    };
    useEffect(
        () => {
            fatchuser();
        }, []
    );
    const onSubmits = (e) => {
        e.preventDefault();
        alert("Form submittd")
        
    }
    const inputevent = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        // you can also get placeholder by e.target.placeholder
        const { name, value } = e.target;
        setfullname(
            (prev) => { 
                console.log(prev); // prev = {fname: "", lname: ""}
                return {
                    ...prev,
                    [name]: value// here we are updating fname and lname like if name = fname nd fname is in
                    // the prev object then update by that value 

                }

            }
               
        )
     }
  
    return (
        <>
            <h2>React form submit for complex form using spread operator
                and this is most efficient  way of form submission</h2>
            {user.map((element) => {
                return <h1>{element.gname}</h1>
            })}
             <h1>Hello <span style={{color:"red"}}>{fullname.fname} {fullname.lname}</span></h1>
            <form onSubmit={onSubmits} >
            <input
                type="text" name="fname" value={fullname.fname}
                onChange={inputevent}
            />
            <input
                type="text" name="lname" value={fullname.lname}
                onChange={inputevent}
            />
                <button type="submit" style={{ color: "white", backgroundColor:"blueviolet"}}>Submit</button>
               
        
        </form>
        </>


    )




}
export default Submitreactform3;