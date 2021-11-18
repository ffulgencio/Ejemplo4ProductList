import { useState } from "react";
import FormSearch from "./FormSearch";
import ProductTable from "./ProductTable";
import { useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [textSearch, setTextSearch] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([...products]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/products")
      .then((resp) => setProducts([...resp.data]))
      .catch((error) => console.log(error));
    // fetch('http://127.0.0.1:5000/products')
    //     .then(response => response.json())
    //     .then(data => setProducts([...data]))
    //     .catch(error => console.log(error))
    return () => console.log("Componente ha sido desmontado");
  }, []);

  useEffect(() => {
    console.log("El estado ha sido actualizado");
  }, [category]);

  const handleChangeText = (e) => {
    setTextSearch(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredProducts(() => getFilteredProducts());
  };

  const getFilteredProducts = () => {
    return [
      ...products
        .filter((p) =>
          p.nombre.toLowerCase().includes(textSearch.toLowerCase())
        )
        .filter((r) => (category !== "" ? r.categoria === category : r)),
    ];
  };
  return (
    <>
      <h1>Product List</h1>
      <FormSearch
        text={textSearch}
        category={category}
        onChangeText={handleChangeText}
        onChangeCategory={handleChangeCategory}
        categories={[...new Set(products.map((p) => p.categoria))]}
        onSubmit={handleSubmit}
      />
      <ProductTable products={getFilteredProducts()} />
    </>
  );
};

export default ProductList;
