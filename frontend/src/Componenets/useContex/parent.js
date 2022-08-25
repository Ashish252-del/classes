import React, { createContext } from "react";
import Child1 from "./child1";
import Child2 from "./child2";
import Child3 from "./child3";
const firstName = createContext();
const lastName = createContext();
const Parent = () => {
 let a = ("I am parent")
    return (

        <>
            <firstName.Provider value={a}> 
                <lastName.Provider value={("The parent name is Ashish ")}>
                    <Child1 />
                    <Child3 />
                    <Child2/>
                    </lastName.Provider>
      </firstName.Provider>
        </>
    )
}
export default Parent;
export { firstName,lastName };