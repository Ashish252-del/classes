import React from "react";
const card = () => {
    return (
        <>
        <div className="card" style={{display:"flex"}} >

      <img src="https://i.picsum.photos/id/824/200/200.jpg?hmac=Uozb__ejlYDEziPN80UpSs6tvyqjiIyjnWYj9gaPP-Y" className="card-img-top" alt="hello"
      style={{height:"250px", width:"500px"}}/>
  <div className="card-body">
    <h5 className="card-title">Varanasi</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Explore now</a>
  </div>
    </div> 
   
        
        
        
        </>
    )
}
export default card;