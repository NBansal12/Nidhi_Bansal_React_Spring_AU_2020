import React from 'react';
import "./App.css";
import Weather from'./app_component/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './app_component/form.component';
const API_Key="8b38748963f0ab476f7a8123299def81";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    };
  }

  toCelsius(temp){
    let celsius = Math.floor(temp-273.15);
    return celsius;
  }

  getWeather = async(e)=>{
    e.preventDefault();

    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;

    if(city && country){
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`  
      );
    const response = await api_call.json();
   
    this.setState({
      city:`${response.name}, ${response.sys.country}`,
      main:response.weather[0].main,
      celsius:this.toCelsius(response.main.temp),
      temp_max:this.toCelsius(response.main.temp_max),
      temp_min:this.toCelsius(response.main.temp_min),
      description:response.weather[0].description,
      error:false
     });

     console.log(response);
    }else{
      this.setState({error:true})
    }
     
    };
    render(){
      return(
        <div className="header"  >
        <br>
        </br>
        <div className="App" >
        <Form loadweather={this.getWeather} error={this.state.error}/>
      <Weather 
      city={this.state.city} 
      country={this.state.country}
      temp_celsius={this.state.celsius}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
  
      />
      <div className="Footer">
      </div>
      </div>
      </div>
      );
    }
}

export default App;
