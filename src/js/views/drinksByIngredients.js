function DrinksByIngredients(props) {
    console.log("Drinks By Ingredients", props)

    /*
        //var n = props.drinksArrays.map( obj => obj.drinks)
        var n = props.drinksArrays;
       // console.log("testa", n);

        //var arrayOfArrays = [n];
        var a = _.intersection.apply(_, n);
        console.log("Deinks filteres", a);

        var arrayOfArrays = [[4234, 2323, 43], [1323, 43, 1313], [23, 34, 43]];
        var a = _.intersection.apply(_, arrayOfArrays);
        console.log(a);
        console.log(a.length);
     */

    //let result = [];
    /*

        props.drinksArrays.map(arr =>
            props.drinksArrays.map(otherArr => {
                    arr.map(drink => {
                            if (otherArr !== arr && arr.includes(drink))
                                console.log("duplicate")
                            //result = [...result,drink];
                        }
                    )
                }
            )
        )

        //var result = props.drinksArrays.indexOf(0).filter(val => !props.drinksArrays.indexOf(1).includes(val));
     */

    /*
        let arrays = props.drinksArrays;

        var result = arrays.shift().reduce(
            function (res, v) {
                if (res.indexOf(v) === -1 && arrays.every( function (a) { return a.indexOf(v) !== -1; }))
                    res.push(v);
                return res;
            }, []
        );
        console.log("test result hhhhe ", result)
    */
    function calculatedData() {

        let result = [];
        if (props.drinksArrays.length === 1) {
            result = props.drinksArrays[0];
        } else {
            props.drinksArrays.map((arr, index) =>
                arr.map(drink =>
                    props.drinksArrays.map((arr2, index2) => {

                            if (index !== index2 && (index < index2)) {

                                arr2.map(drink2 => {
                                        if (drink.idDrink === drink2.idDrink) {

                                            console.log("duplicate " + index + " " + index2, drink);
                                            result.push(drink);
                                        }
                                    }
                                )
                            }
                        }
                    )
                )
            )
        }
        console.log("reseuuue ", result)
        return result;
    }


    return (
        <div>
            <h1>Drinks by ingredients</h1>
            {
                calculatedData().map(drink =>
                    <div className={"container"} onClick={e => props.select(drink.strDrink)}>
                        <h3> {drink.strDrink} </h3>
                        <img className={"searchImage"} src={drink.strDrinkThumb}/>
                    </div>
                )

            }
        </div>
    );
}
export default DrinksByIngredients;