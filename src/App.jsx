import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
 let [Weight,setWeight]= useState(0);
 let [height,setHeight]= useState(0);
 let [bmi,setBmi]=useState('');
 let [message,setMessage]=useState('');
 const reload =(e)=>{
  e.preventDefault();
 }
 const calcBmi =(e)=>{
  e.preventDefault();
   if(Weight ==0 || height ==0){
    alert("Please enter a valid height and width")
   }
   else{
    bmi =(Weight/(height *height)/703);
    console.log(bmi)
    setBmi(bmi.toFixed(1))
    if(bmi <25 ){
      setMessage ("You are underWeight");
    }
    else if(bmi>=25 && bmi<30){
 setMessage ("You are heiighlthy");
    }
    else{
      setMessage("You are gandu")
    
    }
   }
 }
  return (
  <>
    <form onSubmit={calcBmi}>
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '22rem', padding: '20px' }}>
        <Card.Body>
          <h1 className="text-center mb-4">BMI Calculator</h1>

          <div className="mb-3">
            <label className="form-label">Weight (lbs)</label>
            <input  type="text" className="form-control" placeholder="Enter your weight" value={Weight}
             onChange={(e)=>{ setWeight(e.target.value) }}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Height (in)</label>
            <input
              type="text"  className="form-control" placeholder="Enter your height" value={height}
              onChange={(e)=>{setHeight(e.target.value)}}
            />
          </div>

          <div className="d-flex justify-content-between mb-3">
            <Button variant="primary" type='submit'>Submit</Button>
            <Button variant="secondary" onClick={reload}>Reload</Button>
          </div>

          <div className="text-center">
            <span className="d-block">Your BMI is: <strong>{bmi}</strong></span>
            <span className="d-block">You are: <strong>{message}</strong></span>
          </div>
        </Card.Body>
      </Card>
    </div>
    </form>
     </>
  )
}

export default App
