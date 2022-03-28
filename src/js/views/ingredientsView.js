import Ingredients from "./ingredients";

function IngredientsView(props) {
    return (
        <div>
            <input onInput={e => props.search(e.target.value)}/>
            <h1>Ingredients: </h1>
            <Ingredients ingredients={props.ingredients} addIngredient={props.addIngredient}/>
            <h1>Add Ingredient: </h1>
            {
                props.searchResults == null || props.searchResults.ingredients == null ?
                    <div>
                        <div className={"container"}>
                                <div>
                                    <h1> Ingredient </h1>
                                    <div>
                                        <button disabled={true} className={"button-29"}> Add Ingredient
                                        </button>
                                    </div>

                                    <span>Description</span>
                                </div>
                        </div>
                    </div>

                    :
                    <div className={"container"}>
                        {props.searchResults.ingredients.map(ingr =>
                            <div>
                                <h1>{ingr.strIngredient}</h1>
                                <div>
                                    <button disabled={props.ingredients.includes(ingr.strIngredient)}
                                            onClick={e => props.addIngredient([...props.ingredients, ingr.strIngredient])}
                                            className={"button-29"}> Add Ingredient
                                    </button>
                                </div>


                                <span>{ingr.strDescription}</span>
                            </div>
                        )}

                    </div>
            }


            {

                console.log("Ingredients search props", props)
            }
        </div>
    );
}export default IngredientsView;

/*
     <div>
                {
                    props.ingredients.map( ingredient =>
                            <h1>{ingredient}</h1>
                     )
                }
            </div>

            map(ingredient => <h2> {ingredient.strIngredient}</h2>)
 */