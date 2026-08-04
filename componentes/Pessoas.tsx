function Cartao( {nome}: any) {
    return <div className="bg-white p-5 text-slate-800 rounded-x1 shadow-md text-center">{nome}</div>
}

export function Pessoas() {
    const pessoas = [
        { id: 1, nome: "Luis" },
        { id: 2, nome: "Vitoria" },
        { id:3, nome: "Pedro" }
    ];
    return (
        <div className="flex gap-3">
            {pessoas.map(p => <Cartao key={p.id} nome={p.nome}/>)}
        </div>
    );
}