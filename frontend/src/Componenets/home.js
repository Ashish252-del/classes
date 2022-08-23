import React, { useState } from "react";
// note component name should always start from capital latter
const Home = () => {
    // java-script can be written by two way before return statement and inside return 
    // inside return we use bracket to write js
    // let name;
    // let likes;
    // let comments;
    // let share;

    // name = "Abhay";
    // likes = 250;
    // comments = 10;
    // share = 5;
    const [name, setname] =useState("Abhay");
    const [likes, setlike] =useState(100);
    const [comments, setcomments] =useState(50);
    const [share, setshare] =useState(30);

    const handlebutton = () => {
        console.log("before return statement");
        setcomments(500);
        setname("Ashish");
        setshare(50);
        setlike(1000);
    }

    return (
        <>
            <h1>The name of user is {name}</h1>
            <p>NO. of likes { likes}</p>
            <p>NO. of comments {comments}</p>
            <p>NO. of share {share}</p>
            {/* {className and inClik are java-script attributes whick written i jex} */}
            <button className="bnuttonclass" onClick={() => { alert("You have clicked"); handlebutton(); }}
            style={{backgroundColor:"red"}}>View more</button>
        <h2>Thank you</h2>
        
        </>
    )
}
export default Home;