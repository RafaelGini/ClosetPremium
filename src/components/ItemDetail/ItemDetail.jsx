import "./Itemdetail.css";

function ItemDetail({product}) {
  return (
    <div className="detail-productContainer">
      <div className="detail-product-img">
        <img src={product.imgurl} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      {/* <ItemCount stock={product.stock}/> */}
    </div>
  );
}

export default ItemDetail;