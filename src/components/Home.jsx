import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="status">Loading…</p>;
  if (error)   return <p className="status error">Error: {error}</p>;

  return (
    <div className="shop-page">
      <div className="video-container">
        <video
          src="https://videos.pexels.com/video-files/5889074/5889074-uhd_2560_1440_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline   
        />
        <div className="video-overlay">
          <h1>Welcome to UniverseMart</h1>
          <Link to="/product" className="btn-primary">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}


      