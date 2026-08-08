import { useState } from "react";

type Aluno = { id: number; nome: string; presente: boolean; }

export function AlunosPresentes() { 
    const [alunos] = useState<Aluno[]>([
        { id: 1, nome: "Luis Felipe", presente: true },
        { id: 2 , nome: "Ana Carolina", presente: false },
        { id: 3, nome: "Manuela Alves", presente: true }
    ]);
    const presentes = alunos.filter(a => a.presente).length;
    return(
        <p className="text-2xl font-bold">{presentes} presentes</p>
    );
}