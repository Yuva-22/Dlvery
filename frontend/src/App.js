import './App.css';
import Home from './pages/home/home';
import Invlogin from './pages/invlogin/invlogin';
import Dellogin from './pages/dellogin/dellogin';
import InvHome from './pages/invhome/invhome';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element = {<Home />} />
          <Route path="invlogin">
            <Route index element = {<Invlogin />} />
            <Route path="/home" element = {<InvHome />} />
          </Route>
          <Route path="dellogin" element = {<Dellogin />} /> */}

        <Route path="/">

          <Route index element = {<Home />} />

          <Route path="invlogin">
            <Route index element={<Invlogin />} />
            <Route path="home" element={<InvHome />} />
          </Route>
          
          <Route path="dellogin">
            <Route index element = {<Dellogin />} />
          </Route>

        </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
