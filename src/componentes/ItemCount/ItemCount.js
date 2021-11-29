import React, {useState} from 'react'
import add from './plus-lg.svg'
import remove from './dash-lg.svg'

function ItemCount({stock, inicial, onAdd}){
    const [inicio, setInicio] = useState(inicial);

    const incrementar = () =>{
        debugger
        if(inicio < {stock}){
            setInicio(inicio++);
        }
        console.log(inicio)
        
    }

    const decrementar = () =>{
        debugger
        if(inicio > 1){
            setInicio(inicio--);
        }
        console.log(inicio)
    }

    const agregar = () =>{
        if(inicio > {stock}){

        }
        else{
            alert("Su pedido ha sido agregado al carrito");
            setInicio(1);
        }
    }

    return(
        <div>
            <button onClick={decrementar}>-</button>
            <input type="text" value={inicio}/>
            <button onClick={incrementar}>+</button>
            <div>
                <button onClick={agregar}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount