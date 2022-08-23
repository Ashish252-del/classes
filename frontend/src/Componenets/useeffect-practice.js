// UseEffect have two arguments, first is function, second is array of state (whose sideeffect we want)
//We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
// 1. No dependency passed:
// useEffect(() => {
//   //Runs on every render
// });
// 2. An empty array:
// useEffect(() => {
//   //Runs only on the first render
// }, []);
// 3. Props or state values:
// useEffect(() => {
//   //Runs on the first render
//   //And any time any dependency value changes
// }, [prop, state]);
import React, { useState, useEffect } from "react";
const Practiceuseeffect=() => {
    
    const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // whenever the count change the useEffect function will run and then re-render 


    const [name, setname] = useState("Default")
    // setname("Ashish")
    //The issue is that the setname function gets invoked when the component renders,
    // updates the state, which causes a re - render and does that infinitely.
    useEffect(() => { setname("Ashish") }, [])
    
    return (
        <>
            <h1>You are learning useEffect and the name is {name}</h1>
            <p>Count: {count}</p>
      <button style={{color:"white", backgroundColor:"red"}} onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
        </>
  )




}
export default Practiceuseeffect;