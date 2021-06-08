import React, { useState, useEffect, useReducer } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';
import Modal from '@material-ui/core/Modal'
import SimpleModal from './ModalEffect'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 5
  },
  media: {
    height: 140,
  },

});



function CardCreator (props) {

  const [thumbnails, setThumbnails] = useState([])
  console.log('thumbnails', thumbnails)

  async function getStyles(productList) {

    productList.forEach((product) => {
        fetch(`http://52.26.193.201:3000/products/${product.id}/styles/`)
            .then(response => response.json())
            .then(response => {console.log(response)
                        setThumbnails([...thumbnails, response])})
    })
  }

  useEffect(() =>  {
      getStyles(props.productList)
  },                [])

  console.log('THUMBNAILS', thumbnails)






  const classes = useStyles();

  let cards = props.productList.map((product) => {
    return (<Card elevation={3} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=''
          title='TEST'

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.slogan}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Style (In Progress)
        </Button>
        <SimpleModal size="small" color="primary">
          Learn More
        </SimpleModal>
      </CardActions>
    </Card>)
  })

  return cards;
}


export default CardCreator;


// document.querySelector("#json > ul > li:nth-child(2) > div > ul > li:nth-child(1) > div > ul > li:nth-child(6) > div > ul > li:nth-child(1) > div > ul > li:nth-child(1) > div > a")
