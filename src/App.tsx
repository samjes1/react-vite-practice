
import { BrowserRouter as Router, Link, Outlet, Route, Routes, NavLink } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home";
import Characters from "./pages/Characters";



function App() {
 
  return <div>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Characters" element={<Characters/>} />
      </Routes>
    </Router>
  </div>
    
    
  
}

function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Characters">Characters</NavLink>

      {/*   <link to="/">Home</link>
        <link to="/Character">Characters</link> */}
      </nav>
      <Outlet/>
    </>
  )
  
}

export default App;
