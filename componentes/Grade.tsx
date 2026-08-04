function Api({ nome, vip } : any) {
return(
  <div className="bg-blue rounded-2x1 p-4 shadow-lg text-center">
    <p className="font-bold text-slate-400">{nome}</p>
    {vip && <span>⭐Vip</span> }
  </div>
);
} 

export function Grade() {
    const cards = [
      { id:1 , nome: "Luis", vip: true },
      { id:2 , nome: "Ana", vip: false},
      { id:3 , nome: "Daniel", vip: true },
      { id:4 , nome: "Pedro", vip: true },
      { id:5 , nome: "Joao", vip: true},
      { id:6 , nome: "David", vip: false }
    ];
    return (
      <div className="flex flex-wrap gap-3 justify-center">
        {cards.map(c => <Api key={c.id} nome={c.nome} vip={c.vip}/>)}
      </div>
  );
}