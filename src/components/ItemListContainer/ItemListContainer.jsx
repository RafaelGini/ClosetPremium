import getItems from "../../Services/fetchingService";
import Item from "./Item";
import "./itemlist.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  let title;
  if (idCategory !== "gamaMedia" && idCategory !== "gamaAlta"){
    title = "Todos Los Productos";
  } else {
    title = (idCategory === "gamaAlta" ? "Productos Gama Alta" : "Productos Gama Media");
  }


  return (
    <div className="item-list">
      <h1 className="tituloListContainer">{title}</h1>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            category={product.category}
            color="darkgreen"
          />
        );
      })}
    </div>
  );
}

export default ItemListContainer;