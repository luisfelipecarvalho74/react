type Aluno = { id: number; nome: string; pontos: number; }

function Card({ aluno }: { aluno: Aluno }) {
    return <div className="bg-slate-800 text-center font-bold text-white rounded">{aluno.nome} - {aluno.pontos} pontos</div>;
}

export function Lista() {
    const turma = [
        {id: 1, nome: "Luis", pontos: 30},
        {id: 2, nome:"Ana", pontos: 32},
        {id: 3, nome: "Daniel", pontos: 33}
    ];
    return (
        <ul className="space-y-2 mb-2">
             {turma.map(a => <Card key={a.id} aluno={a} />)}
        </ul>
    );
}