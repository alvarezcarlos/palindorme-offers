import React, { useContext } from 'react'
import { ProductContext } from '../context/products.provider'
import ProductCard from './ProductCard'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "2em",
    marginRight: "2em",
    display: 'flex',
    justifyContent: "center"
  },
  row:{
    display: 'flex',
    justifyContent: "center"
  }
}));

export default function ProductList(props){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Grid container spacing={1}>
      {props.products && props.products.map((product, idx) => {
        return(
        <Grid item xs={12} sm={6} lg={3}>
          <ProductCard product={product} key={idx}/>
        </Grid>
        )
      })}
      </Grid>
    </div>
  )
}