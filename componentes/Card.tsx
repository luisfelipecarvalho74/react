export function Card(props: any) {
    return <div className="bg-slate-400 text-black rounded-x1 shadow-lg font-bold">Nome: {props.nome}, Cargo: {props.cargo}</div>
}