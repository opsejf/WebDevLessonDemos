import React from 'react';

function extraDetails(details){
  alert("Extra Details: " + details)
}

function item(){
    return <h2>123</h2>
}

function item2(){
    return <h2>ABC</h2>
}


// FORM FUNCTIONS TO CALL ON BELOW

function name(props){
    return(
        <tr>
            <td>Name:</td>
            <td>{props.name}</td>
        </tr>
    )
}

function age(props){
    return(
        <tr>
            <td>Age:</td>
            <td>{props.age}</td>
        </tr>
    )
}

function gender(props){
    return(
        <tr>
            <td>Gender:</td>
            <td>{props.gender}</td>
        </tr>
    )
}

function telephone(props){
    return(
        <tr>
            <td>Telephone:</td>
            <td>{props.telephone}</td>
        </tr>
    )
}

function email(props){
    return(
        <tr>
            <td>Email:</td>
            <td>{props.email}</td>
        </tr>
    )
}

// BAKERY EXAMPLES

function flavour(props){
    return(
        <tr>
            <td>Flavour:</td>
            <td>{props.flavour}</td>
        </tr>
    )
}

function colour(props){
    return(
        <tr>
            <td>Colour:</td>
            <td>{props.colour}</td>
            
        </tr>
    )
}

function size(props){
    return(
        <tr>
            <td>Size:</td>
            <td>{props.size}</td>
        </tr>
    )
}

function amount(props){
    return(
        <tr>
            <td>Amount:</td>
            <td>{props.amount}</td>
        </tr>
    )
}

function topping(props){
    return(
        <tr>
            <td>Topping:</td>
            <td>{props.topping}</td>
        </tr>
    )
}

function filling(props){
    return(
        <tr>
            <td>Filling:</td>
            <td>{props.filling}</td>
        </tr>
    )
}

function cake(props){
    return(
        [<h1>Cake Form</h1>,
        flavour(props),
        colour(props),
        size(props),
        topping(props),
        filling(props)]
    )
}

function biscuit(props){
    return(
        [<h1>Biscuit Form</h1>,
        flavour(props),
        colour(props),
        amount(props),
        filling(props)]
    )
}



let jobs = {
    "artist": <h2 style={{backgroundColor:"red", color: "white"}}>Artist Details...</h2>,
    "designer": (props)=>{
        return <h3 style={{backgroundColor:"yellow", color:"lightgray"}}>{props.type}</h3>
    },
    "ninja": <h2 style={{backgroundColor:"blue", color:"pink"}}>Ninja Details...</h2>,
    "programmer": <h2 style={{backgroundColor:"green", color:"purple"}}>Programmer Details...</h2>,
    "superhero": (props)=>{
        return <h3 style={{backgroundColor: props.colour}}>Superhero</h3>
    }

}

let getJobs = (key, props) => {
    return typeof jobs[key] == 'function' ? jobs[key](props) : jobs[key];
}
//braces {} set of instructions
//square[] reference or key name or refernce position in list
//() provides parameters for function

// ACTUAL FORM TO BE EXPORTED

export default function(props){
    return (
        <div>
            <h1>Person:</h1>
            {props.test ? item() : ''}
            {props.test == "XYZ" ? item2() : ''}
            {/* {jobs[props.test] ? jobs[props.test] : ''} */}
            {getJobs(props.test, props)}
            <table>
                <tbody>
                    {name(props)}

                    {age(props)}

                    {gender(props)}

                    {telephone(props)}

                    {email(props)}


                    <div>
                        {props.test == "cake" ? cake(props) : ''}
                    </div>

                    <div>
                        {props.test == "biscuit" ? biscuit(props) : ''}
                    </div>


                    {/* {props.test == "cake" ? cake(props) : ''} */}

                </tbody>
            </table>

            <button onClick={()=>extraDetails("ABC")}>Extra Details</button>
        </div>
    )
};





