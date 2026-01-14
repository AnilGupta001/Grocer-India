import { useCart } from "../starpage/context/useCart";



function ProductCard({ product }) {
 const { addToCart } = useCart();


  return (
    <div className="bb-card">
      <div className="bb-discount">{product.discount}% OFF</div>

      <img src={product.image} alt={product.name}  className="bb-image" id="anil" />

      <div className="bb-delivery">⚡ 10 MINS</div>

      <div className="bb-info">
        <p className="bb-brand">{product.brand}</p>
        <h4 className="bb-name">{product.name}</h4>

        <select className="bb-qty">
          <option>{product.unit}</option>
        </select>

        <div className="bb-price">
          <span className="bb-new">₹{product.price}</span>
          <span className="bb-old">₹{product.oldPrice}</span>
        </div>

        <button className="bb-offer">Har Din Sasta!</button>

        <button className="bb-add" onClick={() => addToCart(product)}>Add</button>

      </div>
    </div>
  );
}

export default ProductCard;
