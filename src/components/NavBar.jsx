import './NavBar.css';
import ButtonComponent from "./ButtonComponent";

export default function NavBar(){
    return(
        <>
            <nav className='barra'>
                <ButtonComponent nombre='About Us' color='red'/>
                <ButtonComponent nombre='Products' color='green'/>
                <ButtonComponent nombre='Contact' color='blue'/>
            </nav>
        </>
    )
}