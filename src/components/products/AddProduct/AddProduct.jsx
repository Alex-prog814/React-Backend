import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsContext } from '../../../contexts/productContext';

const AddProduct = () => {
  const navigate = useNavigate();

  const { getCategories, categories, createProduct } = useContext(productsContext);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    getCategories();
  }, []);

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("image", image);
    createProduct(newProduct, navigate);
  };

  return (
    <div>
      <h1>Add Product</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" /> <br />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Choose category</option>
        {categories?.map(item => (
          <option value={item.id} key={item.id}>{item.title}</option>
        ))}
      </select>

      <input accept="image/*" type="file" onChange={(e) => setImage(e.target.files[0])} /> <br />
      
      <button onClick={handleSave}>Save Product</button>
    </div>
  )
}

export default AddProduct