import React, { useState } from "react";

function UseState1(){
    const[number,Setnumber] = useState(0);
    const[CanditateDetails,SetDetails] = useState({
        name:"Madasamy",
        age: 25,
        nested:{
            Details:"Nested Data",
            NextlevelNest:{
                Details1:"Nextlevel Data"
            }
        }
    })
    const SetDetailsHandler = ()=>{
        let temp ="";
        CanditateDetails.name == "Madasamy" ? temp = "Magesh" : temp = "Madasamy";
        SetDetails({...CanditateDetails,name:temp});
    }
    return(
        <div>
            {/* ========= Simple ========= */}
            {/* Start */}
            <h1>Simple Usage of UseState</h1>
            {number}<br></br>

            <button onClick={()=>{Setnumber(number+1)}}>Click me to add</button>
            <button onClick={()=>{Setnumber(number-1)}}>Click me to subtract</button><br></br><br></br>
            {/* End */}
            {/* ========= Simple ========= */}




            {/* ========= Medium & Complex ========= */}
            {/* Start */}
            <h1>Usage of UseState by object along with conditional rendering</h1>
            {CanditateDetails.name} {CanditateDetails.age}<br></br>
            {CanditateDetails.nested.Details}<br></br>
            {CanditateDetails.nested.NextlevelNest.Details1}<br></br>
            
            <button onClick={SetDetailsHandler}>Change name</button>
            <button onClick={()=>{SetDetails({...CanditateDetails,age:18})}}>Change age</button>
            <button onClick={()=>{SetDetails({...CanditateDetails,nested:{...CanditateDetails.nested,Details:"Nested Data Changed",NextlevelNest:{...CanditateDetails.nested.NextlevelNest,Details1:"Next Level Data Changed"}}})}}>Change nest and Next level nest</button>
            {/* End */}
            {/* ========= Medium & Complex ========= */}




        </div>
    )
}

export default UseState1;