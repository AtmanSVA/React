import React from 'react';
import axios from 'axios';
import Item from './Item';

const Favourites = (props) => {

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

  const onDeleteFav =(id)=>{
    
    axios.delete(`https://642d5a9966a20ec9ce9b1e0c.mockapi.io/favourites/${id}`)
    props.setFavourites((fav) => fav.filter(item => item.id !==id));
}


  return (
    <div>
      <div>
        <h1 className='col-md-8 offset-md-2'>Избранное</h1>
      </div>
      <div>
        {
          props.favourites.map(obj =>{
            return(
              <Item
              key={obj.id}
              id={obj.id}
              myId={obj.myId}
              title={obj.title}
              description={obj.description}
              price={obj.price}
              img={obj.img}
              
              onDeleteFav={
                (id)=>{
                onDeleteFav(id)
                }
              }

              onPlus={(cartobj)=>{
                onAddOverlay(cartobj)
                }
              }
              />

              )
            })
        }
        
      </div>
    </div>
  )
}

export default Favourites