import React, { useState, useEffect } from 'react';
import { fetchProducts } from './api';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts(page);
        setProducts((prev) => [...prev, ...data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [page]);

  const loadMore = () => setPage(page + 1);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!loading && <button onClick={loadMore}>Load More</button>}
    </div>
  );
};

export default ProductList;
