import { useEffect, useState } from 'react';
import Customer  from './Customer';

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
      <Customer customerData = {customerData}/>
    </div>
  );
}

export default App;
