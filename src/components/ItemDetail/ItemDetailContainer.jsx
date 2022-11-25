import { getSingleItem } from "../../Services/fetchingService";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";
import MyButton from "../MyButton/MyButton";
import "./Itemdetail.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  async function getItemsAsync() {
    getSingleItem(id).then( respuesta => {
      setProduct(respuesta);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return <> { isLoading ? <Loader/> : <ItemDetail product={product}/> } </>
}


export default ItemDetailContainer;