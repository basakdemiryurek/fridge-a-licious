import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

function CategoryList(): JSX.Element {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Meal Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.idCategory}>{category.strCategory}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
