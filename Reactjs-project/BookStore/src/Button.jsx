import {useState} from 'react'

function ButtonClicked() {
    const [count, setCount] = useState(0);
    function Addcount() {setCount(count + 1);}

    function removeCount() {setCount(count - 1);}

    return(
        <>
            <button onClick={Addcount}>Add to Cart {count} Count</button>
            <button onClick={removeCount}>remove from Cart</button> 
        </>
    )
}

export default ButtonClicked;