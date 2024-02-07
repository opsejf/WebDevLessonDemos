import React, { useEffect } from 'react';
import { useState } from 'react';


// 
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
    // let [inputs, setInputs] = useState({});
    return(
        <tr>
            <td>Age:</td>
            {/* <td>{props.age}</td> */}
            {/* <td><input value={props.age} onInput={e=>setInputs({age:e.target.value})}></input></td> */}
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







// function list(data){
//     if(data != undefined){
//         console.log(data)
//         return data.split(",").map(item=>{
//         return item > 'b' ? <li>{item}</li> : <li>***{item}</li>
//         }
//         )
//     }
// }

// Alternative method to the above code

function list(data){
    try{
        return data.split(",").map(item=>{
            return item > 'b' ? <li>{item}</li> : <li>***{item}</li>
            }
        )
    }
    catch(ex){
        console.log(ex);
    }
}




// ACTUAL FORM TO BE EXPORTED

export default function(props){
    let [counter, setCounter] = useState(0);
    let [title, setTitle] = useState("ABCXYZ123");

    let test = {
        age:123,
        gender: 'mf',
        telephone: '999'
    };
    let [inputs, setInputs] = useState(test);

    function doInput(event){
        // its not necessary to write == undefined, 
        // the statement if(event.target.name) equates to the same thing
        if(event.target.name != undefined){
            let newData = {...inputs};
            newData[event.target.name] = event.target.value;
            setInputs(newData);
        }
        // alert(event.target.name);
        // e=>setInputs({...inputs, age: e.target.value})
    }

    let [newTest, setNewTest] = useState(100);
    let [newTest_two, setNewTest_two] = useState("a");
    let [newTest_three, setNewTest_three] = useState("b");
    
    
    useEffect(()=>{
        setNewTest(newTest +1);
        console.log("Hello");
    },[newTest_two, newTest_three]);




    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
            .then(result=>result.json())
            .then(data=>{
                console.log(data);
            })
    },[])



    return (

        // if you have a form tag with items inside like buttons then it will 
        // use any button to submit the form, to prevent this, it is needed to add the
        // code onSubmit={e=>e.preventDefault()} within the form tag.
        <div>
            <h1>Person ({counter}) :{title}</h1>
            <h3>{inputs.age}</h3>
            <h3>{inputs.gender}</h3>
            <h3>{inputs.telephone}</h3>

            <h2>New Test {newTest}</h2>
            <input onInput={e=>setNewTest_two(e.target.value)}/>
            <input onInput={e=>setNewTest_three(e.target.value)}/>


            <button onClick={e=>setCounter(++counter)}></button>
            {props.test ? item() : ''}
            {/* {props.test === "XYZ" ? item2() : ''} */}
            {/* {jobs[props.test] ? jobs[props.test] : ''} */}
            {getJobs(props.test, props)}
            <table onInput={e=>doInput(e)}>
                <tr>
                    <td>Name:</td>
                    <td><input value={title} onInput={e=>{setTitle(e.target.value);}}></input></td>
                </tr>


                <tr>
                    <td>Age:</td>
                    {/* the ...inputs, part prevents the boxes from overwriting each 
                    other. i.e. you inpout age and it appears above, but then when 
                    typing in gender it would clear the age so this stops that from 
                    happening. its needs to be applied to all related inputs for it
                    to work */}
                    <td><input  value={props.age} name="age"></input></td>
                </tr>


                <tr>
                    <td>Gender:</td>
                    <td><input name="gender" value={props.gender} onInput={e=>doInput(e)}></input></td>
                </tr>
                {name(props)}
                {age(props)}
                {gender(props)}
                {telephone(props)}
                {email(props)}


                {props.test === "cake" ? cake(props) : ''}

                {props.test === "biscuit" ? biscuit(props) : ''}


                {/* {props.test == "cake" ? cake(props) : ''} */}

                
            </table>

            {list(props.list)}

            <button onClick={()=>extraDetails("ABC")}>Extra Details</button>
        </div>
    )
};


