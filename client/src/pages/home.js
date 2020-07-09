import React, {useContext, useState, useEffect} from 'react'
import { ProductContext } from '../context/products.provider'
import AppBar from '../components/AppBar'
import ProductList from '../components/ProductList'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { equalPartArray } from '../utils/utils'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    display: 'flex',
    justifyContent: 'center'
  },
}));

export default function Home(){
  const classes = useStyles();
  const perPage = 4;
  const [products] = useContext(ProductContext);
  const [page, setPage] = useState(1);
  const [pagedProducts, setPagedProducts] = useState([]);

  const handleChange = (event, value) => {
    setPage(value)
  };

  useEffect(() => {
    if(products.data){
      let pagedProducts = equalPartArray(products.data, perPage);
      setPagedProducts(pagedProducts);
      setPage(1);
    }
  }, [products.data])

  if(pagedProducts.length > 0){
    return(
      <div>
        <AppBar />
          <ProductList products={pagedProducts[page - 1]}/>
          <div className={classes.root}>
            <Pagination 
              count={pagedProducts.length} 
              page={page} 
              onChange={handleChange} 
              variant="outlined" 
              color="primary" 
            />
          </div>
      </div>
    )
  }else{return <AppBar />}
}