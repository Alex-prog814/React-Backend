import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div>
      Title: {item.title}
      Price: {item.price}$
      Category: {item.category.title}
      Likes: {item.likes}
      Author: {item.author}
      <button onClick={() => navigate(`/products/${item.id}`)}>Details</button>
      <button>Like</button>
      {item.is_author ? (<>
        <button>Edit</button>
        <button>Delete</button>
      </>) : null}
    </div>
  )
}

export default ProductCard