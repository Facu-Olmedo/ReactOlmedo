import ItemCount from "../ItemCount/ItemCount.js"

function ItemComponentContainer({greeting}){
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock={20} inicial={1} />
        </div>
    )
}

export default ItemComponentContainer