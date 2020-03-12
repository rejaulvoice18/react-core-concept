import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ["Salman Sha","Abdur Razzak","Bappa Raz", "Bappi","Shakib Khan"]
  const product = [
    {name:"Photoshop", price:"$209"},
    {name:"illastrator", price:"$150"},
    {name:"adobe reader", price:"$9.6"}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <p>I am react person.</p>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            product.map(product => <li>{product.name}</li>)
          }
        </ul>
        {product.map(singleelement => <Products name = {singleelement}></Products>)} (// map use kore amra prottek ta element dore dore auto korte pari)
        
        <Products name={product[0]}></Products>(// ai vabe bar bar kora lagto but uprer niome korle loop ar moto sob gulu auto chole asbe.)
       
       <Person name="Keramot" job="toylet clining"></Person>
        <Person name="Keramot" job="drain clining"></Person>
       </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div >
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {users.map(selement => <li style={{ listStyle: 'none' }}>{selement.email}</li>)}
      </ul>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10)
  const handleincreas = () => setCount(count + 1)
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Products(props){
  const productStyle = {
    border:'1px solid gray',
    backgroundColor:'lightgray',
    borderRadius:'10px',
    width:'200px',
    height:'200px',
    color:'orange',
    float:'left'

  }
  return(
    <div style={productStyle}>
      <h3>{props.name.name}</h3>
      <h5>{props.name.price}</h5>
      <button style={{ backgroundColor: 'green', color: 'white', padding: '6px 10px', border: 'none', borderRadius: '5px' }}>Buy Now</button>
    </div>
  );
}

function Person(props){
  const personStyle = {
    margin: '10px',
    borderRadius: '15px',
    width:'500px',
    background: 'skyblue',
    color:'blue',
    textShadow: '2px 2px 5px orange',
    boxShadow:'5px 5px 10px yellow'
  }
  return(
    <div style = {personStyle}>
      <h1>Name:{props.name} </h1>
      <h2>Job: {props.job} </h2>
    </div>
  );
}

export default App;
