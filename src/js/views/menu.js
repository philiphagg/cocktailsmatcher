function Menu(props){
    return(
      <div className={"flexparent"}>
          <button className={"button-29"} onClick={e => props.toggle()}> {props.state ? "Search For Drinks" : "Search For Ingredients"}</button>
      </div>
    );
}
export default Menu;
          ///<button className={"button-29"} onClick={e => props.toggle()}> Ingredients </button>
