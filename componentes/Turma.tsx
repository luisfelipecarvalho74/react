type Aluno = { id: number; nome: string; curso: string; }

function CardAluno({ aluno }: { aluno: Aluno }) {
    return <div className="bg-slate-800 text-white p-4 ">{aluno.nome} - {aluno.curso}</div>
}

export function Turma() {
    const turma: Aluno[] = [
        { id: 1, nome: "Pedro Henrique", curso: "Front-end" },
        { id: 2, nome: "João Pedro", curso: "Back-end"}
    ];
    return <div className="space-y-3 mb-2">{turma.map(a => <CardAluno key={a.id} aluno={a} />)}</div>;
}