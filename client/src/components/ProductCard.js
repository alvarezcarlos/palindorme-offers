import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { OfferPrice, FullPrice } from './Price'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import theme from '../theme/theme';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: '100px 0'
  },
  media: {
    height: 300,
  },
  cardActions: {
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center"
  },
  align: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "baseline",
    marginBottom: "2em"
  }
});

export default function ProductCard(props) {
  const classes = useStyles();
  //([^\/]+$)
  return (
    <Card elevation="10" className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`http://${props.product.image}`}
          title={ props.product.image.match('([^\/]+$)') }
        />
        <CardContent>
          <div className={classes.align}>
            <Typography variant="h6" component="h6">
              {props.product.brand}
            </Typography>
            <Typography 
            style={{marginLeft: "1em"}} 
            variant="body2" color="textSecondary" 
            component="p">
              {props.product.description}
            </Typography>
          </div>
          {props.product.offer ? <OfferPrice price={props.product.price}/> : <FullPrice price={props.product.price}/>}
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Agregar
        </Button>
      </CardActions>
    </Card>
  );
}