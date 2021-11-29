import iconoCarrito from './cart4.svg';
import "./estiloCarrito.css";

function CartWidget(){
    return(
        <div className="divContenedor">
            <a href="#">
                <img src={iconoCarrito} alt="Icono Carrito"/>
            </a>
        </div>
    )
}

export default CartWidget;