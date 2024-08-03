export default function ButtonComponents({nombre, color}){
    const misEstilos = {
        backgroundColor: color
    }
    return(
        <>
            <button style={misEstilos}>{nombre}</button>
        </>
    );
}