import { useState } from "react";

type Aluno = { id: number; nome: string; presente: boolean };

export function PresencaInterativa() {
    const [alunos, setAlunos] = useState<Aluno[]>([
      { id: 1, nome: "Ana Carolina", presente: false },
      { id: 2, nome: "Pedro Henrique Pais", presente: false },
    ]);
    const alternar = (id: number) =>
    setAlunos(alunos.map(a => a.id === id ? { ...a, presente: !a.presente }   : a));
    const presentes = alunos.filter(a => a.presente).length;
    return (
    <div className="text-center">
        <p className="font-bold mb-2">{presentes} presente(s)</p>
        {alunos.map(a => (
        <button key={a.id} onClick={() => alternar(a.id)} className="block    mx-auto my-1">
            {a.presente ? "🟢" : "⚪"} {a.nome}
        </button>
        ))}
    </div>
    );
}