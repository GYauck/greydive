import Links from './Pages/Links';
import { Routes, Route } from "react-router-dom";
import Paginas from './Pages/Paginas';



function App() {
  return (
    <Routes>
    <Route path='/' element={<Links/>}/>
    <Route path='/:cliente' element={<Paginas/>}/>
    </Routes>
    
  )
}

export default App;
