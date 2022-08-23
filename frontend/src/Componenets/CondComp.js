import React, { useEffect, useState } from "react";

const CondComp = () => {
    const [isComp, setisComp] = useState(false);
useEffect(() => {
    setisComp(true)
}, []);

    return(
        <>
            {isComp === true ? (
                <h1>Your profile is Complete</h1>) :
                (<>
                    <h1>Your profile is incomplete</h1>
                    <h1>Go and complete now</h1>
                    </>)}
            <button onClick={() => setisComp(!isComp)}>Edit now</button>

        </>
    );
}
export default CondComp;