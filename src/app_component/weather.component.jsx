import React from 'react';

const Weather=props=>{
    return(
        <div className="container">
        <br></br>
        <br></br>
        <div className="cards">
            <br></br>
            <h1>{props.city}</h1>
            {props.temp_celsius?(<h1 className="py-2">{props.temp_celsius}&deg;</h1>):null}
            {/**show max and min temp */}
            {minmaxTemp(props.temp_min,props.temp_max)}
            <h2 className="py-3">{props.description}</h2>
        </div>
        </div>
    );
};

function minmaxTemp(min,max){
    if(max&&min){
    return(
        <h1>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
        </h1>    
    );
}
}

export default Weather;