import { Route, Routes } from 'react-router-dom';
import './cardContainer.css';
import Home from '../Pages/Dashboard/Home';





const CardContainer = () => {






      return (


            <div className="cards_Holder">
               
                  <Routes>
                        <Route exact path='/Covid-19-dashboard' element={<Home />} />
                        <Route exact path='/' element={<Home />} />

                  </Routes>






            </div>
      )
}

export default CardContainer;
