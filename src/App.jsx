import { useState } from 'react';
import Search from './Components/Search';

function App() {

  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App">
       <Search foodData={foodData} setFoodData={setFoodData} />
    </div>
  )
}

export default App;