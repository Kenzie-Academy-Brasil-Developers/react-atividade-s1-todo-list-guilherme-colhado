export default function Lista({afazeres, setAfazeres}){
    const remover = id => setAfazeres(afazeres.filter(afazer => afazer.id !== id))
    return <ul>
        {afazeres.map( afazer => <li key={afazer.id}>{afazer.nome} <button onClick={()=>remover(afazer.id)}>Concluir tarefa</button></li>)}
    </ul>
}