import './App.css'
import { Covenas1 } from './components/Covenas1'
import { Covenas3 } from './components/Covenas3'
import { Covenas4 } from './components/Covenas4'
import { Covenas5 } from './components/Covenas5'
import { Covenas6 } from './components/Covenas6'
import { Covenas } from './components/Covenas'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 id='title' className='text-center my-3'>Proyecto Galeria - Motos de ensueño</h1>
        </div>
        <div id='main-img-container' className='container'>
          <Routes>
            <Route path='/gsr1000' element={<Covenas className="image-size" />} />
            <Route path='/ktm1390' element={<Covenas1 className="image-size" />} />
            <Route path='/kawasakih2r' element={<Covenas3 className="image-size" />} />
            <Route path='/ktmrc8' element={<Covenas4 className="image-size" />} />
            <Route path='/bmws1000r' element={<Covenas5 className="image-size" />} />
            <Route path='/versys1000' element={<Covenas6 className="image-size" />} />
          </Routes>
        </div>
        <div className='container center'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
