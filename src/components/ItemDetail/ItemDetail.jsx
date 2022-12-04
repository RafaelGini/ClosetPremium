import "./Itemdetail.css";
import ItemCount from "./ItemCount";
import {useContext, useState} from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../MyButton/MyButton";
import { Link } from "react-router-dom";

function ItemDetail({product}) {

  window.scrollTo({top: 0, behavior: 'smooth'});

  const { addToCart } = useContext(cartContext);
  const [isInCart, setIsInCart] = useState(false);

  function onAddToCart(count) {
    setIsInCart(count);
    addToCart(product, count);
  }

  return (
    <div className="detail-productContainer">
      <div className="detail-product-img">
        <img src={product.imgurl} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2 className="descriptionTitle">{product.title}</h2>
        <p className="description">{product.description}</p>
        <p className="powerDesc"> <strong>Poder: </strong>{product.power}</p>
        <h4 className="priceTag">$ {product.price.toLocaleString('en')}</h4>
      </div>
    {
      isInCart ? 
        <Link to="/cart/"><MyButton>Ir al Carrito</MyButton></Link>
        : 
        <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
    }
    </div>
  );
}

export default ItemDetail;