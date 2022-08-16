import React from "react";
const home = () => {
    let name;
    let likes;
    let comments;
    let share;

    name = "Abhay"; likes = 250;
    comments = 10; share = 5;
    const handlebutton = () => {
        console.log("before return statement")
    }

    return (
        <>
            <h1>The name of user is {name}</h1>
            <p>NO. of likes { likes}</p>
            <p>NO. of comments {comments}</p>
            <p>NO. of share {share}</p>
            <button className="bnuttonclass" onClick={() => { alert("You have clicked");  handlebutton(); }} >View more</button>
        <h2>Thank you</h2>
        
        </>
    )
}
export default home;