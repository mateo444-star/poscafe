import React from "react";
import "./app.css";

const Categories = () => {
  return (
    <nav className="categories-nav">
      <ul>
        <li>
          <a href="/" className="category-link">
            <div className="category-all">ALL</div>
          </a>
        </li>
        <li>
          <a href="/" className="category-link">
            <div className="category-coffee">Coffee</div>
          </a>
        </li>
        <li>
          <a href="/" className="category-link">
            <div className="category-dessert">Dessert</div>
          </a>
        </li>
        <li>
          <a href="/" className="category-link">
            <div className="category-snack">Snack</div>
          </a>
        </li>
        <li>
          <a href="/" className="category-link">
            <div className="category-food">Food</div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
