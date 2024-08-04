import './NavBar.css';
import ButtonComponent from "./ButtonComponent";
import CartWidget from './CartWidget';

export default function NavBar(){
    return(
        <>
            <nav className='barra'>
                <img style={{width:80 , height:80}} src="https://giselaparmelo.github.io/Blue-Moon/assets/img/logo.png" alt="logo" />
                <ButtonComponent nombre='About Us' color='red'/>
                <ButtonComponent nombre='Products' color='green'/>
                <ButtonComponent nombre='Contact' color='blue'/>
                <CartWidget/>
            </nav>
        </>
    )
}