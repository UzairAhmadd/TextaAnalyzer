// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Textform from './components/Textform.js';

function App() {
  const product = [
    {
      price:99999,
      name:"Iphone XR",
      quantity:0,
    },
    {
      price:9999,
      name:"Vivo V20",
      quantity:0,
    }
  ]
  return (
 <>
 <Navbar/>
 <div className='container mt-3'>
 <Textform heading="Enter The Text To Analyze"/>
 </div>
 </>
  );
}

export default App;
