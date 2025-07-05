import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchProducts } from "../features/productSlice";
import { addToCart } from "../features/cartSlice";
import "./SingleProduct.css";

export default function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { items = [], loading, error } = useSelector((s) => s.products);
  const product = items.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!items.length) dispatch(fetchProducts());
  }, [dispatch, items.length]);

  if (loading || !product) return <div className="loader">Loading…</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="single-wrapper">
      <img src={product.image} alt={product.title} className="single-img" />

      <div className="single-info">
        <h1 className="single-title">{product.title}</h1>
        <p className="single-price">₹{product.price}</p>
        <p className="single-desc">{product.description}</p>

        <button
          className="btn buy-btn"
          onClick={() => dispatch(addToCart(product))}
        >
          🛒 Add to Cart
        </button>

        <Link to="/product" className="btn details-btn">
          Back to Products
        </Link>
      </div>
    </div>
  );
}
