import React,{useState} from "react";
const Form = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    return (
        <>
            <label>Enter your name</label>
            <br/>
            <input
                // what will be value of input box
                // intially value = "" brcause initially name is ""
                value={name}
                // onChsnge is a event listener and we have used brackets because we are writing a java-script function
                onChange={(e) => { setname(e.target.value) }}
                // type and placeholder are attributes
                placeholder="Full Name"
                type="text"


            />
            <br/>
             <label>Enter your Email id</label>
            <br/>
            <input
                // what will be value of input box
                value={email}
                // onChsnge is a event listener and we have used brackets because we are writing a java-script function
                onChange={(e) => { setemail(e.target.value) }}
                // type and placeholder are attributes
            
                type="email"


            />
            <br/>
             <label>Enter your Password</label>
            <br/>
            <input
                // what will be value of input box
                value={password}
                // onChsnge is a event listener and we have used brackets because we are writing a java-script function
                onChange={(e) => { setpassword(e.target.value) }}
                // type and placeholder are attributes
                
                type="text"


            />
        
            <h1>The name of user is {name }</h1>
            <h1>The email id of user is {email }</h1>
            <h1>The password of user is {password }</h1>
        
        
        </>
    )

}
export default Form;