import React, { useState } from "react";

const Submitreactform = () => {
    // passing object in useState
    const [fullname, setfullname] = useState({ fname: "", lname: "" })
    const onSubmits = (e) => {
        e.preventDefault();
        alert("Form submittd")
        
    }
    const inputevent = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        // you can also get placeholder by e.target.placeholder
        const a = e.target.name;
        const b = e.target.value;
        // you can also write const{name, value} = e.target;
        // rest of code will same just replace a by name and b by value
        setfullname(
            (prev) => {
                if (a === "firstname") 
                    return {
                        fname: b,
                        lname:prev.lname // this will keep the previous state of lname
                    }
                else if (a === "lastname")
                    return {
                        lname: b,
                        fname:prev.fname
                    }
                
            }
        )
     }
  
    return (
        <>
            <h2>React form submit for complex form and this is efficient  way of form submission</h2>
             <h1>Hello <span style={{color:"red"}}>{fullname.fname} {fullname.lname}</span></h1>
            <form onSubmit={onSubmits} >
            <input
                type="text" name="firstname" value={fullname.fname}
                onChange={inputevent}
            />
            <input
                type="text" name="lastname" value={fullname.lname}
                onChange={inputevent}
            />
                <button type="submit" style={{ color: "white", backgroundColor:"blueviolet"}}>Submit</button>
               
        
        </form>
        </>


    )




}
export default Submitreactform;