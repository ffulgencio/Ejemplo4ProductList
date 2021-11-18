import { useEffect, useState } from "react"

const ComponentWithEffect = ()=>{
    const [mensaje, setMensaje] = useState("")

    useEffect(
        ()=>{ 
            setMensaje("Bienvenido al uso de useEffect!");
            console.log("El componente se ha montado");
        },[]
    )
    return (<div>{mensaje}</div>)
}
