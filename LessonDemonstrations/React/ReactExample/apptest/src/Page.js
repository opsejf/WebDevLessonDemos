import React from 'react';

// This code is basically taking the input via url, so if someone 
// writes ?name=hello at the end of a url, then the code updates with their name
// after the hello

export default function(props){
    let urlParams = new URLSearchParams(window.location.search);
    let link = "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + urlParams.get("name") + "," + urlParams.get("location");
    return (
        <>
        <h1>Welcome {urlParams.get("name")}</h1>
        <h2>You are from: {urlParams.get("location")}</h2>
        <img src={link}></img>
        </>
    )
}