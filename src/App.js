import React from 'react';

import './js/fetch/searchDrink';
import DetailsView from './js/views/details';
import DrinksByIngredients from './js/views/drinksByIngredients';
import './js/views/ingredients';
import IngredientsView from './js/views/ingredientsView';
import Menu from './js/views/menu';
import './js/views/searchResults';

import SearchView from './js/views/searchView';


import './style2.css';

import DrinkSource from "./js/fetch/searchDrink";

function App() {
  const [query, setQuery] = React.useState("margarita");
  const [ingredientQuery, setIngredientQuery] = React.useState(null);

  const [searchMode, setSearchMode] = React.useState(false);
  //const [toggleMenu, setToggleMenu] = React.useState(false);

  const [drinks, setDrinks] = React.useState(null);
  const [random, setRandomDrink] = React.useState(null);
  const [drink, setDrink] = React.useState(null);
  const [ingredients, setIngredients] = React.useState(["Vodka"]);
  const [ingredientsResult, setIngredientsResult] = React.useState(null);
  const [drinksByIngredients, setDrinksByIngredients] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(function () {
    DrinkSource.searchDrinks({query: query})
        .then(dt => setDrinks(dt))
        .catch(er => setError(er))
  }, [query]);


  React.useEffect(function () {
    DrinkSource.getRandom()
        .then(dt => setRandomDrink(dt))
        .catch(er => setError(er))
  }, [query]);

  React.useEffect(function () {
    DrinkSource.searchIngredient({query: ingredientQuery})
        .then(dt => setIngredientsResult(dt))
        .catch(er => setError(er))
  }, [ingredientQuery]);


  React.useEffect(function () {
    Promise.all([...ingredients.map(ingredient =>
        DrinkSource.searchByIngredient({query: ingredient}))])
        .then(dt => {
          setDrinksByIngredients(dt);
          console.log("dt", dt);
        })
        .catch(er => setError(er)
        );
  }, [ingredients]);

  function toggleSearchMode() {
    setSearchMode(!searchMode);
  }

  function updateDrinkByName(name){
      DrinkSource.searchDrinks({query: name})
          .then(dt => {
              setDrink(dt.drinks[0])
          })
          .catch(er => setError(er))
  }

  return (
      <div>
        <Menu toggle={toggleSearchMode} state={searchMode}/>
        <div className="flexparent">
          <div>
            {
              searchMode ?
                  <div>
                    <IngredientsView searchResults={ingredientsResult} ingredients={ingredients}
                                     search={setIngredientQuery} addIngredient={setIngredients}
                                     searchByName={updateDrinkByName}/>
                    <DrinksByIngredients drinksArrays={drinksByIngredients} select={updateDrinkByName}/>
                  </div>
                  :
                  <div>
                    <SearchView searchResults={drinks} randomDrinks={random} search={setQuery}
                                select={setDrink}/>
                  </div>
            }
          </div>
          <div style={{width: "800px"}}>
            {drink != null ? <DetailsView drink={drink} setDrink={setDrink}/> : <>  </>}
          </div>
        </div>
      </div>)
}

export default App;
