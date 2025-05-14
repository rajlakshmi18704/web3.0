import { Navbar,Welcome,Services,Transactions,Footer} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  "./App.css"
import Market from "./Pages/Market";
import HomePage from "./Pages/HomePage";
const App = () => (
  <div className="min-h-screen">
    

     <Router>
      <Routes>
               <Route path="/" element={    <HomePage/>} />  
         <Route path="/market" element={<Market />} />
        </Routes>
     </Router>
  </div>
);

export default App;