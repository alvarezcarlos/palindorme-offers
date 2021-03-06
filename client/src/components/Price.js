import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import FormatNumber from './FormatNumber';
import theme from '../theme/theme';

const useStyles = makeStyles({
  chip:{
    backgroundColor: theme.palette.error.main,
    color: "#fff",
    marginLeft: "1em"
  },
  align: {
    display: "flex",
    justifyContent: "flex-start"
  }
});

export const OfferPrice = props => {
  const classes = useStyles();
  return(
    <div>
      <div className={classes.align}>
        <Typography gutterBottom variant="h5" component="h2">
          <FormatNumber number={props.price / 2} />
        </Typography>
        <Chip className={classes.chip} label="50%" />
      </div>
      <div className={classes.align}>
        <Typography 
          style={{textDecoration: "line-through"}}
          gutterBottom 
          variant="body2" 
          component="p"
        >
        <FormatNumber number={props.price} />
        </Typography>
      </div>
    </div>
  )
}

export const FullPrice = props => {
  const classes = useStyles();
  return(
    <div style={{marginBottom: "2em"}}className={classes.align}>
      <Typography gutterBottom variant="h5" component="h2">
        <FormatNumber number={props.price} />
      </Typography>
    </div>
  )
}