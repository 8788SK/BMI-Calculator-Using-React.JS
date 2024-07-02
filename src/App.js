import './App.css';
import React,{useState} from "react";

function App() {

// Creating State of Application

const [weight,setWeight]= useState(0);
const [height,setHeight]= useState(0);
const [bmi,setbmi]=useState('');
const [message,setMessage]=useState('');

// logic BMI

let calBmi = (e) => {

  e.preventDefault();

  if(weight===0||height===0){
    alert('Please enter a valid weight and height')
  }

  else{
    let bmi=(weight/(height*height)*703)
    setbmi(bmi.toFixed(1))

    // Logic for bodytype

    if(bmi<25){
      setMessage('You are underweight')
    }else if(bmi>=25 && bmi<30){
      setMessage('You are healthy weight')
    }else{
      setMessage('You re over-weight')
    }
  }

}

let reload =()=>{
  window.location.reload()
}






  return (
    <div className='container'>
    <div className="App">
      <h2>BMI Calculator</h2>
      <form onSubmit={calBmi}>

        {/* Input weight */}

        <div>
          <label>Weight(lbs)</label>
          <input 
          type='text'
          placeholder="Enter weight"
          value={weight}
          onChange={(e)=>setWeight(e.target.value)}>            
          </input>
        </div>

        {/* Input Height */}

        <div>
          <label>Height(in)</label>
          <input 
          type='text'
          placeholder="Enter height"
          value={height}
          onChange={(event)=>setHeight(event.target.value)}>            
          </input>
        </div>

        {/* Buttons Submit And Reload */}

        <button className='btn' type='submit'>Submit</button>
        <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>

        {/* Final Result  */}

        <div className='center'>
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>

      </form>
      
      </div>
    </div>
  );
}

export default App;
