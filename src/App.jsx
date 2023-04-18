import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header.jsx';
// import Main from './Components/Main.jsx';
import Footer from './Components/Footer.jsx';
import Favourites from './Components/favourites/Favourites';
import Form from './Components/Form';
import Map from './Components/Map';
import Description from './Components/Description';
import Home from './Components/Home';
import Basket from './Components/basket/Basket';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios';

export const AppContext = React.createContext({})

function App() {
const [modules, setModules] = useState([])
const [favourites, setFavourites] = useState([])
const [overlayItems, setOverlayItems] = useState([])

useEffect (() => {
  async function axiosData() {
    const modulesData = await axios.get('https://640ea6214ed25579dc38ea2f.mockapi.io/modules');
    const favouritesData = await axios.get('https://642d5a9966a20ec9ce9b1e0c.mockapi.io/favourites')
    const cartData = await axios.get('https://642d5a9966a20ec9ce9b1e0c.mockapi.io/cart')
    setModules(modulesData.data)
    setFavourites(favouritesData.data)
    setOverlayItems(cartData.data)
  }
    axiosData();
  }, []);
  
  const deleteItems=(id)=>{
    axios.delete(`https://642d5a9966a20ec9ce9b1e0c.mockapi.io/cart/${id}`)
    setOverlayItems((objDelete)=> objDelete.filter(item=> item.id !==id))
  }
  
  const isAdded=(myId)=>{
    return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
  }
  
  const isFav=(myId)=>{
    return favourites.some((objIsFav)=> objIsFav.myId === myId)
  }

  return (
    <AppContext.Provider
    value={
      {
        modules,
        setModules,
        overlayItems,
        setOverlayItems,
        favourites,
        setFavourites,
        isAdded,
        isFav
      }
    }>

      <div className="App">
        <Router>
          <Header/>
            <Routes>
              <Route path='/favourites' element={<Favourites
                favourites={favourites}
                setFavourites={setFavourites}
                item={modules}
                overlayItems={overlayItems}
                setOverlayItems={setOverlayItems}
              />}/>
              <Route path='/form' element={<Form/>}/>
              <Route path='/map' element={<Map/>}/>
              <Route path='/description' element={<Description/>}/>
              <Route path='/' element={<Home
                item={modules}
                overlayItems={overlayItems}
                setOverlayItems={setOverlayItems}
                favourites={favourites}
                setFavourites={setFavourites}
              />}/>
              <Route path='/cart' element={<Basket
                totalPrice={overlayItems.reduce((element = overlayItems.length, obj) => element+obj.price, 0)}
                overlayProp={overlayItems}
                deleteItems={deleteItems}
                        />
                    }
                />
            </Routes>
        </Router>
        {/* <Main/> */}
        
        <Footer/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
