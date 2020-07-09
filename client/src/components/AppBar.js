import React, {useContext} from 'react'
import { ProductContext } from '../context/products.provider'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const URL = "http://localhost:3001/api/products"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  searchIcon: {
    color: "#fff",
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  select: {
    padding: theme.spacing(.1, .2, .3, 1),
    color: fade(theme.palette.common.white, 0.40),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  }
}));


export default function SearchAppBar() {
  const classes = useStyles();
  const [searchBy, setSearchBy] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [products, setProducts] = useContext(ProductContext);
  

  const handleChange = event => {
    setSearchBy(event.target.value);
  };

  const handleSearchChange = event => {
    setSearch(event.target.value)
  }

  const getProducts = async () => {
    const response = await fetch(URL + searchBy + search)
    let products = await response.json();
    setProducts({data: products})
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Lider
          </Typography>
            <FormControl className={classes.formControl}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={searchBy}
                onChange={handleChange}
                className={classes.select}
                disableUnderline
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Busqueda por ...
                </MenuItem>
                <MenuItem value={"?id="}>Código</MenuItem>
                <MenuItem value={"?brand="}>Marca</MenuItem>
                <MenuItem value={"?description="}>Descripción</MenuItem>
              </Select>
            </FormControl>
          <div className={classes.search}>
            <InputBase
              placeholder="Buscar..."
              onChange={handleSearchChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={search}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton onClick={getProducts}>
            <SearchIcon className={classes.searchIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}