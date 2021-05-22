import { useEffect, useState } from 'react';
import Customer  from './Customer';
import NavBar from './NavBar';

function App() {

  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const url = 'https://intense-tor-76305.herokuapp.com/merchants';
    fetch(url,{
      method: 'GET',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then((response) => response.json())
    .then((data) => {
      setCustomerData(data);
    });
  },[]);

  return (
    <div>
      <NavBar/>
      <Customer customerData = {customerData}/>
    </div>
  );
}

export default App;