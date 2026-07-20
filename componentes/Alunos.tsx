import { table } from "console";

export function Alunos ({ nome, nota }: any) {
    const alunos = [
        { id: 1, nome: "Luis", nota: 7.5},
        { id: 2, nome: "Ana", nota: 9.0 },
        { id: 3, nome: "Daniel", nota: 4.4 },
        { id: 4, nome:"Pedro", nota: 9 },
        { id: 5, nome: "David", nota: 10 }
    ];
    return (
      <table className="w-full bg-white rounded-lg overflow-hidden text-black">
        <thead><tr><th className="border px-3 py-1">Nome</th><th className="border px-3 py-1">Nota</th></tr></thead>
        <tbody>
            {alunos.map(a => <tr key={a.id}><td className="border px-3 py-1">{a.nome}</td><td className="border px-3 py-1">{a.nota}</td></tr>)}
        </tbody>
      </table>
    )
}
    
