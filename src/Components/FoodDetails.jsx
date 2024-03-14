import { useEffect, useState } from "react";
import style from './fooddetails.module.css';
import ItemList from "./ItemList";

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
            <div className={style.recipeCard}>
                <h1 className={style.recipeName}>{food.title}</h1>
                <img className={style.recipeImg} src={food.image} alt="" />
                <div className={style.recipeDetails}>
                    <span><strong>⏰ {food.readyInMinutes} minutes</strong></span>
                    <span><strong>👨‍👩‍👧‍👦 Serves {food.servings}</strong></span>
                    <span><strong>{food.vegetarian ? "🥦 Vegetarian" : "🥩 Non-Vegetarian"}</strong></span>
                    <span><strong>{food.vegan ? "🐮 Vegan" : ""}</strong></span>
                </div>
                <div>
                    <span><strong>${food.pricePerServing/100} Per serving</strong></span>
                </div>

                <ItemList food={food} isLoading={isLoading} />
                <h2>Instructions</h2>
                <div className={style.recipeInstructions}>
                    <ol>
                        {isLoading ?
                        <p>Gathering the data...</p> 
                        : food.analyzedInstructions[0].steps.map((step) => (
                            <li>{step.step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
};