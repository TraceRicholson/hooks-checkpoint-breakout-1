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
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import SimpleModal from './ModalEffect'

// GENERAL CARD STYLES
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 5
  },
  media: {
    height: 140,
  },

});

//MODAL STYLES
const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function CardCreator (props) {
  // console.log('card props', props)

  const classes = useStyles();
  const classesModal = useStylesModal()
  const [open, setOpen] = useState(false)
  const [thumbnails, setThumbnails] = useState([])
  const [numberOfThumbnails, setNumberOfThumbnails] = useState(0)

  async function getStyles(productList) {

  console.log('(Card getStyles has been called)')
  console.log(productList)
  for (let product of productList){
    console.log('(For loop reached')
      await fetch(`http://18.224.200.47/products/${product.id}/styles/`)
        .then(response => response.json())
        .then(response => {
          setThumbnails([...thumbnails, response.results[0].photos[0].thumbnail_url])})
      }
  }

  useEffect(() => {

    console.log('(Card useEffect has been called)')
    console.log("Inside Effect", props.productList)
    getStyles(props.productList)

  }, [])

//MODAL OPEN
  const handleOpen = () => {
    setOpen(true);
  };
//MODAL CLOSE
  const handleClose = () => {
    setOpen(false);
  };

  console.log("Outside Effect", props.productList)

  let cards = props.productList.map((product) => {
    return (<Card elevation={3} className={classes.root}>
      <CardActionArea >

        <CardMedia

          className={classes.media}
          image=''
          title='TEST'
          onClick={handleOpen}
          />
        <CardContent onClick={handleOpen}>

          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.slogan}
          </Typography>
        </CardContent>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classesModal.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classesModal.paper}>
            <h2 id="transition-modal-title">{product.name}</h2>
            {console.log('modal name', product.name)}
            <p id="transition-modal-description">{product.description}</p>

          </div>
        </Fade>
      </Modal>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          Style (In Progress)
        </Button>

      </CardActions>
    </Card>)
  })

  return cards;
}

export default CardCreator;


// document.querySelector("#json > ul > li:nth-child(2) > div > ul > li:nth-child(1) > div > ul > li:nth-child(6) > div > ul > li:nth-child(1) > div > ul > li:nth-child(1) > div > a")
