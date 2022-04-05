import { useState } from "react"

export default function Form({afazeres, setAfazeres}){
    const [id, setId] = useState(1)
    const [afazer, setAfazer] = useState('')
    function adicionar(nome){
        setAfazeres([...afazeres, {id, nome}])
        const newId = id + 1
        setId(newId)
        console.log(afazeres)
    }
    return <div>
        <input type="text" placeholder="Nova tarefa" onChange={(e)=>setAfazer(e.target.value)}/>
        <button onClick={()=> adicionar(afazer)}>Enviar</button>
    </div>
}