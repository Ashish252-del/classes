import React from "react";
import { firstName,lastName } from "./parent";
const Child3 = () => {
    return (
        <firstName.Consumer>
            {(fname) => {
                return (
                    <lastName.Consumer>
                        {(lname) => {
                            return (
                                <>
                                    <h2 >Hii I am child3 and this is without useContex
                                        and the message from parent is <h2 style={{ color: "red" }}>{fname} and {lname}
                                        </h2>
                                    </h2>
                                    <hr/>
                                </>);
                        }
                        }
            </lastName.Consumer> )}
            }
            </firstName.Consumer>
     )
}
export default Child3;