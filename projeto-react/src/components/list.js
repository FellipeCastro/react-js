import Item from "./item.js";

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Fiat"/>
                <Item marca="Chevrolet"/>
            </ul>
        </>
    )
}

export default List