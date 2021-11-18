import ProductList from "./components/ProductList";
import { useState } from "react";

function App(){
    const [visible, setVisible] = useState(true)
    return (
       <>
        {visible && <ProductList />}
        <button onClick={()=>setVisible(!visible)}>Ocultar</button>
       </>
    )
}

export default App;