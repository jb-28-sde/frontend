import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { fetchProducts } from "../features/productSlice";
import { addToCart } from "../features/cartSlice";
import "./Product.css";
import FilterSidebar from "./FilterSidebar";

export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items = [], loading, error } = useSelector((state) => state.products);
  const { gender, category, price } = useSelector((state) => state.filters);

  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").toLowerCase().trim();

  useEffect(() => {
    if (!items.length) dispatch(fetchProducts());
  }, [dispatch, items.length]);

  const filtered = useMemo(() => {
    return items.filter((p) => {
      if (query && !p.title.toLowerCase().includes(query)) return false;
      if (gender && p.gender !== gender) return false;
      if (category && p.category !== category) return false;
      if (price && (p.price < price.min || p.price > price.max)) return false;
      return true;
    });
  }, [items, query, gender, category, price]);

  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  if (loading) return <div className="loader">Loading…</div>;
  if (error) return <div className="error">{error}</div>;
  if (!filtered.length)
    return <p style={{ textAlign: "center" }}>No products found.</p>;

  return (
    <div className="products-layout">
      <FilterSidebar />
      <div className="product-page">
        <h2 className="section-title">
          {query ? `Results for “${query}”` : "Explore All Products"}
        </h2>
        <hr />
        <div className="product-grid">
          {filtered.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.title} className="product-img" />
              <div className="product-info">
                <h2 className="product-name">
                  {item.title.length > 40
                    ? `${item.title.slice(0, 40)}…`
                    : item.title}
                </h2>
                <p className="product-price">₹{item.price}</p>
                <button
                  className="btn buy-btn"
                  onClick={() => handleBuyNow(item)}
                >
                  🛒 Buy Now
                </button>
                <Link
                  to={`/singleProduct/${item.id}`}
                  className="btn details-btn"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
