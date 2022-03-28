function Ingredients(props) {
    return (
        <div>
        {
            props.ingredients.map(ingredient =>
                <div className={"container"}>
                    <h3>
                        <button className={"closeBtn"}
                            onClick={x => props.addIngredient([...props.ingredients.filter(rem => rem !== ingredient)])}>
                            <i className="fa fa-close"></i>
                        </button>
                        {ingredient} </h3>
                    <img src={"http://www.thecocktaildb.com/images/ingredients/" + ingredient + "-Small.png"}/>
                </div>
            )
        }
        </div>
    );
}export default Ingredients;