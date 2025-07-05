import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGender, setCategory, setPrice, clearFilters } from "../features/FilterSlice";
import "./FilterSidebar.css";


const genders   = ["men", "women", "kids"];
const categories = ["electronics", "clothing", "shoes", "accessories"];
const priceSteps = [
  { label: "₹0 – ₹999",     range: [0, 999]   },
  { label: "₹1000 – ₹4999", range: [1000, 4999] },
  { label: "₹5000 – ₹9999", range: [5000, 9999] },
  { label: "₹10000+",       range: [10000, 100000] }
];

export default function FilterSidebar() {
  const dispatch = useDispatch();
  const { gender, category, price } = useSelector(state => state.filters);

  return (
    <aside className="filter-sidebar">
      <h3>Filters</h3>

      <section>
        <h4>Gender</h4>
        {genders.map(g => (
          <label key={g} className="filter-item">
            <input
              type="radio"
              checked={gender === g}
              onChange={() => dispatch(setGender(g))}
            />
            {g}
          </label>
        ))}
        <label className="filter-item">
          <input
            type="radio"
            checked={gender === ""}
            onChange={() => dispatch(setGender(""))}
          />
          All
        </label>
      </section>

      <section>
        <h4>Category</h4>
        <select
          value={category}
          onChange={e => dispatch(setCategory(e.target.value))}
        >
          <option value="">All</option>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </section>

      <section>
        <h4>Price</h4>
        {priceSteps.map(p => (
          <label key={p.label} className="filter-item">
            <input
              type="radio"
              checked={price[0] === p.range[0] && price[1] === p.range[1]}
              onChange={() => dispatch(setPrice(p.range))}
            />
            {p.label}
          </label>
        ))}
      </section>

      <button className="clear-btn" onClick={() => dispatch(clearFilters())}>
        Clear Filters
      </button>
    </aside>
  );
}
