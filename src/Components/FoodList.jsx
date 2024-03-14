import FoodItem from "./FoodItem";
import style from './foodlist.module.css';

export default function FoodList({ foodData, setFoodId }) {

    return(<div className={style.foodContainer}>
        {foodData.map((food) => (
            <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
        ))}
    </div>)
};