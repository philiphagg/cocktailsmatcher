import SearchResults from "./searchResults";

function SearchView(props) {
    return (
        <div>
            <input onInput={e => props.search(e.target.value)}/>
                

            <div>
                {
                    props.searchResults === null || props.searchResults.drinks === null ?
                        <div>
                            <h1> No drink exists in the database</h1>

                        </div>:
                        <SearchResults drinks={props.searchResults.drinks} select={props.select}/>
                }
            </div>
        </div>
    );
}export default SearchView;
                            //<SearchResults drinks={props.randomDrinks.drinks}/>
/*
*                             <SearchResults drinks={props.randomDrinks.drinks} select={props.select}/>
* */