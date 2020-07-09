import React from 'react';
import { ProductProvider } from './context/products.provider'
//import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Home from './pages/home'
import theme from './theme/theme'

function App() {
  return (
    <ProductProvider>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Home />
        </div>
      </MuiThemeProvider>
    </ProductProvider>
  );
}

export default App;
