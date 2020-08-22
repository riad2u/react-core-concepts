import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'PhotoShop', price: '$ 99.99' },
    { name: 'Illustrator', price: '$ 80' },
    { name: 'PDF Reader', price: '$ 7.99' },
    { name: 'XD', price: '$ 67.99' },
    { name: 'Premier Pro', price: '$ 207.99' },
    { name: 'After Effects', price: '$ 207.99' },
  ];

  // const productNames = products.map((product) => product.price);
  // console.log(productNames);

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: '#00b7c2' }}>I am a React Man</h1>
        {/* Use state and hook react */}
        <Counter></Counter>
        {/* use Api in react */}
        <Users></Users>
        {/* //only ul show through loop */}
        <ul>
          {products.map((product) => (
            <li style={{ textAlign: 'left' }}>{product.name}</li>
          ))}
        </ul>
        {/* full products component shows through loop */}
        {products.map((prod) => (
          <Product product={prod}></Product>
        ))}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        {/* 
        <Person name=" Riad" job=" Web Developer"></Person>
        <Person name=" Rishat" job=" Social Media Expert"></Person> */}
      </header>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    height: '240px',
    width: '240px',
    border: '1px solid gray',
    borderRadius: '25px',
    backgroundColor: '#2d4059',
    margin: '20px',
  };
  const { name, price } = props.product;
  console.log(props);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(5);
  // const handleIncrease = () => setCount(count + 1);
  // {
  //   const newCount = count + 1;
  //   // setCount(newCount);
  //   setCount(count + 1);
  // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function Person(props) {
  return (
    <div
      style={{
        border: '5px solid purple',
        width: '400px',
        margin: '10px',
        backgroundColor: '#506874',
        color: ' #c8e0ec',
      }}
    >
      <h2>Name:{props.name}</h2>
      <h3>Profession:{props.job}</h3>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
