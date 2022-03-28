
function SearchResults(props) {
    return (
        <div>
            {
                props.drinks.map(drink =>
                    <div key={drink.idDrink}
                         className={"container"}
                         onClick={e => props.select(drink)}>
                        <h1>{drink.strDrink}</h1>
                        <img className={"searchImage"} src={drink.strDrinkThumb}/>
                        <h3>{drink.strCategory}</h3>
                        <h3>Alcoholic: {drink.strAlcoholic ? "✔" : "✘"}</h3>
                    </div>
                )
            }

        </div>
    );
} export default SearchResults;