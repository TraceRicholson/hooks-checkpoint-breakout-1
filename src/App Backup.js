import './App.css';
import React, { useState, useEffect, useReducer } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function App() {

  const classes = useStyles();

  /* State */
  const [productList, setProductList] = useState([])

  /* API Call to get product list */
  async function getProductList() {

    fetch('http://52.26.193.201:3000/products/list')
      .then(response => response.json())
      .then(response => {console.log(response)
                        setProductList([...response])})
      }

  useEffect(() => { getProductList() }, [])

  // useEffect(() => { listUsers(params, callback); }, [params]);

  /* Render */
  return (

    <div className="App">
      <header className="App-header">
        <div>
          This is a test 4 website.
          {productList[0].name}
        </div>
      </header>
    </div>
  );
}

export default App;
