import React,{useState} from 'react';
import './FormInput'


const Day2forms = () =>{
  const[values,setValues] = useState({
    username:"",
    email:"",
    password:"",
    cpassword:""
  })

  const inputs = [
    {
      id:1,
      name:"username",
      type:'text',
      placeholder:"Username",
      errorMessage:"Username should not be empty",
      label:'Username',
      required:true,
    },
    {
      id:2,
      name:"email",
      type:'email',
      placeholder:"Email",
      errorMessage:"Email should contain @ and .",
      label:'Email',
      required:true
    },
    {
      id:3,
      name:"password",
      type:'password',
      placeholder:"Password",
      errorMessage:"Password should contain atleast one number and one special character",
      label:'Password',
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required:true
    },
    {
      id:4,
      name:"cpassword",
      type:'password',
      placeholder:"Confirm-password",
      errorMessage:"Passwords does'nt match",
      label:'Confirm-password',
      pattern:values.password,
      required:true
    }
  ]
  const handleSubmit = e =>{
    e.preventDefault();
  }

  const onChange = e =>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  console.log(values)

  return (
  <div className = 'app'>
    <form onSubmit = {handleSubmit}>
      {inputs.map((input)=>(
        <FormInput key = {input.id} {...input}value = {values[input.name]} onChange = {onChange}/>
      ))}
      <button>Submit</button>
    </form>
  </div>
  )
}

export default Day2forms