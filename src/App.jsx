import { useState } from 'react';
import Search from './Components/Search';
import FoodList from './Components/FoodList';
import Nav from './Components/Nav';
import Container from './Components/Container';
import InnerContainer from './Components/InnerContainer';
import './App.css';

function App() {

  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App">
      <Nav />
       <Search foodData={foodData} setFoodData={setFoodData} />
       <Container>
        <InnerContainer>
          <FoodList foodData={foodData} />
        </InnerContainer>
       </Container>
    </div>
  )
}

export default App;