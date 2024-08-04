import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  
  return (
    <>
    <h1>Blue Moon</h1>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos al ecommerce"/>
    </>
  )
}

export default App
