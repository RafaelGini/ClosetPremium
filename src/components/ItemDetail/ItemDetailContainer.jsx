import { getSingleItem } from "../../Services/fetchingService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log(id)

  async function getItemsAsync() {
    const respuesta = await getSingleItem(id);
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return <ItemDetail product={product} />;
}
export default ItemDetailContainer;