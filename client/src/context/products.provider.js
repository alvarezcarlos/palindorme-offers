import React, {createContext, useState} from 'react';

const initialState = {data: "hola  estoy en el context"};
const ProductContext = createContext(initialState);

const ProductProvider = ( { children } ) => {
  const [products, setProducts] = useState({data: null})

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {children}
    </ProductContext.Provider>
  )
};

export { ProductContext, ProductProvider }