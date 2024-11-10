import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import './index.css';
import GlobalStyles from "./styles/GlobalStyle";


const App=()=>{
return (
  <>
  <GlobalStyles/>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Hero/>}>
  </Route>
  </Routes>
  </BrowserRouter>
  </>
)
}


export default App;