import { ListItemAvatar } from '@material-ui/core';
import {useContext, useState, useEffect } from 'react'


function ProductsContainer() {
  const products = useContext(ProductsContext)

  const [selectedItem, setSelectedItem] = useState(-1)
  const [imageURL, setImageURL] = useState('')

  function handleClick(e){
      setImageURL('');

      if(selectedItem !== Number(e.target.selectedItem)) setSelectedItem(Number(e.target.id))
      else setSelectedItem(-1)
  }

  useEffect(async()=>{

    async function fetchImage() {
    if(selectedItem !==-1) {
      let url = `http://18.224.200.47/products/${products[selectedItem].id}/styles/`

      await fetch(url).then(res => res.json()
      .then(json=>{
        if(json.results[0].photos[0].thumbnail_url===null) setImageURL('https://media.giphy.com/media/LXONhtCmN32YU/giphy.gif')}
        else {
          setImageURL(json.results[0].photos[0].thumbnail_url===null)}))}
    else (setImageURL(''))
        }
  }, [selectedItem]);

  function conditionalHTML(index) {
    return (index===selectedItem?(
    <div className='popup-container'>
      <div className='left'>
        <p id={index}>
          Slogan: {products[index].slogan}
        </p>
        <p id={index}>
          Category: {products[index].category}
        </p>
        <p id={index}>
          Price: ${products[index].default_price}
        </p>
      </div>
      <div className='right'>
        <image id={index} src={imageURL}>

      </div>
    </div>) :(<></>))
  }
  let elementArray = products.map((item, index)=> {
  return <div className='product-card' id={index} onClick={handleClick}>
    <h2 id={index}>{item.name}</h2>
    <p id={index}>{item.desc}</p>
    {conditionalHTML{Number{index}}}
  </div>)


}
  return elementArray;
  }

export default ProductsContainer