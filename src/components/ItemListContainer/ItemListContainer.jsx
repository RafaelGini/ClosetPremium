import getItems from "../../Services/fetchingService";
import ItemList from "./ItemList";
import "./itemlist.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";


// MAIN COMPONENT
function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    getItems(idCategory).then(respuesta => {
      setProducts(respuesta);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  const title = setTitle(idCategory);

  const listContainer = (
    <div>
      <h1 className="tituloListContainer">{title}</h1>
      <ItemList products={products}/>
    </div> 
  );

  return <> { isLoading ? <Loader/> : listContainer } </>
}


// AUX FUNCTIONS
function setTitle(idCategory){
  if (idCategory !== "gamaMedia" && idCategory !== "gamaAlta"){
    return "Todos Los Anillos";
  } else {
    return (idCategory === "gamaAlta" ? "Anillos Gama Alta" : "Anillos Gama Media");
  }
}

export default ItemListContainer;