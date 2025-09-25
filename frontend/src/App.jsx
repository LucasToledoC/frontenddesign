import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home'
import Client from './routes/Client.jsx'

import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    // o BrowserRouter habilita a navegação por rotas na aplicação
    <BrowserRouter>
    <Nav />
      {/* gerencia a exibição dos componentes com base na URL  */}
      <Routes>
        {/* rota para lidar com URLs não encontrada*/}
        <Route path='*' element={<Error />}/>
        {/* rota para a pagina home */}
        <Route path='/' element={<Home />}/>
        {/* rota para a pagina client */}
        <Route path="'/Client'" element={<Client />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App