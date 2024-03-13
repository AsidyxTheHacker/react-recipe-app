import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = `3d2a74063d53463d9a839d082e3bbc85`;

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            setFood(data);
            setIsLoading(false);
        }
        fetchFood()
    }, [foodId]);

    return(
        <div>
            <div>
                <h1>{food.title}</h1>
                <img src={food.image} alt="" />
                <div>
                    <span><strong>⏰ {food.readyInMinutes} minutes</strong></span>
                    <span><strong>👨‍👩‍👧‍👦 Serves {food.servings}</strong></span>
                    <span>{food.vegetarian ? "🥦 Vegetarian" : "🥩 Non-Vegetarian"}</span>
                    <span>{food.vegan ? "🐮 Vegan" : ""}</span>
                </div>
                <div>
                    <span>${food.pricePerServing/100} Per serving</span>
                </div>
            </div>

            <div>
                <h2>Instructions</h2>
                {isLoading 
                ? <p>Gathering the data...</p> 
                : food.analyzedInstructions[0].steps.map((step) => (
                    <li>{step.step}</li>
                ))};
            </div>
        </div>
    )
};