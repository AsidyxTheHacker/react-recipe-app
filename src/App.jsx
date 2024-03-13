import { useState } from 'react';
import Search from './Components/Search';
import FoodList from './Components/FoodList';
import Nav from './Components/Nav';
import Container from './Components/Container';
import InnerContainer from './Components/InnerContainer';
import FoodDetails from './Components/FoodDetails';
import './App.css';

function App() {

  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(656329);

  return (
    <div className="App">
      <Nav />
       <Search foodData={foodData} setFoodData={setFoodData} />
       <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
       </Container>
    </div>
  )
}

export default App;