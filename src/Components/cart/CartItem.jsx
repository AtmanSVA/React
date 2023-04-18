import React from 'react';
import Item from './Item';
import axios from 'axios';

const CartItem = (props) => {
  const onAddOverlay = async (obj)=>{
    try{
      const findOverlay = props.overlayItems.find(objOver=> objOver.myId === obj.myId)
      if(findOverlay){
        axios.delete(`https://642d5a9966a20ec9ce9b1e0c.mockapi.io/cart/${findOverlay.id}`)
        props.setOverlayItems((over) => over.filter(o=>o.myId !== obj.myId))
      }
      else{
        const {data} = await axios.post('https://642d5a9966a20ec9ce9b1e0c.mockapi.io/cart', obj)
        props.setOverlayItems([...props.overlayItems, data])
      }
    }
    catch{
      alert('Произошла ошибка')
    }
  }

  const onAddFav = async (obj)=>{
    try{
      const findFavourites = props.favourites.find(objFav=> objFav.myId === obj.myId)
      if(findFavourites){
        axios.delete(`https://642d5a9966a20ec9ce9b1e0c.mockapi.io/favourites/${findFavourites.id}`)
        props.setFavourites((over) => over.filter(o=>o.myId !== obj.myId))
      }
      else{
        const {data} = await axios.post('https://642d5a9966a20ec9ce9b1e0c.mockapi.io/favourites', obj)
        props.setFavourites([...props.favourites, data])
      }
    }
    catch{
      alert('Произошла ошибка')
    }
  }

  return (
<div className='conteiner py-3'>
  
    { 
      props.item.map(obj=>{
        return(
           <Item
           key={obj.id}
           id={obj.id}
           myId={obj.myId}
           title={obj.title}
           description={obj.description}
           price={obj.price}
           img={obj.img}

           favBtn={
            (favObj)=>{
              onAddFav(favObj)
            }
           }

           onPlus={(cartObj)=>{
            onAddOverlay(cartObj)
           }}
           />
        )
      })
    }
  </div>
  )
}

export default CartItem