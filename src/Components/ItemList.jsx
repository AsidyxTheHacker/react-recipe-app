import Item from './Item.jsx';

export default function ItemList({ food, isLoading }) {

    return(
        <div>
            <h2>Ingredients</h2>
            {isLoading ? (
                <p>Gathering the data...</p>
            ) : (
                food.extendedIngredients.map((item) => (
                    <Item item={item} />
                ))
            )}
        </div>
    )
};