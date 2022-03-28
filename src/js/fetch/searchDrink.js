import React from 'react';

const BY_DRINK_NAME="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const BY_INGREDIENT="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
const INGREDIENT="https://www.thecocktaildb.com/api/json/v1/1/search.php?i=";
const RANDOM_DRINK="https://www.thecocktaildb.com/api/json/v1/1/random.php";
const BY_GLASS="https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";




const DrinkSource = {   // JS object creation literal
    searchDrinks(params) {
        return fetch(BY_DRINK_NAME + params.query)
            .then(response => {
                return response.json()
            })
            .then(drinks => {
                console.log("Search Drinks",drinks)
                return (drinks)
            });
    }
    ,
    searchByIngredient(params) {
        return fetch(BY_INGREDIENT + params.query)
            .then(response => {
                return response.json()
            })
            .then(drinks => {
                console.log("Search By ingredient " + params.query.toString(),drinks)
                return (drinks.drinks)
            });
    },
    searchIngredient(params) {
        return fetch(INGREDIENT + params.query)
            .then(response => {
                return response.json()
            })
            .then(drinks => {
                console.log("Search Ingredient",drinks)
                return (drinks)
            });
    },
    getRandom(params) {
        return fetch(RANDOM_DRINK)
            .then(response => {
                return response.json()
            })
            .then(drinks => {
                console.log("Random search",drinks)
                return (drinks)
            });
    }
}
export default DrinkSource;

/*
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + params.query)
            .then(response => {
                return response.json()
            })
            .then(drinks => {
                console.log(drinks)
                return(drinks)
            })
 */