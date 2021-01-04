import React from 'react';
import Card from './Components/Card';
import Countrypicker from './Components/Countrypicker';
import Chart from './Components/Chart';

function App() {
  return (
   <>
   <div className="container">
     <Card />
     <Countrypicker />
     <Chart />
   </div>
   </>
  );
}

export default App;
