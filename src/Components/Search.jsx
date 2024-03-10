import { useState, useEffect } from 'react';

export default function Search({ foodData, setFoodData }) {

    const URL = "https://api.spoonacular.com/recipes/complexSearch";
    const API_KEY = "3d2a74063d53463d9a839d082e3bbc85";
    const [query, setQuery] = useState("");

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results)
        };
        fetchFood()
    }, [query]);

    return(<div>
        <input 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Enter food..."
        type="text" />
    </div>)
};