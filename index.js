import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './Day2forms'
import './Day2lift'
import './Day2lists'
import './Day3'

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currTime:null
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        currTime:new Date().getHours()
      })
    },1000)
  }
  render(){
    const tmp = this.state.currTime;
    if(tmp>5 && tmp<12){
      return <h3>Hello {this.props.name} , Good Morning</h3>
    }
    else if(tmp>=12 && tmp<16){
      return <h1>Hello {this.props.name} , Good Afternoon</h1>
    }
    else if(tmp>=16 && tmp<20){
      return <h1>Hello {this.props.name} , Good Evening</h1>
    }
    else{
      return <h1>Hello {this.props.name} , Good Night</h1>
    }
  }
}

function Day1(){
  return(
    <div>
      <Clock name='Sameer'></Clock>
      <Clock name= 'Adithya'></Clock>
      <Clock name='Tarun'></Clock>
      <Clock name = 'Shreekar'></Clock>
    </div>
  )
}
numbers = [1,2,3,4,5,6,7,8,9,10]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Day1/>
/* <Day2forms/>
<Day2lists numbers = {numbers}/>
<Day2lift/>
<Day3/> */

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
