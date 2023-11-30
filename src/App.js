
import { useState } from 'react';
import './App.css';
import './index.css';
import { TextField,Stack,Button} from '@mui/material';

function App() {
  const [total,setTotal]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [time,setTime]=useState(0)

  const [validPriciple,setValidPrinciple]=useState(true)
  const [validRate,setValidRate]=useState(true)
  const [validTime,setValidTime]=useState(true)
  

  const handleSubmit=(e)=>{
  e.preventDefault()
  if(!principle || !rate || !time){
    alert("enter a valied value !!")
  }

  else{let a=principle*rate/100*time 
    setTotal(a)}
  }

const validateInput=(e)=>{
  const {name,value}=e.target
  if(!!value.match((/^[0-9]{1,}$/))){
    if(name=='principle'){
      setPrinciple(value)
      setValidPrinciple(true)
    }
    else if(name=='rate')
    {
      setRate(value)
      setValidRate(true)
  }
    else{
      setTime(value)
      setValidTime(true)
    }
  }
  else{
    if(name=='principle'){
      setPrinciple(value)
      setValidPrinciple(false)
    }
    else if(name=='rate'){
      setRate(value)
      setValidRate(false)

    }
    else{
      setTime(value)
      setValidTime(false)
    }
  
  }
}

const resetFields=()=>{
  setPrinciple(0)
  setRate(0)
  setTime(0)
  setTotal(0)
  setValidPrinciple(true)
  setValidRate(true)
  setValidTime(true)
}

  // console.log(principle,rate,time)
  return (
   <div style={{height:'100vh'}} className='w=100 d-flex justify-content-center align-item-center bg-dark'>
    <div className='bg-light p-5 rounded'>
    <h1>Simple Interest Calculator</h1>
    <p>Calculate Your Simple Interest Easily !!</p>

    <div style={{backgroundColor:'#e8f714'}} className='text-center rounded'>
      <h4 className='pt-3'>₹{''}{total}</h4>
      <p className='pb-3'>Your Total Interest</p>
    </div>

    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    <form className='my-5' onSubmit={(event)=>handleSubmit(event)}>
      <div className='mb-3'>
        <TextField id="outlined-basic 1" className='w-100' label="₹ Principle Amount" variant="outlined" 
        value={principle || ''}name='principle' onChange={(event)=>validateInput(event)}/>
        {
          !validPriciple &&
          <div className='text-danger'>
            *invalid principle amount value
          </div>
        }
      </div>

      <div className='mb-3'>
        <TextField id="outlined-basic 2" className='w-100' label="Rate of Interest (p.a) %" variant="outlined" 
        value={rate || ''} name='rate' onChange={(event)=>validateInput(event)}/>
        {
          !validRate&&
          <div className='text-danger'>
            *invalid rate value
          </div>
        }
      </div>

      <div className='mb-3'>
        <TextField id="outlined-basic 3" className='w-100' label="Time period (year)" variant="outlined"
        value={time || ''} onChange={(event)=>validateInput(event)}/> 
        {
          !validTime &&
          <div className='text-danger'>
            *invalid years
          </div>
        }
      </div>

      <Stack direction={'row'} spacing={2}>
      <Button type='submit' style={{height:'50px',width:'250px'}} disabled={validPriciple && validRate && validTime ? false:true} variant="contained" className='bg-dark'>Calculate</Button>
      <Button style={{height:'50px',width:'250px'}}variant="outlined" onClick={resetFields} >reset</Button>
     </Stack>

      
    </form>


   </div>
   </div>
  );
}

export default App;
