function DetailsView(props) {

    function ingredients() {
        var strIngredient = [];
        for (var i = 0; i < 16; i++) {
            strIngredient[i] = props.drink["strIngredient" + i];
        }
        return strIngredient;
    }

    function measures() {
        var strMeasure = [];
        for (var i = 0; i < 16; i++) {
            strMeasure[i] = props.drink["strMeasure" + i];
        }
        return strMeasure;
    }


    return (

        props.drink == null ? <div></div> :
            <div className={"container"} >
                <h1>{props.drink.strDrink}</h1>
                <div className={'imageContainer'}>
                    <img className={"detailImage"} src={props.drink.strDrinkThumb}/>
                </div>
                <div className={'tableContainer'}>
                    <table className={"drinkTable"}>
                        <tr className={"drinkTable"}>
                            <th className={"drinkTable"}><h3>ingredients</h3></th>
                            <th className={"drinkTable"}><h3>measure</h3></th>
                        </tr>
                        <td className={"drinkTable"}>
                            {ingredients().map(x => <tr className={"drinkTable"}>{x}</tr>)}
                        </td>
                        <td className={"drinkTable"}>
                            {measures().map(x => <tr className={"drinkTable"}>{x}</tr>)}
                        </td>
                    </table>
                </div>
                <div className={'insContainer'}>
                    <h3>Mixing instructions</h3>
                    <div>{props.drink.strInstructions}</div>
                    <br></br>
                    <div>This drink should be served in a {props.drink.strGlass}. This drink is classified
                        as a {props.drink.strAlcoholic} drink in the category "{props.drink.strCategory}"
                        <b> please drink responsibly</b></div>
                </div>
            </div>


    );
}
export default DetailsView;



